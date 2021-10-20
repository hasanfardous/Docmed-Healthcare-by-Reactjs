import { useState } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import './Authentication.css';
import useFirebase from './../Hooks/useFirebase';

function Authentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const {user, error, success, doTheLogin, doTheRegistration} = useFirebase;

  const toggleRegister = e => {
    setIsRegistered(e.target.checked);
  }
  const emailHandler = e => {
    setEmail(e.target.value);
  }
  const passwordHandler = e => {
    setPassword(e.target.value);
  }
  const authFormHandle = e => {
    e.preventDefault();

    // Trigger the actual function
    if (isRegistered) {
      doTheLogin(email, password);
    }
    else {
      doTheRegistration(email, password);
    }
  }
    return (
      <Container>
        <Row>
          <div className="contact-wrapper d-flex justify-content-center">
            <div className="contact-content my-5 px-5">
              <h2 className="my-4">Please {isRegistered ? 'Login' : 'Register'}</h2>
              {
                error ?
                  <p className="text-danger"><b>{error}</b></p>
                  : ''
              }
              {
                success ?
                <p className="text-success"><b>{success}</b></p>
                : ''
              }
              
              <Form onSubmit={authFormHandle}>
                <Form.Group className="mb-3" controlId="yourEmail">
                  <Form.Label><b>Email address</b></Form.Label>
                  <Form.Control type="email" onBlur={emailHandler} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="yourPassword">
                  <Form.Label><b>Password</b></Form.Label>
                  <Form.Control type="password" onBlur={passwordHandler} required/>
                </Form.Group>                
                <Form.Group className="mb-3" controlId="alreadyRegistered">
                  <Form.Check type="checkbox" onChange={toggleRegister} label="Already Registered?" />
                </Form.Group>
                <button type="submit" className="popup-with-form">
                  {isRegistered ? 'Login' : 'Register'}
                </button>
                <br /><br /><br />
              </Form>
            </div>
          </div>
        </Row>
      </Container>
      );
    }
    
  export default Authentication;