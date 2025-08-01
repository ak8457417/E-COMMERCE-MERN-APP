import userModel from "../models/userModel.js";

const addToCart = async (req, res) => {
    try {
        const {userId, itemId, size} = req.body;

        const userData = await userModel.findById(userId);
        const cartData = await userData.cartData;

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1;
        }

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({success: true, message: 'Added to cart'})

    } catch (e) {
        console.log(e)
        res.json({success: false, message: e.message})
    }
}

const updateCart = async (req, res) => {
    try {

        const {userId, itemId, size, quantity} = req.body;

        const userData = await userModel.findById(userId);
        const cartData = await userData.cartData;

        cartData[itemId][size] = quantity;

        await userModel.findByIdAndUpdate(userId, {cartData})
        res.json({success: true, message: 'Cart updated'})

    } catch (e) {
        console.log(e)
        res.json({success: false, message: e.message})
    }
}

const gerUserCart = async (req, res) => {
    try {

        const {userId} = req.body;

        let userData = await userModel.findById(userId);
        const cartData = await userData.cartData;

        res.json({success: true, cartData})

    } catch (e) {
        console.log(e)
        res.json({success: false, message: e.message})
    }
}

export { addToCart, updateCart, gerUserCart }