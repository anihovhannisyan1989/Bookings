import { login } from '../../actions/auth/auth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
// Bootstrap
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const loginHandler = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const response = await login({ email, password });
      setTimeout(() => {
        navigate('/dashboard/bookings');
      }, 1000);
      if (response.data) {
        window.localStorage.setItem('auth', JSON.stringify(response.data));
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: response.data,
        });
      }
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Row  className="login-register-container d-flex justify-content-center align-items-center">
        <Col md={{ span: 6 }} className="image">
          <img src='https://sea-horse-ranch.com/new/wp-content/uploads/2020/01/godomrep-image-sea-horse-ranch-villa-resort-scaled.jpeg' width={"410px"} alt="login-image"/>
        </Col>
        <Col md={{ span: 5 }} className="login-register-block">
          <div className="h3 text-center">Welcome</div>
          <p className="text-muted text-center">
            <strong>Sign in</strong> if you already have a Bookings account or <strong>Register</strong> to book amazing hotels.
          </p>
          
          <Form onSubmit={loginHandler}>
            <Form.Group className="mb-3 mt-4">
              <Form.Label className='small'>Your email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small">Your password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div>
              <Button variant="primary" type="submit" disabled={loading} className="sign-in-sign-up-button mt-4 font-weight-700">
                {loading && (
                  <Spinner animation="border" className="spinner-custom" />
                )}
                Sign in
              </Button>
            </div>
            <p className="mt-4 text-center">
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

export default Login;
