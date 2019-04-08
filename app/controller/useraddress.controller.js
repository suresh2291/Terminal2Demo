const db = require('../config/db.config.js');
const UserAddress = db.useraddress;
// Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	UserAddress.create({  
        uaid: req.body.uaid,
        userId: req.body.userId,
        type: req.body.type,
        addressLine1:req.body.addressLine1,
        addressLine2:req.body.addressLine2,
        city:req.body.city,
        landmark:req.body.landmark,
        state:req.body.state,
        pincode:req.body.pincode
	}).then(useraddress => {		
		// Send created customer to client
		res.send(useraddress);
	}).catch((err)=>{
        res.status(400).send(err.parent.sqlMessage)
    });
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
	UserAddress.findAll().then(useraddress => {
	  // Send all customers to Client
	  res.send(useraddress);
	}).catch((err)=>{
res.status(404).send(err.parent.sqlMessage)
    })
};

// Find a Customer by Id
exports.findById = (req, res) => {	
	UserAddress.findById(req.params.userId).then(customer => {
		res.send(customer);
	})
};
 
// Update a Customer
exports.update = (req, res) => {
	const id = req.params.userId;
	UserAddress.update( { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }, 
					 { where: {id: req.params.userId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a customer with id = " + id);
				   });
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
    const id = req.params.userId;
    console.log(id)
	UserAddress.destroy({
	  where: { uaid: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a customer with id = ' + id);
	}).catch((err)=>{
        res.status(404).send(err)
    })
};