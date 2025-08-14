import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function Home() {
  return (
     <>
      <Container  className="   fs-2 " >
         <Nav activeKey="/home" className="   fs-3 d-flex d-inline-block mb-4  navbar-dark bg-secondary align-items-center justify-content-center" >
            <Nav.Item><Nav.Link as={Link} to="/home" className="text-black">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/experience" className="text-black">Experience</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/education" className="text-black">Education</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/skills" className="text-black">Skills</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/projects" className="text-black">Projects</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/services" className="text-black">Services</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/testimonials" className="text-black">Testimonials</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/contact" className="text-black">Contact Us</Nav.Link></Nav.Item>
        </Nav>

        
            
        <Row className="align-items-center text-center g-5">
          <Col md={6} className="p-0" >
            <div className="text-section align-items-center text-center ">
               <h1 className="title fw-bold mb-3">
                Welcome to My Portfolio
                <br />
                (I'm Ishraq T. Al-Dagamseh)
                </h1>
                <p className="description mb-4">
                MSc in Computer Science | Passionate about AI & Data Science | ML Researcher | Academic Experience.
                </p>
                <a className="cv-button btn btn-primary  " href="Ishraq's CV025_AI_DataScience.pdf" download>
                      Download CV
                </a>

        
            <div className="social-icons mt-3">
              <a href="https://github.com/ishraq-dagamseh" target="_blank" rel="noopener noreferrer">GitHub</a>{" "}
              <a href="https://www.linkedin.com/in/ishraq-t-al-dagamseh-51aa7a20a" target="_blank" rel="noopener noreferrer">LinkedIn</a>{" "}
              <a href="mailto:ishraq500@gmail.com">Email</a>{" "}
              <a href="https://www.instagram.com/artificial_intelligence_info24" target="_blank" rel="noopener noreferrer">Instagram</a>{" "}
            </div>
          </div>
        </Col>

        <Col md={6} className="p-0">
          <Image 
            src="Images/Personal Brand Logo with Deep Blue and Green.png" 
            fluid 
            className="w-100 img-circle"
          />
          </Col>
      </Row>
     </Container>
     </> 
            
  );
}

export default Home;
