import Card from "react-bootstrap/Card";
import { Row, Button, Col } from "reactstrap";
function SectionNews() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <Row>
          <Col md="8">
            <Button color="info" type="button">
              Default
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
export default SectionNews;
