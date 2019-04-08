module.exports = function(app) {
 
    const userdetails = require('../controller/userdetails.controller.js');
 
    // Create a new user
    app.post('/api/userdetails', userdetails.create);
 
    // Retrieve all user
    app.get('/api/userdetails', userdetails.findAll);
 
    // Retrieve a single user by Id
    app.get('/api/userdetails:userId', userdetails.findById);
 
    // Update a user with Id
    app.put('/api/userdetails:userId', userdetails.update);
 
    // Delete a user with Id
    app.delete('/api/userdetails/:userId', userdetails.delete);
}