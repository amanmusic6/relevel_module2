const { userModel } = require('./../models/user.model');
const { orderModel } = require('./../models/order.model');

class UserController {
    constructor() {
        this.schema = userModel;
    }

    createUser(user) {
        return this
        .schema
        .create(user)
        .then(() => console.log('User Created'));
    }

    deleteUserById(id) {
        return this
        .schema
        .destroy({
            where: {
                id: id
            }
        })
        .then(() => console.log('User Deleted')).catch((error) => {
            console.log('error in deleting user', error);
        });
    }
    updateUserById(user,id){
        return this.schema.update(user,{
            where : {
                id : id
            }
        })
    }
    // findUserById(id,orderModelRequired){
    //     let orderModelInclude = null
    //     if(orderModelRequired) {
    //         orderModelInclude = this.createOrderModelInclude();
    //     }
    //     return this.schema.findOne({
    //         where: {
    //             id: id
    //         },
    //         include: [ orderModelInclude ]
    //     });
    // }
    findUserById(id,orderModelRequired){
        let orderModelInclude = null
        if(orderModelRequired){
            orderModelInclude = this.createOrderModelInclude();
        }
        return this.schema.findOne({
            where:{
                id:id
            },
            include: [orderModelInclude]
        })
    }
    findAllUsers(limit,orderByCol,orderByDir="ASC"){
        return this.schema.findAll({
            limit : limit,
            order : [
                [orderByCol,orderByDir]
        ]
        })
    }

    createOrderModelInclude() {
        return {
            required: true,
            model: orderModel
        }
    }
}
let userController = new UserController();
module.exports = { userController };