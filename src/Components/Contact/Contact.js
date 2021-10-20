import { Container, Row, Form } from 'react-bootstrap';
import './Contact.css';

function Contact() {
    return (
      <Container>
        <Row>
          <div className="contact-wrapper d-flex justify-content-center">
            <div className="contact-content my-5 px-5">
              <h2 className="my-4">Contact Us</h2>
              <Form>
                <Form.Group className="mb-3" controlId="yourName">
                  <Form.Label><b>Your Name</b></Form.Label>
                  <Form.Control type="text" placeholder="Hasan Fardous" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="yourEmail">
                  <Form.Label><b>Email address</b></Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="writeDetails">
                  <Form.Label><b>Write Details</b></Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Write your details.."/>
                </Form.Group>
                <br/>
                <a className="popup-with-form my-4" href="#">
                  Submit
                </a>
                <br /><br /><br />
              </Form>
            </div>
          </div>
        </Row>
      </Container>
      );
    }
    
  export default Contact;