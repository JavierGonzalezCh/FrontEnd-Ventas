export default function NewProduct() {
    return(
        <div className="page">
            <header className="header">
                <h1>Añadir nuevo Producto</h1>
                <form action="" method="post" className="form">
                    <label htmlFor="product-name">Nombre del Producto</label>
                    <input type="text" id="product-name"/>
                    <label htmlFor="product-price">Valor unitario</label>
                    <input type="text" id="product-price"/>
                    <label htmlFor="">Estado</label>
                    <select>
                        <option value="" disabled > Estado del producto</option>
                        <option value="avaliable">Disponible</option>
                        <option value="no-avaliable">No disponible</option>
                    </select>
                    <button type="submit">Añadir</button>
                </form>
            </header>
        </div>
    )
};