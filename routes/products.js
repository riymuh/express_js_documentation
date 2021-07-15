var express = require("express");
var router = express.Router();

let db = [
  {
    _id: 1,
    name: "Indomie",
    price: 2500,
    quantity: 330,
  },
  {
    _id: 2,
    name: "Mie Sedaap",
    price: 2000,
    quantity: 190,
  },
];

router.get("/", function (req, res, next) {
  return res.json(db);
});

router.post("/", function (req, res, next) {
  const data = {
    _id: db.length + 1,
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  };
  db.push(data);
  return res.json(data);
});

router.get("/:id", function (req, res, next) {
  const singleData = db.find((val) => val._id == req.params.id);
  return res.json(singleData);
});

router.put("/:id/update", function (req, res, next) {
  const index = db.findIndex((val) => val._id == req.params.id);
  const updateData = {
    _id: req.params.id,
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  };
  db.splice(index, 1, updateData);
  return res.json("updated");
});

router.delete("/:id/delete", function (req, res, next) {
  const index = db.findIndex((val) => val._id == req.params.id);
  db.splice(index, 1);
  return res.json("deleted");
});

module.exports = router;
