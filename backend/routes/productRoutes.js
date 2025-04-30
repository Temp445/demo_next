const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const multer = require("multer");
const path = require("path");

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

//get
router.route("/product").get(getAllProducts);

//post
router.route("/product").post(upload.fields([{ name: "imageUrl" }, { name: "gallery" }]), createProduct);

//get product by ID
router.route("/product/:id").get(getProductById);




//update
router.route("/product/:id").put(upload.fields([{ name: "imageUrl" }, { name: "gallery" }]), updateProduct);

//delete
router.route("/product/:id").delete(deleteProduct);

module.exports = router; 
