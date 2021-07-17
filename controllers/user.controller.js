const User = require("../models/user.model.js");
//const UserTransformer = require("../transformer/user.transformer.js");

// Create and Save a new User
exports.create = (req, res) => {};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    } else {
      var result = [];
      var transformData = [];

      data.forEach((element) => {
        var singleData = {
          id: element.id,
          name: element.name,
          email: element.email,
          phone: element.phone,
        };
        transformData.push(singleData);
      });

      result = {
        param: null,
        status: true,
        result: transformData,
      };

      res.send(result);
    }
  });
};

// Find a single User with a productId
exports.findOne = (req, res) => {};

// Update a User identified by the productId in the request
exports.update = (req, res) => {};

// Delete a User with the specified productId in the request
exports.delete = (req, res) => {};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {};
