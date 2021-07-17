const User = require("../models/user.model.js");
//const UserTransformer = require("../transformer/user.transformer.js");

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a User
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
  });

  // Save User in the database
  User.create(user, (err, data) => {
    if (err) {
      result = {
        param: {
          user_id: req.params.userId,
        },
        status: false,
        message: err.message || "Some error occurred while creating the User.",
        result: null,
      };
      res.status(500).send(result);
    } else {
      var result = [];
      var transformData = {
        user_id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
      };

      result = {
        param: null,
        status: true,
        message: `User was created successfully!`,
        result: transformData,
      };
      res.send(result);
    }
  });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err) {
      result = {
        param: {
          user_id: req.params.userId,
        },
        status: false,
        message: err.message || "Some error occurred while retrieving users.",
        result: null,
      };
      res.status(500).send(result);
    } else {
      var result = [];
      var transformData = [];

      //transform data
      data.forEach((element) => {
        var singleData = {
          user_id: element.id,
          name: element.name,
          email: element.email,
          phone: element.phone,
        };
        transformData.push(singleData);
      });

      result = {
        param: null,
        status: true,
        message: `Users found!`,
        result: transformData,
      };

      res.send(result);
    }
  });
};

// Find a single User with a productId
exports.findOne = (req, res) => {
  var result = [];
  User.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        result = {
          param: {
            user_id: req.params.userId,
          },
          status: false,
          message: `Not found User with id ${req.params.userId}.`,
          result: null,
        };
        res.status(404).send(result);
      } else {
        result = {
          param: {
            user_id: req.params.userId,
          },
          status: false,
          message: "Error retrieving user with id " + req.params.userId,
          result: null,
        };
        res.status(500).send(result);
      }
    } else {
      var transformData = {
        user_id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
      };

      result = {
        param: {
          user_id: req.params.userId,
        },
        status: true,
        message: `User found!`,
        result: transformData,
      };
      res.send(result);
    }
  });
};

// Update a User identified by the userId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  User.updateById(req.params.userId, new User(req.body), (err, data) => {
    var result = [];
    if (err) {
      if (err.kind === "not_found") {
        result = {
          param: {
            user_id: req.params.userId,
          },
          status: false,
          message: `Not found User with id ${req.params.userId}.`,
          result: null,
        };
        res.status(404).send(result);
      } else {
        result = {
          param: {
            user_id: req.params.userId,
          },
          status: false,
          message: "Error updating User with id " + req.params.userId,
          result: null,
        };
        res.status(500).send(result);
      }
    } else {
      var transformData = {
        user_id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
      };

      result = {
        param: {
          user_id: req.params.userId,
        },
        status: true,
        message: `User was updated successfully!`,
        result: transformData,
      };
      res.send(result);
    }
  });
};

// Delete a User with the specified userId in the request
exports.delete = (req, res) => {
  var result = [];
  User.remove(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        result = {
          param: {
            user_id: req.params.userId,
          },
          status: false,
          message: `Not found User with id ${req.params.userId}.`,
          result: null,
        };
        res.status(404).send(result);
      } else {
        result = {
          param: {
            user_id: req.params.userId,
          },
          status: false,
          message: "Could not delete User with id " + req.params.userId,
          result: null,
        };
        res.status(500).send(result);
      }
    } else {
      result = {
        param: {
          user_id: req.params.userId,
        },
        status: true,
        message: `User was deleted successfully!`,
        result: null,
      };
      res.send(result);
    }
  });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {};
