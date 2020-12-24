const { Shop } = require("../models");

// module.exports
// Shop.create({
//     name: 'Starbucks'
// }).then(shop => {
//     shop.createCoffee({
//         name: 'Columbian',
//         type: 'Dark',
//     }).then( () => console.log('yeah creteCoffee worked..!'));
// });

module.exports = {
  createShop: (req, res, next) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { name } = req.body;
        if (!name) {
          return res.status(400).send();
        }
        const shop = await Shop.create({
          name: name,
        }).then((value) => {
          value
            .createCoffee({
              name: "Columbian",
              type: "Dark",
            })
            .then(() => console.log("Yeah createCoffee worked...!"));
        });
        return res.status(200).send(shop);
      } catch (err) {
        console.error(err);
        return res.status(500).send(err);
      }
    });
  },

  //   updateUser: (req, res, next) => {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         const { firstName, lastName, email } = req.body;
  //         const { id } = req.params;
  //         const [nRowsUpdated] = await User.update(
  //           {
  //             firstName: firstName,
  //             lastName: lastName,
  //             email: email,
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
  //         return res.status(500).send(err);
  //       }
  //     });
  //   },

  //   getUser: (req, res, next) => {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         console.log("req.query", req);
  //         const { id } = req.params; //req.query
  //         if (!id) {
  //           return res.status(400).send();
  //         }
  //         const user = await User.findOne({
  //           where: { id: id },
  //         });
  //         return res.status(200).send(user);
  //       } catch (err) {
  //         console.error(err);
  //         return res.status(500).send(err);
  //       }
  //     });
  //   },

  getShops: (req, res, next) => {
    return new Promise(async (resolve, reject) => {
      Shop.findAll({
        include: [Coffee],
      }).then((shops) => {
        console.log(shops);
      });
    });
  },
};
