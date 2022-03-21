import React from "react"

import "../styles/table.css"
import "../styles/header.css"

export default function Users() {
    return(
        <div className="page">
            <header className="header">
                <h1>Pagina de Usuarios</h1>
            </header>
            <main className="main">
                <label htmlFor="product-searcher">Buscar Usuario</label>
                <input type="text" id="product-searcher" placeholder="Ingese Nombre o ID"/>
                <button>Buscar Usuario</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Rol</th>
                            <th>Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Usuario 1</td>
                            <td>Administrador</td>
                            <td>Autorizado</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Usuario 2</td>
                            <td>Vendedor</td>
                            <td>Pendiente</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Usuario 3</td>
                            <td>Vendedor</td>
                            <td>No autorizado</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Usuario 4</td>
                            <td>Vendedor</td>
                            <td>Autorizado</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
};