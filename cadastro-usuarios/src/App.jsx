import "./App.css";
import { useState } from "react";

function App() {
    const [name, setName] = useState("Eduardo");
    const [email, setEmail] = useState("eduardodudu006@gmail.com");
    const [age, setAge] = useState(40);
    const [users, setUsers] = useState();

    let valorInput = "Eduardo";

    function handleSubmit(event) {
        event.preventDefault();
    }

    setName("Maria");

    console.log(valorInput);
    return (
        <div className="app">
            <h1>Cadastro de Usuários</h1>

            <form onSubmit={handleSubmit}>
                <input placeholder="Nome" type="text" value={name} onChange={setName(event => event.target.value)}/>

                <input placeholder="Email" type="email" value={email} />
                <input placeholder="Idade" type="number" value={age} />

                <button type="submit">Cadastrar</button>
            </form>

            <div className="user-list">
                <p>Usuários Cadastrados Aqui</p>
            </div>
        </div>
    );
}

export default App;

