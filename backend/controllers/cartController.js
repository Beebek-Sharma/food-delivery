import userModel from "../models/userModel.js";

// add to user cart  
const addToCart = async (req, res) => {
   try {
      let userData = await userModel.findOne({_id: req.body.userId});

      // Check if userData exists
      if (!userData) {
         return res.status(404).json({ success: false, message: "User not found" });
      }

      let cartData = userData.cartData || {}; // Default to an empty object if cartData is null

      if (!cartData[req.body.itemId]) {
         cartData[req.body.itemId] = 1;
      } else {
         cartData[req.body.itemId] += 1;
      }

      await userModel.findByIdAndUpdate(req.body.userId, { cartData });
      res.json({ success: true, message: "Added To Cart" });
   } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error adding to cart" });
   }
};

// remove food from user cart
const removeFromCart = async (req, res) => {
   try {
      let userData = await userModel.findById(req.body.userId);

      // Check if userData exists
      if (!userData) {
         return res.status(404).json({ success: false, message: "User not found" });
      }

      let cartData = userData.cartData || {}; // Default to an empty object if cartData is null

      if (cartData[req.body.itemId] > 0) {
         cartData[req.body.itemId] -= 1;
         if (cartData[req.body.itemId] === 0) {
            delete cartData[req.body.itemId]; // Optionally remove item if quantity is 0
         }
      } else {
         return res.status(400).json({ success: false, message: "Item not in cart" });
      }

      await userModel.findByIdAndUpdate(req.body.userId, { cartData });
      res.json({ success: true, message: "Removed From Cart" });
   } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error removing from cart" });
   }
};

// get user cart
const getCart = async (req, res) => {
   try {
      let userData = await userModel.findById(req.body.userId);

      // Check if userData and cartData exist
      if (!userData || !userData.cartData) {
         return res.status(404).json({ success: false, message: "Cart data not found" });
      }

      let cartData = userData.cartData;
      res.json({ success: true, cartData: cartData });
   } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error retrieving cart data" });
   }
};

export { addToCart, removeFromCart, getCart };
