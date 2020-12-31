const { State, country } = require("../models");

module.exports = {
  list(req, res) {
    return State.findAll({
      include: [
        {
          model: Country,
          as: "country",
        },
      ],
      order: [
        ["createdAt", "DESC"],
        [{ model: Country, as: "country" }, "createdAt", "DESC"],
      ],
    })
      .then((state) => res.status(200).send(states))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    return State.findByPk(req.params.id, {
      include: [
        {
          model: Country,
          as: "country",
        },
      ],
    })
      .then((state) => {
        if (!state) {
          return res.status(404).send({
            message: "State Not Found",
          });
        }
        return res.status(200).send(state);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return State.create({
      stateId: req.body.stateId,
      name: req.body.name,
      population: req.body.population,
      language: req.body.language,
      countryId: req.body.countryId,
    })
      .then((state) => res.status(201).send(state))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return State.findByPk(req.params.id, {
      include: [
        {
          model: Country,
          as: "country",
        },
      ],
    })
      .then((state) => {
        if (!state) {
          return res.status(404).send({
            message: "State Not Found",
          });
        }
        return student
          .update({
            stateId: req.body.stateId || state.stateId,
            name: req.body.name || state.name,
            population: req.body.population || state.population,
            language: req.body.language || state.language,
            countryId: req.body.countryId || state.countryId,
          })
          .then(() => res.status(200).send(student))
          .catch((error) => res.status(400).send(error));
      })
      .catach((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return State.findByPk(req.params.id)
      .then((state) => {
        if (!state) {
          return res.status(400).send({
            message: "State Not Found",
          });
        }
        return state
          .distroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};

//   createState: (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const { name, population, stateId, language, countryId } = req.body;
//         if (!name || !population || !stateId || !language || !countryId) {
//           return res.status(400).send();
//         }
//         const state = await State.create({
//           name: name,
//           population: population,
//           statedId: stateId,
//           language: language,
//           countryId: countryId,
//         });
//         return res.status(200).send(state);
//       } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//       }
//     });
//   },

//   updateState: (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const { name, population, stateId, language, countryId } = req.body;
//         const { id } = req.params;
//         const [nRowsUpdated] = await State.update(
//           {
//             name: name,
//             population: population,
//             stateId: satateId,
//             language: language,
//             countryId: countryId,
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

//   getState: (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         console.log("req.query", req.body);
//         const { id } = req.params;
//         if (!id) {
//           return res.status(400).send();
//         }
//         const country = await State.findOne({
//           where: { id: id },
//         });
//         return res.status(200).send(state);
//       } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//       }
//     });
//   },

//   getStates: (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         console.log("req.query ====>", req.query);
//         const state = await State.findAll({ where: req.query });
//         return res.status(200).send(state);
//       } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//       }
//     });
//   },
// };
