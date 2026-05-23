import express from "express";

const app = express();

app.get("/usuarios", (req, res) => {
    res.send("Olá Mundo!!!");
});

app.listen(3003, () => {
    console.log("Servidor Rodando!!!");
});
