import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TestimonialCard({ description, headline, image }) {
  return (
    <div className="wrapper">
      <div className="d-flex flex-wrap justify-content-center">
        <Card className="m-5"style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} style={{ height: "18rem" }} />
          <Card.Body>
            <Card.Title>{headline}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default TestimonialCard;
