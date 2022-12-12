import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { register } from '../../actions/auth/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import Spinner from 'react-bootstrap/Spinner';

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const registerHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await register({ name, email, password });
      toast.success('successfully registered');
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Row className="login-register-container d-flex justify-content-center align-items-center">
        <Col md={{ span: 6 }} className="image">
          <img src='https://sea-horse-ranch.com/new/wp-content/uploads/2020/01/godomrep-image-sea-horse-ranch-villa-resort-scaled.jpeg' width={"410px"} alt="login-image"/>
        </Col>
        <Col md={{ span: 5 }} className="login-register-block">
          <div className="h3 text-center">Create an account</div>
          <p className="text-muted text-center">Welcome to Bookings. Create your own account to book amazing hotels.</p>
          <Form onSubmit={registerHandler}>
            <Form.Group className="mb-3 mt-4">
              <Form.Label className='small'>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='small'>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='small'>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading} className="sign-in-sign-up-button mt-4 font-weight-700">
              {loading && (
                <Spinner animation="border" className="spinner-custom" />
              )}
              Sign up
            </Button>
            <p className="mt-4">
              <small className="text-muted">
                By continuing, you agree to our  <a href='#' className='decoration'><span className='terms-and-policy'>Terms of use</span></a> and <a href='#' className='decoration'><span className='terms-and-policy'>Privacy Policy</span></a>
              </small>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
