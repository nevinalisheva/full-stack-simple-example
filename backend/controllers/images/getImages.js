const connection = require("../../db");

const getImages = async (req, res, next) => {
  if (Object.keys(req.query).length) {
    return next();
  }
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const query = "SOLUTION HERE";
  connection
    .promise()
    .query(query)
    .then(([results]) => {
      res.send(results);
    })
    .catch((e) => console.log(e));
};
module.exports = getImages;
