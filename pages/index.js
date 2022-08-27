import Head from "next/head";
import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import api from "../service/api";

import ContentInformation from '../components/ContentInformation';
import Header from "../components/Header";
import ModalYoutube from "../components/ModalYoutube";

export default function Home() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState(false);
  const [urlsRegistered, setUrlsRegistered] = useState();
  const [data, setData] = useState()

  const handleSubmit = async () => {
    try {
      const data = await api.post("/", { url });
      const response = await api.get("/count");
      setData(data.data);
      setUrlsRegistered(response.data.count);
      setUrl("");
      setStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getUrls() {
      const response = await api.get("/count");
      setUrlsRegistered(response.data.count);
    }
    getUrls();
  }, []);

  return (
    <div>
      <Head>
        <title>Conecta Academy - Sua plataforma de treinamento e gestão de estudos</title>
        <meta name="description" content="Sua plataforma de treinamento e gestão de estudos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <ContentInformation />
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="text-center align-items-center justify-content-center mx-auto">
            <h1>Register URL YouTube</h1>
            <Alert variant="primary" className="mt-5">
              Hoje temos {urlsRegistered} URLs processadas
            </Alert>
            <InputGroup className="mb-3 mt-1">
              <InputGroup.Text id="basic-addon1">URL</InputGroup.Text>
              <Form.Control
                placeholder="URL Youtube"
                aria-label="url"
                aria-describedby="basic-addon1"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <Button variant="primary" type="button" onClick={handleSubmit}>
                Enviar
              </Button>
            </InputGroup>

           {status && (
             <ModalYoutube title={data.modelYoutube.youtube.snippet.title} />
            )} 
          </Col>
        </Row>
      </Container>
    </div>
  );
}
