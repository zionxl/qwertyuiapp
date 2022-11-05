const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
let port = process.env.PORT || 3000;
let operation = [
  {
    operation_type: "addition",
    x: 76,
    y: 76,
  },
];
app.post("/", function (req, res) {
  let { x, y, operation_type } = req.body;
  let xy = operation_type;
  let alloperations = {
    addition: x + y,
    substraction: x - y,
    multiplication: x * y,
  };

  console.log(operation_type);

  if (operation_type.includes("add" || "sum" || "plus")) {
    xy = alloperations.addition;
    operation_type = "addition";
  } else if (operation_type.includes("substract" || "minus")) {
    xy = alloperations.substraction;
    operation_type = "substraction";
  } else {
    xy = alloperations.multiplication;
    operation_type = "multiplication";
  }

  // operation.push(operation);
  res.send({ slackUsername: "zionxl", operation_type: xy, result: xy });
});

app.listen(port, function () {
  console.log("nodejs running" + port);
});
