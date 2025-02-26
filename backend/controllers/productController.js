import {v2 as cloudinary} from 'cloudinary'
import productModel from "../models/productModel.js";

// functions for add product
const addProduct = async (req, res) => {
    try {
        const {name, description, price, category, subCategory, sizes, bestSeller} = req.body;

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        // imp to get links
        let imagesURL = await Promise.all(
            images.map(async (image) => {
                let result = await cloudinary.uploader.upload(image.path, {resource_type: 'image'});
                return result.secure_url;
            })
        )

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            // bestSeller: bestSeller === "true" ? true : false,
            bestSeller: bestSeller === "true",
            image: imagesURL,
            date: Date.now(),
        }

        console.log(productData);

        const product = new productModel(productData);

        await product.save()

        res.json({success: true, product: product, message: 'Product Added Successfully'})

    } catch (e) {
        console.log(e)
        res.json({success: false, message: e.message})
    }
}

// function for list products
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({})
        res.json({success: true, products})
    } catch (e) {
        console.log(e)
        res.json({success: false, message: e.message})
    }
}

// function for remove product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message: 'Product Removed Successfully'})
    } catch (e) {
        console.log(e)
        res.json({success: false, message: e.message})
    }
}

// function for single product info
const singleProduct = async (req, res) => {
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        res.json({success: true, product: product, message: 'Product Displayed Successfully'})
    } catch (e) {
        console.log(e)
        res.json({success: false, message: e.message})
    }
}

export {addProduct, listProducts, singleProduct, removeProduct}