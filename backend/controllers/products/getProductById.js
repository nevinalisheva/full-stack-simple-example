const connection = require("../../db");

const getProductById = async (req, res) => {
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const { id } = req.params;
  const query =
    "SELECT p.product_id, p.title, p.price, i.url AS image, c.title AS category FROM products AS p JOIN images AS i ON p.image_id=i.image_id JOIN categories AS c ON c.category_id=p.category_id WHERE p.product_id = ?";

  connection
    .promise()
    .query(query, [id])
    .then(([results]) => {
      if (!results.length) {
        res.status(404).send({
          status: "404",
          message: "Not found",
          data: null,
        });
      }
      res.send(results);
    })
    .catch((e) => console.log(e));
};

module.exports = getProductById;
