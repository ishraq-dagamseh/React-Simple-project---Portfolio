import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Services() {
  return (
    <Container className="my-5 fluid">
      <h1 className="text-center mb-4"> Services</h1>

      <Row className="justify-content-center g-4">
        <Col md={6} lg={5}>
          <Card className="bg-dark text-white text-center p-3">
            <Card.Img 
              variant="top" 
              src="Images/Researcher.jpg" 
             
              
            />
            <Card.Title as="h2" className="fw-bold">AI Research</Card.Title>
            <Card.Text as="div" className="fs-5">
              Research Experienced in AI field in general and Computer Vision especially, with published paper on Q2 Journal.
            </Card.Text>
          </Card>
        </Col>

        <Col md={6} lg={5}>
          <Card className="bg-dark text-white text-center p-3">
            <Card.Img 
              variant="top" 
              src="Images/develop.png" 
                
            />
            <Card.Title as="h2" className="fw-bold">AI Applications Development</Card.Title>
            <Card.Text as="div" className="fs-5">
              Many projects were developed using Python language in multiple topics with strong capabilities.
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
