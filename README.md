# 🚀 Cadastro de Usuários - Projeto Full-Stack

Este é um projeto Full-Stack completo de um sistema de cadastro e listagem de usuários. A aplicação foi construída utilizando **React (Vite)** no Front-end, **Node.js (Express)** no Back-end, e **MongoDB Atlas** como Banco de Dados em nuvem, estando totalmente preparada para deploy em produção (Vercel e Render).

---

## 📐 Estrutura do Projeto (Monorepo)

O projeto está organizado em um único repositório (*Monorepo*), dividindo claramente as responsabilidades do cliente (Front-end) e do servidor (Back-end):

🌎 Link do Projeto: https://projeto-full-stack-alpha.vercel.app/
```text
projeto-full-stack/
├── .gitignore               # Arquivo para ignorar arquivos locais/secretos no Git
├── README.md                # Documentação principal do projeto
│
├── cadastro-usuarios/       # 💻 PASTA DO FRONT-END (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── UserCard.jsx # Componente visual de exibição do usuário
│   │   │   └── UserCard.css # Estilização do cartão do usuário
│   │   ├── App.jsx          # Componente principal com lógicas e formulário
│   │   ├── App.css          # Estilização global do app
│   │   └── main.jsx         # Inicialização do React
│   └── package.json         # Dependências do Front-end (Vite, Axios, React)
│
└── node/                    # ⚙️ PASTA DO BACK-END (Node.js)
    └── API/
        ├── .env             # Variáveis de ambiente (Secreto - Não vai para o GitHub)
        ├── index.js         # Servidor Express e conexão com o MongoDB
        └── package.json     # Dependências do Back-end (Express, Mongoose, Cors, Dotenv)

```
##🛠️ **Tecnologias Utilizadas:**

### Front-end
**React.js (Vite):** Framework para construção da interface SPA ágil e moderna.

**Axios:** Biblioteca para realizar requisições HTTP assíncronas para a API.

**Robohash API:** Geração automática e dinâmica de avatares com base no _id único do usuário criado no MongoDB.

**CSS3:** Layout limpo e responsivo para exibição em qualquer dispositivo.

### Back-end
**Node.js:** Ambiente de execução Javascript no servidor.

**Express.js:** Framework minimalista para criação de rotas e manipulação de requisições.

**Mongoose:** ODM (Object Data Modeling) para modelagem de dados e comunicação segura com o MongoDB.

**CORS:** Mecanismo de segurança configurado para permitir a comunicação integrada com o Front-end.

**Dotenv:** Gerenciamento seguro de credenciais através de variáveis de ambiente (.env).

## 🛢 Banco de Dados & ☁ Nuvem
MongoDB Atlas: Banco de dados NoSQL totalmente hospedado na nuvem.

### 🚀 Como Executar o Projeto Localmente
Pré-requisitos
Você precisará do Node.js e do NPM instalados em sua máquina. Além disso, certifique-se de possuir um Cluster no MongoDB Atlas ativo.

## 1. Configuração do Back-end (Node.js)
Abra o seu terminal na pasta da API:

**Bash**
cd node/API

## Instale as dependências:

**Bash**
npm install
Crie um arquivo chamado .env na raiz da pasta node/API/ e adicione a sua string de conexão do banco de dados:

## Snippet de código
MONGO_URI=mongodb+srv://USUARIO:SENHA@cluster.mongodb.net/Usuarios?appName=Cluster0
PORT=3003
## Inicie o servidor de desenvolvimento:

## Bash
npm run dev
O console exibirá: Servidor Rodando na Porta 3003!!! e Conectado ao Banco de Dados Mongo.

## 2. Configuração do Front-end (React)
Abra um novo terminal na pasta raiz do Front-end:

## Bash
cd cadastro-usuarios
## Instale as dependências:

## Bash
npm install
Antes de rodar, verifique se a variável API_URL no seu App.jsx está apontando para o seu ambiente local:

## JavaScript
const API_URL = "http://localhost:3003/usuarios";
## Inicie o servidor do React/Vite:

## Bash
npm run dev
O Vite disponibilizará um link local, geralmente http://localhost:5173/. Abra-o no seu navegador!

## ☁️ Como Colocar em Produção (Deploy na Internet)
Este projeto foi projetado seguindo as melhores práticas do mercado, permitindo uma separação limpa na hora do deploy gratuito:

**GitHub:** Inicialize o git na pasta raiz (projeto-full-stack), configure o arquivo .gitignore para bloquear a pasta node_modules e o arquivo .env. Faça o push para o seu repositório.

**Back-end (Render):** Crie um Web Service apontando para o repositório. Defina o campo Root Directory como node/API. Adicione nas configurações de Environment Variables a chave MONGO_URI com o seu link do Atlas.

**MongoDB Atlas:** Acesse a aba Network Access e mude a regra para 0.0.0.0/0 para aceitar requisições de servidores de nuvem flutuantes como o Render.

**Front-end (Vercel):** Altere a API_URL no seu React App.jsx para a URL fornecida pelo Render. Dê um novo push no Git. No painel da Vercel, importe o repositório do projeto e selecione a pasta Root Directory como cadastro-usuarios. Clique em Deploy.

## 📝 Regras de Negócio e Funcionalidades
**Validação de E-mail Único:** O esquema do banco impede o cadastro de múltiplos usuários utilizando o mesmo endereço de e-mail (unique: true).

**Tratamento de Erros:** Rotas assíncronas encapsuladas em blocos try/catch impedem que o servidor caia em caso de falha de requisição ou duplicação de dados.

**Tipagem estrita de Dados:** A idade é convertida e tratada estritamente como tipo numérico (Number) antes do envio ao banco.

Timestamps Automáticos: Gravação automática de datas de criação (createdAt) e atualização (updatedAt) gerenciadas nativamente pelo Mongoose.

## Desenvolvido por Eduardo 🧑‍💻. Projeto full-stack criado para fins acadêmicos e portfólio profissional.
