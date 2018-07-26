const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.User.findAll({})
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    let data = req.body;
    db.User.create(data)
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.satus(422).json(err));
  },
  delete: (req, res) => {
    db.User.destroy({})
      .then(() => res.json(200))
      .catch(err => res.status(422).json(err));
  },

  findById: (req, res) => {
    let id = req.params.id;
    db.User.findById(id)
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateById: (req, res) => {
    let id = req.params.id;
    let data = req.body;
    db.User.update(data, { where: { id: id } })
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  deleteById: (req, res) => {
    let id = req.params.id;
    db.User.destroy({ where: { id: id } })
      .then(() => res.status(200))
      .catch(err => res.status(422).json(err));
  }
};
