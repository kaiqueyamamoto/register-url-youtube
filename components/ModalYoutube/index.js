import { Alert, Container, Row, Col, Card } from "react-bootstrap";

export default function ModalYoutube(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Alert variant="success">URL registrada com sucesso!</Alert>
          <Card>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              {/* <Card.Text>{props.description}</Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}