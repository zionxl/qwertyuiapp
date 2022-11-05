const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
let port = process.env.PORT || 3000;

app.post("/", function (req, res) {
  let { x, y, operation_type } = req.body;
  let xy = operation_type;
  let alloperations = {
    addition: x + y,
    subtraction: x - y,
    multiplication: x * y,
  };

  let result;

  console.log(operation_type);

  //   additon: x + y,
  if (
    operation_type.includes("add") ||
    operation_type.includes("sum") ||
    operation_type.includes("plus") ||
    operation_type.includes("+")
  ) {
    result = alloperations.addition;
    operation_type = "addition";
  }

  //   subtraction: x - y,
  else if (
    operation_type.includes("subtract") ||
    operation_type.includes("minus") ||
    operation_type.includes("-") ||
    operation_type.includes("remove") ||
    operation_type.includes("take away") ||
    operation_type.includes("less")
  ) {
    result = alloperations.subtraction;
    operation_type = "subtraction";
  }

  //   multiplication: x * y,
  else if (
    operation_type.includes("multiply") ||
    operation_type.includes("*") ||
    operation_type.includes("times")
  ) {
    result = alloperations.multiplication;
    operation_type = "multiplication";
  }

  //   division: x / y,
  else if (
    operation_type.includes("divide") ||
    operation_type.includes("/") ||
    operation_type.includes("by")
  ) {
    result = alloperations.division;
    operation_type = "division";
  } else {
    result = "Invalid operation";
    operation_type = "Invalid operation";
  }

  // operation.push(operation);
  res.json({
    slackUsername: "zionxl",
    operation_type: operation_type,
    result: parseInt(result),
  });
});

app.listen(port, function () {
  console.log("nodejs running" + port);
});
