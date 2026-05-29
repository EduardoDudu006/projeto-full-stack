import express from "express";
import mongoose from "mongoose"
import cors from "cors"
import "dotenv/config"

const app = express()

app.use(express.json()) // Avisando que vou usar JSON
app.use(cors())

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado ao Banco de Dados Mongo."))
    .catch((err) => console.log(err));

// Schema (Esquema de Dados) -> Formato
const usuariosSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    idade: { type: Number, required: true },
}, { timestamps: true})

const Usuario = mongoose.model("Usuario", usuariosSchema);

/*
request -> Front End pede...
response -> Back End responde.
ThunderClient -> Simula um Front End.
JSON (JavaScript Object Notation) - Notação de Objeto JavaScript
JSON -> Formato de Dados
Exemplo: "chave": "Valor"
let usuarios = [
    {
        "id": 134685,
        "nome": "Eduardo",
        "idade": 40,
        "email": "eduardodudu006@gamil.com",
    }
Para que os Dados não se percam, é preciso um DB (Banco de Dados)
Lugar onde guardamos de forma Segura as informações da Aplicação

Caminho que as Aplicações fazem:
    Exemplo: Instagram
        Para Logar -> Front End
        Daí o Front End envia as Informações para o Back End
        Que por sua Vez Guarda ou Busca tudo que for Necessário no Banco de Dados

*/

// Retorna / Lista os Usuários
app.get("/usuarios", async (req, res) => {

    const usuariosDoBanco = await Usuario.find()

    //Respondendo ao Front End com os Usuários
    res.json(usuariosDoBanco);
});

/*
Criar Usuários
Todas as Vezes que Precisamos Acessar algo fora da Alpicação,
Chamamos de Requisição Assíncrona.
E utilizamos o Promisse (Promessa) ->
Quanto Ttempo o Banco de Dados Demora Para Responder?
    1segundo?
    2segundos?
E todas as vezes que precisamos utilizar a Promisse...
Precisamos Utilizar a Ferramenta async / await

Exemplo - Antes:

app.post("/usuarios", (req, res) => {

    const usuarioCriado = Usuario.create(req.body)

Exemplo - Depois:

app.post("/usuarios", async (req, res) => {

    const usuarioCriado = await Usuario.create(req.body)
*/

app.post("/usuarios", async (req, res) => {

    const usuarioCriado = await Usuario.create(req.body)


    res.json(usuarioCriado);
})

const PORTA = process.env.PORT || 3003;

app.listen(PORTA, "0.0.0.0", () => {
    console.log(`Servidor Rodando na Porta ${PORTA}!!!`);
});
