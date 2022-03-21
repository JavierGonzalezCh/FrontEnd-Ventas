import {NavLink} from "react-router-dom"

import "../styles/sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <h1>Gestor de ventas</h1>
            <figure>
                <img src="" alt="Foto de perfil" />
                <figcaption>Usuario</figcaption>
            </figure>
            <nav>
                <ul>
                    <li><NavLink className={({isActive}) =>(isActive ? "link linkActive" : "link")} to="/">Home</NavLink></li>
                    <li><NavLink className={({isActive}) =>(isActive ? "link linkActive" : "link")} to="/Sales">Ventas</NavLink></li>
                    <li><NavLink className={({isActive}) =>(isActive ? "link linkActive" : "link")} to="/Products">Productos</NavLink></li>
                    <li><NavLink className={({isActive}) =>(isActive ? "link linkActive" : "link")} to="/Users">Usuarios</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar