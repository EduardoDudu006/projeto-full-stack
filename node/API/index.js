import express, { request } from "express";

const app = express();

app.use(express.json());

let usuarios = [
    {
        id: 134685,
        nome: "Eduardo",
        idade: 40,
        email: "eduardodudu006@gamil.com",
    },
    {
        id: 468571,
        nome: "Ana",
        idade: 47,
        email: "analuciabranq@gamil.com",
    },
];

app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

app.post("/usuarios", (req, res) => {

    console.log(req)
})

app.listen(3003, "0.0.0.0", () => {
    console.log("Servidor Rodando!!!");
});
