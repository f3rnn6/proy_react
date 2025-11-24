import { useEffect, useState } from "react";
import { getProductosPorCategoria } from "../../api/api";
import AppCard from "../../componentes/Card";

function CatalogoBaterias() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function cargar() {
      const data = await getProductosPorCategoria("bateria");
      setProductos(data);
    }
    cargar();
  }, []);

  return (
    <>
      <h1 className="titulo-pagina">Baterías</h1>

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

export default CatalogoBaterias;
