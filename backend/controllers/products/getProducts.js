const connection = require("../../db");

const getProducts = async (req, res) => {
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN 
  const query = 
    "SOLUTION HERE";
  connection
    .promise()
    .query(query)
    .then(([results]) => {
      res.send(results);
    })
    .catch((e) => console.log(e));
};
module.exports = getProducts;
