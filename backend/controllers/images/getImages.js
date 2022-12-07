const connection = require("../../db");

const getImages = async (req, res, next) => {
  if (Object.keys(req.query).length) {
    return next();
  }
  const query =
    "SELECT images.image_id, images.title, images.url, products.title AS product, categories.title AS category FROM images LEFT JOIN products ON products.product_id = images.product_id LEFT JOIN categories ON categories.category_id = images.category_id";

  connection
    .promise()
    .query(query)
    .then(([results]) => {
      res.send(results);
    })
    .catch((e) => console.log(e));
};
module.exports = getImages;
