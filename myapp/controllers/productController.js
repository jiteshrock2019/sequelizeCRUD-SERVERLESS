const { Product } = require("../models");

module.exports = {
  createProduct: (req, res, next) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { firstName, lastName, category } = req.body;
        if (!firstName || !lastName || !category) {
          return res.status(400).send();
        }
        const product = await Product.create({
          firstName: firstName,
          lastName: lastName,
          category: category,
        });
        return res.status(200).send(product);
      } catch (err) {
        console.error(err);
        return res.status(500).send(err);
      }
    });
  },

  updateProduct: (req, res, next) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { firstName, lastName, category } = req.body;
        const { id } = req.params;
        const [nRowsUpdated] = await Product.update(
          {
            firstName: firstName,
            lastName: lastName,
            category: category,
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

  getProduct: (req, res, next) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("req.query", req);
        const { id } = req.params; //req.query
        if (!id) {
          return res.status(400).send();
        }
        const product = await Product.findOne({
          where: { id: id },
        });
        return res.status(200).send(product);
      } catch (err) {
        console.error(err);
        return res.status(500).send(err);
      }
    });
  },

  getProducts: (req, res, next) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("req.query-->", req.query);
        const product = await Product.findAll({ where: req.query });
        return res.status(200).send(product);
      } catch (err) {
        console.error(err);
        return res.status(500).send(err);
      }
    });
  },
};
