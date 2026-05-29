import "./App.css";
import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import axios from "axios";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [users, setUsers] = useState([]);

    // URL do seu Back-end (Use localhost:3003 para testar no seu PC ou o link do Render se já subiu)
    const API_URL = "http://localhost:3003/usuarios";

    // Buscar usuários ao carregar a página
    useEffect(() => {
        async function buscarUsuarios() {
            try {
                const resposta = await axios.get(API_URL);
                setUsers(resposta.data);
            } catch (erro) {
                console.error("Erro ao buscar usuários:", erro);
            }
        }
        buscarUsuarios();
    }, []);

    // Cadastrar usuário
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            // Enviamos no formato esperado pelo banco (nome, email, idade)
            const resposta = await axios.post(API_URL, {
                nome: name,
                email: email,
                idade: Number(age),
            });

            // Sincroniza a tela adicionando o usuário retornado pela API na lista atual
            setUsers([...users, resposta.data]);

            // Limpa o formulário
            setName("");
            setEmail("");
            setAge("");
        } catch (erro) {
            console.error("Erro ao cadastrar usuário:", erro);
            alert("Erro ao cadastrar. Verifique se o e-mail já existe.");
        }
    }

    return (
        <div className="app">
            <h1>Cadastro de Usuários</h1>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Nome"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    placeholder="Idade"
                    type="number"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>

            <div className="user-list">
                {users.map((user) => (
                    <UserCard key={user._id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default App;
