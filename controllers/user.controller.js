const db = require("../models");
var fractal = require("fractal-transformer")();
var { userTransformer } = require("../transformers/");
const User = db.users;
const Op = db.Sequelize.Op;

exports.getUsers = async function (req, res, next) {
  try {
    const users = await User.findAll({});
    if (users.length !== 0) {
      var dataTransformed = fractal(users, userTransformer);

      res.json({
        status: "OK",
        messages: "",
        results: dataTransformed,
      });
    } else {
      res.json({
        status: "ERROR",
        messages: "EMPTY",
        data: {},
      });
    }
  } catch (err) {
    res.json({
      status: "ERROR",
      messages: err.message,
      results: {},
    });
  }
};

exports.createUser = async function (req, res, next) {
  try {
    const { name, email, gender, phone_number } = req.body;
    const users = await User.create({
      name,
      email,
      gender,
      phone_number,
    });

    var dataTransformed = fractal(users, userTransformer);
    if (users) {
      res.status(201).json({
        status: "OK",
        messages: "User berhasil ditambahkan",
        results: dataTransformed,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "ERROR",
      messages: err.message,
      results: {},
    });
  }
};

exports.getUser = async function (req, res, next) {
  try {
    //get from auth jwt middleware
    //let userIdLoggedIn = req.userId;
    let userIdLoggedIn = 1;

    const usersId = req.params.id;
    const users = await User.findOne({
      include: [db.posts],
      where: {
        id: usersId,
      },
    });
    if (users.length !== 0) {
      var dataTransformed = fractal(users, userTransformer);

      res.json({
        status: "OK",
        messages: "",
        userIdLoggedIn: userIdLoggedIn,
        results: dataTransformed,
      });
    } else {
      res.json({
        status: "ERROR",
        messages: "EMPTY",
        results: {},
      });
    }
  } catch (err) {
    res.json({
      status: "ERROR",
      messages: err.message,
      results: {},
    });
  }
};

exports.updateUser = async function (req, res, next) {
  try {
    const usersId = req.params.id;
    const { name, email, gender, phone_number } = req.body;
    const users = await User.update(
      {
        name,
        email,
        gender,
        phone_number,
      },
      {
        where: {
          id: usersId,
        },
      }
    );

    const users_update = await User.findOne({
      where: {
        id: usersId,
      },
    });

    var dataTransformed = fractal(users_update, userTransformer);
    if (users) {
      res.json({
        status: "OK",
        messages: "User berhasil diupdate",
        results: dataTransformed,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "ERROR",
      messages: err.message,
      results: {},
    });
  }
};

exports.deleteUser = async function (req, res, next) {
  try {
    const usersId = req.params.id;
    const users = await User.destroy({
      where: {
        id: usersId,
      },
    });
    if (users) {
      res.json({
        status: "OK",
        messages: "User berhasil dihapus",
        data: users,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "ERROR",
      messages: err.message,
      data: {},
    });
  }
};
