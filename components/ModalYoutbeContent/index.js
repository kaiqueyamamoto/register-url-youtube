import { Alert, Container, Row, Col, Card } from "react-bootstrap";

export default function ModalYoutubeContent(props) {
  return (
    <Container>
      <Row>
        <Col>
          {props.lists.map((item, index) => (
            <Card key={index}>
              <Card.Img src={item.image} variant="top" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
          {/* <Card style={{ width: '18rem' }}>
            <Card.Img src={props.image} variant="top"/>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.description}</Card.Text>
            </Card.Body>
          </Card> */}
        </Col>
      </Row>
    </Container>
  )
}