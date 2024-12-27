import { Button, Form, Container, Row, Col } from "react-bootstrap";

export default function Registration() {
  return (
    <>
      <Container className="d-flex min-vh-100 flex-column justify-content-center px-3 py-5  container-form">
        <Row className="justify-content-center w-100">
          <Col sm={12} md={8} lg={6} xl={4}>
            <div className="text-center">
              <h2 className="mt-4 mb-4 text-2xl font-weight-bold text-dark">
                Sign in to your account
              </h2>
            </div>

            <Form action="#" method="POST" className="space-y-4">
              <Form.Group controlId="email">
                <Form.Label className="text-sm font-medium text-dark">
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="mb-3 rounded-md border border-gray-300 p-2 text-dark"
                />
              </Form.Group>

              <Form.Group controlId="password">
                <div className="d-flex justify-content-between align-items-center">
                  <Form.Label className="text-sm font-medium text-dark">
                    Password
                  </Form.Label>
                  <a href="#" className="text-primary font-weight-bold">
                    Forgot password?
                  </a>
                </div>
                <Form.Control
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  className="mb-3 rounded-md border border-gray-300 p-2 text-dark"
                />
              </Form.Group>

              <Button
                type="submit"
                variant="primary"
                className="w-100 py-2 mt-3 font-weight-semibold"
              >
                Sign in
              </Button>
            </Form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                Not a member?{" "}
                <a href="#" className="font-weight-semibold text-primary">
                  Start a 14 day free trial
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
