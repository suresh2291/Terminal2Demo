const UserDetails = require('./userdetails.model')
module.exports = (sequelize, Sequelize) => {
    const UserAddress = sequelize.define('useraddress', {
        uaid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        userId: {
           type: Sequelize.INTEGER,
           references: {
              model: 'userdetails', 
              key: 'id', // 'id' refers to column name in persons table
           }
        },
        type:{type:Sequelize.STRING(50),
            allowNull: false,
            },
        addressLine1:{type:Sequelize.STRING(50),
            allowNull: false,
            },
        addressLine2:{type:Sequelize.STRING(50),
            allowNull: false,
            },
        city:{type:Sequelize.STRING(50),
            allowNull: false,
            },
        landmark:{type:Sequelize.STRING(50),
            allowNull: true},
        state:{type:Sequelize.STRING(50),
            allowNull: false,
            },
        pincode:{type: Sequelize.INTEGER,
            allowNull: false,
            }

        },{
            tableName: 'useraddress',
            createdAt: false, // disable createdAt
            updatedAt: false // disable updatedAt
         });
        //  UserAddress.associate =  function (models) {
        //       UserAddress.hasOne(models.UserDetails, {foreignKey: 'id'});
        // };
          
    return UserAddress
    }

    