const {sequelize,DataTypes} = require('./../sequelize.connection')
const {userModel} = require('./user.model')

function initializeOrderSchema(){
    let orderModel = sequelize.define('orders',{
        id:{
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        productId:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        userid:{
            type: DataTypes.BIGINT, //tinyint
            allowNull: false
        },
        payment:{
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0
        },
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at:{
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('NOW')
        }
        
    })

    orderModel.hasOne(userModel, {
        foreignKey: 'userId'
    });

    userModel.belongsToMany(orderModel, {
        foreignKey: 'userId'
    });

    return orderModel;
}
let orderModel = initializeOrderSchema();
module.exports={orderModel}

/*
    1. regex in app.all
    2. Transaction Control
    3. hasOne and belongsToMany
*/