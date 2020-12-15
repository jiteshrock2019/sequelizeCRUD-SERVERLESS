const { User } = require("../models");

module.exports = {
  createUser: (req, res, next) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { firstName, lastName, email } = req.body;
        if (!firstName || !lastName || !email) {
          return res.status(400).send();
        }
        const user = await User.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
        });
        return res.status(200).send(user);
      } catch (err) {
        console.error(err);
        return res.status(500).send(err);
      }
    });
  },

  updateUser: (req, res, next) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { firstName, lastName, email } = req.body;
        const { id } = req.params;
        const [nRowsUpdated] = await User.update(
          {
            firstName: firstName,
            lastName: lastName,
            email: email,
          },
          {
            where: {
              id: id,
            },
          }
        );
        return res.status(200).send({ nRowsUpdated });
      } catch (err) {
        console.error(err);
        return res.status(500).send(err);
      }
    });
  },

  getUser: (req, res, next) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("req.query", req);
        const { id } = req.params; //req.query
        if (!id) {
          return res.status(400).send();
        }
        const user = await User.findOne({
          where: { id: id },
        });
        return res.status(200).send(user);
      } catch (err) {
        console.error(err);
        return res.status(500).send(err);
      }
    });
  },

  getUsers: (req, res, next) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("req.query-->", req.query);
        const user = await User.findAll({ where: req.query });
        return res.status(200).send(user);
      } catch (err) {
        console.error(err);
        return res.status(500).send(err);
      }
    });
  },
};
