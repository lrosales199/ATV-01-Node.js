const express = require("express");
const app = express();

const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log("Ocorreu um erro!" + error);
  } else {
    console.log(
      `Servidor iniciado com sucesso no endereço: http://localhost:${port}`,
    );
  }
});

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/perfil", function (req, res) {
  res.render("perfil");
});
