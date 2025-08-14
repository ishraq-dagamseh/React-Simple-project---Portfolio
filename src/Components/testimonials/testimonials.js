import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Testimonials() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Client Testimonials</h1>
      <Row className="justify-content-center g-4">
        <Col md={6} lg={5}>
          <Card className="text-center p-3 h-100">
            <Card.Text as="div" className="fs-5">
              "It was a pleasure dealing with such a committed person as Ishraq, especially in developing AI systems. I highly recommend working with her."
            </Card.Text>
            <div className="mt-auto">
              <h3>Sara A.</h3>
              <h5>CEO of X Research company</h5>
            </div>
          </Card>
        </Col>

        <Col md={6} lg={5}>
          <Card className="text-center p-3 h-100">
            <Card.Text as="div" className="fs-5">
              "It was an excellent experience working with researcher Ishraq, which resulted in the publication of a scientific paper in the field of artificial intelligence in a prestigious scientific journal. I highly recommend working with her."
            </Card.Text>
            <div className="mt-auto">
              <h3>Sami S.</h3>
              <h5>Prof. in Y University</h5>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
