const connection = require("../../db");

const getProductById = async (req, res) => {
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN 
  const query = 
    "SOLUTION HERE";
  const { id } = req.params;
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
