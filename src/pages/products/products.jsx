import React from "react"
import {Link} from "react-router-dom"

export default function Products() {
    return(
        <div className="page">
            <header className="header">
                <h1>Pagina de Productos</h1>
            </header>
            <main className="main">
                <Link to="/Products/New" className="new">Añadir Producto</Link>
                <label htmlFor="product-searcher">Buscar producto</label>
                <input type="text" id="product-searcher" placeholder="Ingese Nombre o ID"/>
                <button>Buscar producto</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Valor</th>
                            <th>Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Producto 1</td>
                            <td>1000</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Producto 2</td>
                            <td>2000</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Producto 3</td>
                            <td>3000</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Producto 4</td>
                            <td>4000</td>
                            <td>Disponible</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
}