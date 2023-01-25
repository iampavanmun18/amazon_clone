const Products = require('./models/productsSchema');
const  productsdata = require("./constant/productdata");

const DefaultData = async()=>{
    try {

        await Products.deleteMany({});
        const storedata = await Products.insertMany(productsdata);
        console.log("StoreData", storedata)
    } catch (error) {
        console.log("error", error.message);
    }
}

module.exports = DefaultData