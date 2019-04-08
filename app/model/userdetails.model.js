
module.exports = (sequelize, Sequelize) => {
const UserDetails = sequelize.define('userdetails', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
username:{
type:Sequelize.STRING(50),
allowNull: false,

},
firstname:{
    type:Sequelize.STRING(50),
    allowNull: false,
    
},
lastname:{
    type:Sequelize.STRING(50),
    allowNull: false,
    
},email:{
    type:Sequelize.STRING(255),
    allowNull: false,
    validate: {
        isEmail: true
    },
   
},phone:{
    type:Sequelize.STRING(50),
    allowNull: false,
   
},location:{
    type:Sequelize.STRING(50),
    allowNull: false,
    
},datecreated:{
    type: Sequelize.DATE, 
    defaultValue: Sequelize.NOW,
    allowNull: false,
    
}
	},{
        tableName: 'userdetails',
        createdAt: false, // disable createdAt
        updatedAt: false // disable updatedAt
     });

     UserDetails.associate =  function (models) {
	  UserDetails.belongsTo(models.UserAddress, {foreignKey: 'userId'});
	};
    return UserDetails;
    
}



