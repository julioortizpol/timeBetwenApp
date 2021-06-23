import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TimeMeasurementSelect(props) {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <Form.Control
              as="select"
              custom
              size="sm"
              value={props.value}
              onChange={(e) => props.onChange(e.target.value)}
            >
              <option value="seconds">seconds</option>
              <option value="hours">hours</option>
              <option value="days">days</option>
              <option value="weeks">weeks</option>
              <option value="months">months</option>
              <option value="Years">Years</option>
            </Form.Control>
          </Col>
          <Col xs lg="2">
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TimeMeasurementSelect;
