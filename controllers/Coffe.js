const Coffe = require("../models/coffe");

module.exports = {
  createData: (req, res) => {
    Coffe.create({
      name: req.body.name,
      bean: req.body.bean,
      price: req.body.price,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  getData: (req, res) => {
    Coffe.findAll()
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  getDataById: (req, res) => {
    Coffe.findOne({ where: { id: req.params.coffeId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  deleteDataById: (req, res) => {
    Coffe.destroy({ where: { i: req.params.coffeId } })
      .then((result) => res.json({ status: 200, data: result }))
      .catch((err) => {
        throw err;
      });
  },
  updateDataById: (req, res) => {
    Coffe.update(
      {
        name: req.body.name,
        bean: req.body.bean,
        price: req.body.price,
      },
      { where: { id: req.params.coffeId } }
    ).catch((err) => {
      throw err;
    });
  },
};
