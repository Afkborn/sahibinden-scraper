const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoDbConnect = require("./database/mongoDb");
const getTimeForLog = require("./common/time");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

const car = require("./routes/car");
app.use("/car", car);

mongoDbConnect();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(getTimeForLog() + `Listening on port ${port}`);
});
