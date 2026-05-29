import "./App.css";
import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import axios from "axios";

function App() {
    const [name, setName] = useState("Eduardo");
    const [email, setEmail] = useState("eduardodudu006@gmail.com");
    const [age, setAge] = useState(40);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function buscarUsuarios() {
            const resposta = await axios.get(
                "http://projeto-full-stack.onrender.com/usuarios",
                {},
            );

            setUsers(resposta.data);
        }

        buscarUsuarios();
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        await axios.post("http://projeto-full-stack.onrender.com/usuarios", {
            nome: name,
            email,
            idade: age,
        });

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



