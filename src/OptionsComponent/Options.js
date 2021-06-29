import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import arrowImage from "../Assets/arrow.png";
import "./Options.css";
import Image from "react-bootstrap/Image";
import Form from 'react-bootstrap/Form'
function Options(props) {
  const [isActive, setIsActive] = useState(false);
  const [endDateCheckSatete, setEndDateCheckSatete] = useState(false);

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <div className="accordion">
              <div className="accordion-item">
                <div
                  className="accordion-title"
                  onClick={() => setIsActive(!isActive)}
                >
                  <Image src={arrowImage} width="40 px" height="40 px" />
                </div>
                {isActive && (
                  <div className="chechckText">
                    <Form>
                      <Form.Check
                        onChange={() => {
                          setEndDateCheckSatete(!endDateCheckSatete);
                          props.setTakeEndDate(!endDateCheckSatete);
                        }}
                        type="checkbox"
                        id="checkbox01"
                        label="End Date Include"
                      />
                    </Form>
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Options;
