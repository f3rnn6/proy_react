import { useEffect, useState } from "react";
import { getProductosPorCategoria } from "../../api/api";
import AppCard from "../../componentes/Card";

function CatalogoTeclados() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function cargar() {
      const data = await getProductosPorCategoria("teclado");
      setProductos(data);
    }
    cargar();
  }, []);

  return (
    <>
      <h1 className="titulo-pagina">Teclados</h1>

      <div className="grid-productos">
        {productos.map((p) => (
          <div className="grid-item" key={p.id}>
            <AppCard producto={p} />
          </div>
        ))}
      </div>
    </>
  );
}

export default CatalogoTeclados;
