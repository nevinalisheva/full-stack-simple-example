const connection = require("../../db");

const getCategoryById = async (req, res) => {
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const query = "SOLUTION HERE";
  const { id } = req.params;
  connection
    .promise()
    .query(query, [id])
    .then(([results]) => {
      res.send(results);
    })
    .catch((e) => console.log(e));
};

module.exports = getCategoryById;
