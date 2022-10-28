const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
app.get("/users", function (req, res) {
  res.json({
    slackUsername: "zionxl",
    backend: true,
    bio: "Tech advocate, Speaker, tiktoker ",
    age: 28,
  });
});
app.listen(port, function () {
  console.log("nodejs running" + port);
});
