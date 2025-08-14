import { Form, Button, Container, Image } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="my-4 w-50" style={{ fontSize: '1.2rem' }}>
      {/* Contact Form */}
      <h2 className="text-center mb-4">Contact with me</h2>
      <Form>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Write your message here..." required />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </div>
      </Form>

      {/* Social Media Section */}
      <div id="contact" className="p-4" style={{ fontSize: '1.2rem' }}>
        <div className="content-wrapper">
          <h2>You can directly contact with us using these social media accounts</h2>

          <p>
            <Image 
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
              alt="Gmail" style={{ height: '1em', verticalAlign: 'middle', marginRight: '6px' }}/>If you'd like to get in touch, email me at{' '}<a href="mailto:ishraq500@gmail.com" style={{ color: 'blue' }}>ishraq500@gmail.com </a>.
          </p>

          <p>
            <Image
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
              alt="LinkedIn"style={{ height: '1em', verticalAlign: 'middle', marginRight: '6px' }}/>Find me on LinkedIn:{' '} <a href="https://www.linkedin.com/in/ishraq-t-al-dagamseh-51aa7a20a"style={{ color: 'blue' }}>LinkedIn</a>.
          </p>

          <p>
            <Image
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
              alt="GitHub"style={{ height: '1em', verticalAlign: 'middle', marginRight: '6px' }}/> Check my work on{' '}
            <a href="https://github.com/ishraq-dagamseh" style={{ color: 'blue' }}> GitHub </a>.
          </p>

          <p>
            <Image src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
              alt="Instagram"style={{ height: '1em', verticalAlign: 'middle', marginRight: '6px' }} />Follow my AI page on{' '}
            <a href="https://www.instagram.com/artificial_intelligence_info24"style={{ color: 'blue' }}>
              Instagram </a>.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
