const { orderModel } = require('./../models/order.model');
const { productModel } = require('./../models/product.model');
/*
implement below funcatonality:
1. findMaxProduct
2. findAllProductsWithOrders
3. countProdustsByCategory
*/
class ProductController {
    constructor() {
        this.schema = productModel;
    }

    createProduct(product) {
        return this
        .schema
        .create(product)
        .then(() => console.log('Product Created'));
    }

    deleteProductById(id) {
        return this
        .schema
        .destroy({
            where: {
                id: id
            }
        })
        .then(() => console.log('Product Deleted')).catch((error) => {
            console.log('error in deleting product', error);
        });
    }
    updateProductById(user,id){
        return this.schema.update(user,{
            where : {
                id : id
            }
        })
    }

    findProductById(id,orderModelRequired){
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
    // findAllProducts(limit,orderByCol,orderByDir="ASC"){
    //     return this.schema.findAll({
    //         limit : limit,
    //         order : [
    //             [orderByCol,orderByDir]
    //     ]
    //     })
    // }

    createOrderModelInclude() {
        return {
            required: true,
            model: orderModel
        }
    }
}
let productController = new ProductController();
module.exports = { productController };