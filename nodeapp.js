const express = require("express");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  let { operation_type, x, y } = req.body;
  let result;

  if (typeof x != "number" || typeof y != "number") {
    let arr = operation_type.split(" ");
    let numberCount = 0;

    for (let i = 0; i < arr.length; i++) {
      if (!isNaN(arr[i]) && numberCount < 2) {
        if (numberCount === 0) {
          x = arr[i];
          console.log(arr[i]);
        }
        if (numberCount === 1) {
          console.log(arr[i]);
          y = arr[i];
        }
        numberCount++;
      }
    }
  }

  // console.log(x, y);

  x = parseInt(x);
  y = parseInt(y);

  //   operations object
  let operation = {
    adddition: x + y,
    subtraction: x - y,
    multiplication: x * y,
    division: x / y,
  };

  //   additon: x + y,
  if (
    operation_type.includes("add") ||
    operation_type.includes("sum") ||
    operation_type.includes("plus") ||
    operation_type.includes("+")
  ) {
    result = operation.adddition;
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
    result = operation.subtraction;
    operation_type = "subtraction";
  }

  //   multiplication: x * y,
  else if (
    operation_type.includes("multiply") ||
    operation_type.includes("*") ||
    operation_type.includes("times")
  ) {
    result = operation.multiplication;
    operation_type = "multiplication";
  }

  //   division: x / y,
  else if (
    operation_type.includes("divide") ||
    operation_type.includes("/") ||
    operation_type.includes("by")
  ) {
    result = operation.division;
    operation_type = "division";
  } else {
    (result = "Invalid operation"), (operation_type = "Invalid operation");
  }

  res.setHeader("Content-Type", "application/json").json({
    slackUsername: "zionxl",
    operation_type: operation_type,
    result: result,
  });
});

app.listen(port, () => {
  console.log(`[stdout]: Server is up on port ${port}`);
});
