import React from 'react';
import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import Header from '../components/Header';

import Guitarra3 from '../assets/images/guitarra3.jpg';
import Teclado1 from '../assets/images/teclado 1.jpg';

const HomePage = () => {
  return (
    <>
      <Header />
      <Container className="my-5">
        <h1 className="text-center mb-4">Bienvenido a Mi Tienda de Música</h1>
        
        {/* Carusel */}
        <Carousel className="mb-5">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Guitarra3} 
              alt="Primera slide"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Nuevas Guitarras Eléctricas</h3>
              <p>Descubre nuestra última colección.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Teclado1} 
              alt="Segunda slide"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Teclados y Sintetizadores</h3>
              <p>Crea tu propia melodía.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Productos Destacados */}
        <h2 className="mb-4">Productos Destacados</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={Guitarra3} />
              <Card.Body>
                <Card.Title>Guitarra Clásica</Card.Title>
                <Card.Text>
                  Sonido cálido y profundo para tus mejores interpretaciones.
                </Card.Text>
                <Button variant="primary">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={Teclado1} />
              <Card.Body>
                <Card.Title>Teclado Profesional</Card.Title>
                <Card.Text>
                  88 teclas con acción de martillo y más de 100 sonidos.
                </Card.Text>
                <Button variant="primary">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;