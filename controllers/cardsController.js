const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Card.findAll({})
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    let data = req.body;
    db.Card.create(data)
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteAll: (req, res) => {
    db.Card.destroy({})
      .then(() => res.json(200))
      .catch(err => res.status(422).json(err));
  },

  findById: (req, res) => {
    let id = req.user.dataValues.id;
    db.Card.findAll({ where: { UserId: id } })
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateById: (req, res) => {
    let id = req.params.id;
    let data = req.body;
    db.Card.update(data, { where: { id: id } })
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  deleteById: (req, res) => {
    let id = req.params.id;
    db.Card.destroy({ where: { id: id } })
      .then(() => res.status(200))
      .catch(err => res.status(422).json(err));
  }
};
