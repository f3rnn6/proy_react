import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppNavBar from "../../componentes/navbar";
import AppSearch from "../../componentes/barrabusqueda";
import AppCard from "../../componentes/Card";
import Footer from "../../componentes/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function CatalogoGuitarras() {
  const guitarras = [
{id:1, nombre:"Guitarra Clásica", descripcion:"Guitarra de madera con cuerdas de nylon", precio:"$300"},
{id:2, nombre:"Bajo Eléctrico", descripcion:"Bajo de 4 cuerdas con cuerpo sólido y acabado brillante", precio:"$550"},
{id:3, nombre:"Batería Acústica", descripcion:"Set de 5 tambores con platillos y pedal de bombo", precio:"$1200"},
{id:4, nombre:"Teclado Digital", descripcion:"Teclado de 61 teclas con funciones de aprendizaje y sonidos integrados", precio:"$400"},
{id:5, nombre:"Micrófono de Condensador", descripcion:"Micrófono profesional para grabación en estudio con filtro antipop", precio:"$150"},
{id:6, nombre:"Violín 4/4", descripcion:"Violín de tamaño completo con arco y estuche rígido", precio:"$280"},
{id:7, nombre:"Saxofón Alto", descripcion:"Saxofón de latón dorado con boquilla profesional", precio:"$800"},
{id:8, nombre:"Ukulele Soprano", descripcion:"Ukulele de caoba con cuerdas de nailon, ideal para principiantes", precio:"$120"},
{id:9, nombre:"Amplificador de Guitarra", descripcion:"Amplificador de 20W con distorsión y entrada auxiliar", precio:"$180"},
{id:10, nombre:"Pedal de Efectos", descripcion:"Pedal multiefectos con delay, reverb y overdrive", precio:"$90"},
{id:11, nombre:"Atril para Partituras", descripcion:"Atril ajustable de metal plegable con bolsa de transporte", precio:"$35"},
{id:12, nombre:"Auriculares de Estudio", descripcion:"Audífonos cerrados con respuesta plana para mezcla y monitoreo", precio:"$110"},
{id:13, nombre:"Metrónomo Digital", descripcion:"Metrónomo con pantalla LCD y tonos ajustables", precio:"$45"},
{id:14, nombre:"Cajón Peruano", descripcion:"Cajón artesanal de madera con bordonera ajustable", precio:"$160"},
{id:15, nombre:"Arpa Paraguaya", descripcion:"Arpa tradicional de 36 cuerdas con acabado natural", precio:"$950"},
{id:16, nombre:"Flauta Traversa", descripcion:"Flauta de plata niquelada con estuche acolchado", precio:"$320"}

  ];

  const [filtro, setFiltro] = useState("");

  // ✅ Filtra las guitarras según lo que el usuario escriba
  const guitarrasFiltradas = guitarras.filter((guitarra) =>
    guitarra.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
      <Container fluid className="text-center">
          <Row className="mb-3">
              <AppNavBar nombre="Joaquin" />
          </Row>

          <Row className="justify-content-center">
              <AppSearch onSearch={setFiltro} />
          </Row>

          <Row className="mt-4 text-center">
              {guitarrasFiltradas.length > 0 ? (
                  guitarrasFiltradas.map((guitarra) => (
                      <Col key={guitarra.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                          <AppCard producto={guitarra} />
                      </Col>
                  ))
              ) : (
                  <p>No se encontraron productos</p>
              )}
          </Row>
          
              <Row className="mb-3">
                  <Footer />
              </Row>

      </Container>
  );
}

export default CatalogoGuitarras;
