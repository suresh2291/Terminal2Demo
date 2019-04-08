const db = require('../config/db.config.js');
const UserDetails = db.userdetails;
const  UserAddress = db.useraddress;
// Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	UserDetails.create({  
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email:req.body.email,
        phone:req.body.phone,
        location:req.body.location,
        datecreated:req.body.datecreated
	}).then(userdetails => {		
		// Send created customer to client
		res.send(userdetails);
	}).catch((err)=>{
        res.status(400).send(err.parent.sqlMessage)
    })
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
	// UserDetails.findAll({  include: [ {model: UserAddress, required: true }], /*make join with associated model's table*/
    // attributes: []}).then(userdetails => {
	//   // Send all customers to Client
	//   res.send(userdetails);
	// }).catch((err)=>{
    //     res.status(400).send(err)
    // })
    db.sequelize.query('SELECT id,username,firstname,lastname,email,phone,location,datecreated,addressLine1,addressLine2,city,landmark,state,pincode  FROM testdb.userdetails INNER JOIN testdb.useraddress ON testdb.userdetails.id = testdb.useraddress.userId ').then(function(rows){
        res.send(rows[0]);
    });
};

// Find a Customer by Id
exports.findById = (req, res) => {	
	UserDetails.findById(req.params.userId).then(customer => {
		res.send(customer);
	})
};
 
// Update a Customer
exports.update = (req, res) => {
	const id = req.params.userId;
	UserDetails.update( { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }, 
					 { where: {id: req.params.userId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a customer with id = " + id);
				   });
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.userId;
	UserDetails.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a customer with id = ' + id);
	}).catch((err)=>{
        res.status(404).send(err.parent.sqlMessage)
    })
};