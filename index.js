const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const ipAddress = req.ip.split(":").pop();
  const language = req.acceptsLanguages()[0];
  const userAgent = req.headers["user-agent"];
  const operatingSystem = (/\(([^)]+)\)/).exec(userAgent)[1];
  res.send({
    ip: ipAddress,
    language,
    os: operatingSystem
  });
});

// listen for requests
const listener = app.listen(8000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});