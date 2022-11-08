const {Sequelize,DataTypes} = require('sequelize')

function createConnection(){
    let sequelize = new Sequelize('ecom','root','root',{
        host : 'localhost',
        dialect : 'mysql',
        define : {
            timestamps : false
        }
    })

    sequelize.authenticate().then(()=>{
        console.log('You are connected to the database successfully');
    }).catch(()=>{
        console.log('error occured while connecting');
    })
    return {sequelize};
}

let {sequelize} = createConnection();

function executeWithSync(promiseCallBack){
 sequelize.sync().then(()=>promiseCallBack)   
}
module.exports = {sequelize,executeWithSync,DataTypes}