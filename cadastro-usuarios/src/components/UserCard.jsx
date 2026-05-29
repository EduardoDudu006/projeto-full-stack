import "./UserCard.css";

// O parâmetro 'user' aqui recebe o objeto vindo do MongoDB
function UserCard({ user }) {
    return (
        <div className="user-card">
            <img
                className="user-card-avatar"
                src={`https://robohash.org/${user._id}`}
                alt="Avatar"
            />
            <div className="user-card-info">
                {/* Ajustado de user.name/user.age para user.nome/user.idade */}
                <p>Nome: {user.nome}</p>
                <p>E-mail: {user.email}</p>
                <p>Idade: {user.idade}</p>
            </div>
        </div>
    );
}

export default UserCard;
