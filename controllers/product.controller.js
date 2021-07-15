const Product = require("../models/product.model.js");

// Create and Save a new Product
exports.create = (req, res) => {};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  Product.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else res.send(data);
  });
};

// Find a single Product with a productId
exports.findOne = (req, res) => {};

// Update a Product identified by the productId in the request
exports.update = (req, res) => {};

// Delete a Product with the specified productId in the request
exports.delete = (req, res) => {};

// Delete all Products from the database.
exports.deleteAll = (req, res) => {};
