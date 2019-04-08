module.exports = function(app) {
 
    const useraddress = require('../controller/useraddress.controller.js');
 
    // Create a new user
    app.post('/api/useraddress', useraddress.create);
 
    // Retrieve all user
    app.get('/api/useraddress', useraddress.findAll);
 
    // Retrieve a single user by Id
    app.get('/api/useraddress:userId', useraddress.findById);
 
    // Update a user with Id
    app.put('/api/useraddress/:userId', useraddress.update);
 
    // Delete a user with Id
    app.delete('/api/useraddress/:userId', useraddress.delete);
}