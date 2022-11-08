const {sequelize,DataTypes} = require('./../sequelize.connection')
const {orderModel} = require('./order.model')
function initializeProductSchema(){
    let productModel = sequelize.define('products',{
        id:{
            type: DataTypes.TINYINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        category:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        created_at:{
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('NOW')
        }
    })
    productModel.hasMany(orderModel,{
        foreignKey: 'productId'
    })
    orderModel.belongsTo(productModel,{
        foreignKey: 'productId'
    })
    return productModel;
}
let productModel = initializeProductSchema();
module.exports={productModel}