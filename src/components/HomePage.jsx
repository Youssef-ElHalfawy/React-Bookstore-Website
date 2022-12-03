import { Carousel, Col, Container, Row } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "./subSlider.css";

export default function HomePage() {

  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/library-interior-interior-design-books-wallpaper-5980889d712afd2bf6f7989fc0a1b69d.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Find your favorite books</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/digital-art-fantasy-art-books-candles-wallpaper-99e0384d212a6d8b56b7b87fc05106fd.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Explore the wonders inside</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/download (2).jfif"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Live with the journey</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="bg-light">
    <Container>
      <Row className="py-5">
        <Col md={6} xs={12}>
          <div className="star-product-image border-0 rounded-4"></div>
        </Col>
        <Col md={6} xs={12}
          className="star-product-content align-items-center flex-column d-flex justify-content-center"
        >
          <h6 className="section-title py-3">MyBookstore</h6>
          <h2 className="section-head">Best Place for Every Reader</h2>
          <h6 className="section-subtitle text-center py-3 w-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            molestias a assumenda enim, perferendis asperiores
          </h6>
          <NavLink to="/books" className='btn btn-success btn-diffrent text-white m-1'>View Books</NavLink>
          <NavLink to="/add" state={true} className='btn btn-primary btn-diffrent text-white m-1'>Add a Books</NavLink>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );
}