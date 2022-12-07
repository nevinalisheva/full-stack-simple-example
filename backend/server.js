require("dotenv").config();
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const connection = require("./db");
const { productRouter, categoriesRouter, imagesRouter } = require("./routes");

const initial_db = fs
  .readFileSync(path.join(__dirname, "./schema.sql"))
  .toString();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  connection
    .promise()
    .query(initial_db)
    .then(([results]) => res.json("success"))
    .catch((e) => console.log(e));
});

app.use("/products", productRouter);
app.use("/categories", categoriesRouter);
app.use("/images", imagesRouter);

const { server_port } = process.env;
app.listen(server_port, () => {
  console.log("listening..");
});
