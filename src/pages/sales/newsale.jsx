export default function NewSale() {
    return(
        <div className="page">
            <header className="header">
                <h1>Añadir nueva Venta</h1>
                <form action="" method="post" className="form">
                    <label htmlFor="sale-name">Nombre del saleo</label>
                    <input type="text" id="sale-name"/>
                    <label htmlFor="sale-price">Valor unitario</label>
                    <input type="text" id="sale-price"/>
                    <label htmlFor="">Estado</label>
                    <select>
                        <option value="avaliable">Disponible</option>
                        <option value="no-avaliable">No disponible</option>
                    </select>
                    <button type="submit">Añadir</button>
                </form>
            </header>
        </div>
    )
};