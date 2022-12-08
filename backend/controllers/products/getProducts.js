const connection = require("../../db");

const getProducts = async (req, res) => {
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const query =
    "SELECT p.product_id, p.title, p.price, i.url AS image, c.title AS category FROM products AS p JOIN images AS i ON p.image_id=i.image_id JOIN categories AS c ON c.category_id=p.category_id";
  connection
    .promise()
    .query(query)
    .then(([results]) => {
      res.send(results);
    })
    .catch((e) => console.log(e));
};
module.exports = getProducts;
