const { Country, State } = require("../models");

module.exports = {
  list(req, res) {
    return Country.findAll({
      include: [
        {
          model: State,
          as: "states",
        },
      ],
      order: [
        ["createdAt", "DESC"],
        [{ model: State, as: "states" }, "createdAt", "DESC"],
      ],
    })
      .then((country) => res.status(200).send(country))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    return Country.findByPk(req.params.id, {
      include: [
        {
          model: State,
          as: "states",
        },
      ],
    })
      .then((country) => {
        if (!country) {
          return res.status(404).send({
            message: "Country Not Found",
          });
        }
        return res.status(200).send(country);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  },

  add(req, res) {
    return Country.create({
      countryId: req.body.countryId,
      name: req.body.name,
      population: req.body.population,
    })
      .then((country) => res.status(201).send(country))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Country.findByPk(req.params.id, {
      include: [
        {
          model: State,
          as: "states",
        },
      ],
    })
      .then((country) => {
        if (!country) {
          return res.status(404).send({
            message: "Country Not Found",
          });
        }
        return country
          .update({
            countryId: req.body.countryId || country.countryId,
            name: req.body.name || country.name,
            population: req.body.population || country.population,
          })
          .then(() => res.status(200).send(contry))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Country.findByPk(req.params.id)
      .then((country) => {
        if (!country) {
          return res.status(400).send({
            message: "Country Not Found",
          });
        }
        return country
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};

//   createCountry: (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const { name, continent } = req.body;
//         if (!name || ) {
//           return res.status(400).send();
//         }
//         const country = await Country.create({
//           name: name,
//           continent: continent,
//         });
//         return res.status(200).send(country);
//       } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//       }
//     });
//   },

//   updateCountry: (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const { name, category } = req.body;
//         const { id } = req.params;
//         const [nRowsUpdated] = await Product.update(
//           {
//             name: name,
//             category: category,
//           },
//           {
//             where: {
//               id: id,
//             },
//           }
//         );
//         return res.status(200).send({ nRowsUpdated });
//       } catch (err) {
//         console.error(err);
//         return res.status(err);
//       }
//     });
//   },

//   getCountry: (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         console.log("req.query", req.query);
//         const { id } = req.params;
//         if (!id) {
//           return res.status(400).send();
//         }
//         const country = await Country.findOne({
//           where: { id: id },
//         });
//         return res.status(200).send(country);
//       } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//       }
//     });
//   },

//   getCountries: (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         console.log("req.query ===> ", req.query);
//         const country = await Country.findAll({ where: req.query });
//         return res.status(200).send(country);
//       } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//       }
//     });
//   },
// };
