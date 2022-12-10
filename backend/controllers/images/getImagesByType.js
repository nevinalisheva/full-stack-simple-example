const connection = require("../../db");

const getImagesByType = async (req, res) => {
  const { type } = req.query;
  if (type === "products") {
    // write a query that returns values from multiple tables
    // hint : you have to use JOIN
    const query =
      "SELECT i.image_id, i.title, i.url, p.title AS product FROM images AS i JOIN products AS p ON p.product_id=i.product_id";
    connection
      .promise()
      .query(query)
      .then(([results]) => {
        res.send(results);
      })
      .catch((e) => console.log(e));
  }

  if (type === "categories") {
    const query =
      "SELECT images.image_id, images.title, images.url, categories.title AS category FROM images JOIN categories ON categories.category_id = images.category_id";
    connection
      .promise()
      .query(query)
      .then(([results]) => {
        res.send(results);
      })
      .catch((e) => console.log(e));
  }
};

module.exports = getImagesByType;
