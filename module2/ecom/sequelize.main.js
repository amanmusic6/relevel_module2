const {userController} = require('./controllers/user.controller')
const {productController} = require('./controllers/product.controller')

const {executeWithSync} = require('./sequelize.connection')

// let p1 = userController.createUser({
//     id : 7,
//     name : 'rohan',
//     email: 'rohn@gmail.com',
//     password:'rohnpass'
// }).then(()=>{
//     //userController.deleteUserById(4);
//     console.log("user inserted");
// }) 

// executeWithSync(p1) 

// let p2 = userController
//      .findAllUsers(2,'created_at')
//     .then((users) => users.map((user) => user.dataValues))
//     .then((users)=>users.forEach(element => {
//              console.log(element)}))

// executeWithSync(p2);

// let p3 = userController.findUserById(6)
//     .then((data)=>{
//         return console.log(data.dataValues)
//     })

// executeWithSync(p3);

// let p4 = userController.updateUserById({email: 'mymail@relevel.com'}, 5)
//         .catch((error)=>console.log(error))
    
// executeWithSync(p4)

 let p5 = userController
 .findUserById(3,true) // includes is array of object
 .then((data)=>{
    console.log(data);
 })
 executeWithSync(p5)

// let p6 = productController
// .findProductById(3,true) // includes is array of object
// .then((data)=>{
//    console.log(data);
// })
// executeWithSync(p6)

//...................................................................................................................
//  const {Sequelize, DataTypes} = require('sequelize')
//     //console.log(Sequelize);
// let sequelize = new Sequelize('ecommerce','root','root',{
//     host : 'localhost',
//     dialect : 'mysql',
//     define : {
//         timestamps : false
//     }
// })

// sequelize.authenticate().then(()=>{
//     console.log("connected successfully...");
// }).catch((error)=>{
//     console.log("error while connecting",error);
// })

// let userModel = sequelize.define("user",{
//     id:{
//         type: DataTypes.TINYINT,
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name:{
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     email:{
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     password:{
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     created_at:{
//         type: DataTypes.DATE,
//         defaultValue: sequelize.fn('NOW') // with fn function we can call database function

//     }
// })

// //sequelize.sync()
// let user1 = {
//     id: 6,
//     name: 'raushan',
//     email: 'raushan@gmail.com',
//     password: 'raushan'
// }

// function createUser(user1){
//     sequelize.sync().then(()=>{
//         userModel.create(user1).then(()=>{
//             console.log('user created successfully');
//         })
//     })
// }
// //createUser(user1);
// sequelize.sync();

// function deleteUserById(id){
//     sequelize.sync().then(()=>{
//         userModel.destroy({
//             where : {
//                 id: id
//             }
//         }).then(()=>{
//             console.log('user deleted successfully');
//         })
//     })
// }
// deleteUserById(4)