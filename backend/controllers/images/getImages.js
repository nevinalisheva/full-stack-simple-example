const connection = require("../../db");

const getImages = async (req, res, next) => {
  if (Object.keys(req.query).length) {
    return next();
  }
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const query =
    "SELECT i.image_id, i.title, i.url, p.title AS product, c.title AS category FROM images AS i LEFT JOIN products AS p ON p.product_id = i.product_id LEFT JOIN categories AS c ON c.category_id = i.category_id";

  connection
    .promise()
    .query(query)
    .then(([results]) => {
      res.send(results);
    })
    .catch((e) => console.log(e));
};
module.exports = getImages;
