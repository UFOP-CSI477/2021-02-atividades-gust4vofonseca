import { Link } from "react-router-dom";

export function Navegation() {
    return (
        <div className="navegation">
            <div>
                <Link to="/" className="buttonNav">Manutenções</Link>
            </div>
            <div>
                <Link to="/equipamentos" className="buttonNav">Equipamentos</Link>
            </div>
            <div>
                <Link to="/user" className="buttonNav">Usuario</Link>
            </div>
            <div>
                <Link onClick={() => {localStorage.removeItem('token')}} to="/" className="buttonNav">SAIR</Link>
            </div>
        </div>
    )
}