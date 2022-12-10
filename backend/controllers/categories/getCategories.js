const connection = require("../../db");

const getCategories = async (req, res) => {
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const query =
    "SELECT c.category_id, c.title, i.url AS image FROM categories AS c JOIN images AS i ON i.image_id=c.image_id";
  connection
    .promise()
    .query(query)
    .then(([results]) => {
      res.send(results);
    })
    .catch((e) => console.log(e));
};
module.exports = getCategories;
