import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Timepicker(props) {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              onChange={(e) => {
                props.onChange(e.target.value);
              }}
            >
              <Form.Label>{props.value}</Form.Label>
              <Form.Control type="date" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </Container>
    </div>
  );
}
