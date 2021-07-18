import Form from 'react-bootstrap/Form'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function customTimeMeassurement(props){
    
return(
    <div>
        
   <Form>
  <Row>
  <Col xs lg="4"></Col>
      <Col xs lg="1">
      <div>1 Day =</div>
      </Col>
    <Col xs lg="1">
      <Form.Control placeholder="Value"   onChange={(e) => {
                props.setcustomUnitObject({value:e.target.value,unit:props.customUnitObject.unit})
              }}/>
    </Col>
    <Col xs lg="1"> 
      <Form.Control placeholder="Custom Unit" onChange={(e) => {
                props.setcustomUnitObject({value:props.customUnitObject.value,unit:e.target.value})
              }}/>
    </Col>
    <Col xs lg="2"></Col>
  </Row>
</Form>
    </div>
)

}

export default customTimeMeassurement;