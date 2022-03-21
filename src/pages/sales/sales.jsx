import {Link} from "react-router-dom";

export default function Sales() {
    return(
        <div className="page">
            <header className="header">
                <h1>Pagina de Ventas</h1>
            </header>
            <main className="main">
                <Link to="/Sales/New" className="new">Añadir Venta</Link>
                <label htmlFor="searcher">Buscar Venta</label>
                <input type="text" id="searcher" placeholder="Ingese Nombre o ID"/>
                <button>Buscar Venta</button>
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
                            <td>Venta 1</td>
                            <td>1000</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Venta 2</td>
                            <td>2000</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Venta 3</td>
                            <td>3000</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Venta 4</td>
                            <td>4000</td>
                            <td>Disponible</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
}
