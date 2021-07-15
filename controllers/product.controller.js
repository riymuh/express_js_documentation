const Customer = require("../models/product.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  return res.json("hello");
};

// Find a single Customer with a productId
exports.findOne = (req, res) => {};

// Update a Customer identified by the productId in the request
exports.update = (req, res) => {};

// Delete a Customer with the specified productId in the request
exports.delete = (req, res) => {};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {};
