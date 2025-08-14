import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Experience() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Work Experience</h1>
      <Row className="justify-content-center g-4">
       
        <Col md={6} lg={5}>
          <Card className="bg-dark text-white text-center p-3">
            <Card.Img variant="top" src="Images/Teach.jpg"  />

            <Card.Title as="h2" className="fw-bold">Teaching Assistant</Card.Title>
            <Card.Text as="div" className="fs-5">
              Computer Science Department, Yarmouk University | Jordan-Irbid <br />
              9/2018 - 12/2018 & 2/2019 - 5/2019
            </Card.Text>
          </Card>
        </Col>

        <Col md={6} lg={5}>
          <Card className="bg-dark text-white text-center p-3">
            <Card.Img variant="top" src="Images/dataEnt.jpg"  />

            <Card.Title as="h2" className="fw-bold">Data Entry Internship</Card.Title>
            <Card.Text as="div" className="fs-5">
              Financial Department, Al-Sero Municipality | Jordan-Irbid <br />
              9/2015 - 12/2015
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;
