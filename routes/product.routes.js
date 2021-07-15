module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  // Create a new Product
  app.post("/products", products.create);

  // Retrieve all Products
  app.get("/products", products.findAll);

  // Retrieve a single Product with productId
  app.get("/products/:productId", products.findOne);

  // Update a product with productId
  app.put("/products/:productrId", products.update);

  // Delete a product with productId
  app.delete("/products/:productId", products.delete);

  // Create a new product
  app.delete("/products", products.deleteAll);
};
