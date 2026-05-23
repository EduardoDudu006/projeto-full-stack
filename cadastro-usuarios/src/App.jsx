import "./App.css";
import { useState } from "react";
import UserCard from "./components/UserCard";

function App() {
    const [name, setName] = useState("Eduardo");
    const [email, setEmail] = useState("eduardodudu006@gmail.com");
    const [age, setAge] = useState(40);
    const [users, setUsers] = useState([]);

    let valorInput = "Eduardo";

    function handleSubmit(event) {
        event.preventDefault();

        const newUser = {
            id: Date.now(),
            name: name,
            email: email,
            age: age,
        };

        console.log(newUser)

        setUsers([...users, newUser])
        // .../ spread operator (manter todo mundo que já tinha (users) e o (newUser) vai adicionar o novo usuário)
    }

    console.log(valorInput);

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
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default App;






