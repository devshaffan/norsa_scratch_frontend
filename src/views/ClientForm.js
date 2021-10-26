import React from "react";

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function ClientForm() {
    const queryParams = new URLSearchParams(window.location.search);
    const [ifUpdate, setIfUpdate] = React.useState(false)
    const [ClientID, setClientID] = React.useState()

    useEffect(() => {
       
        const params = queryParams.get("id")
        if(id != null) {
            setIfUpdate(true)
            setClientID(params)
        }
        else{
            setIfUpdate(false)
            setClientID(null)
        }
    }, [])
    

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Add Kliente</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="5">
                                            <Form.Group>
                                                <label>Code</label>
                                                <Form.Control
                                                    placeholder="123"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="px-1" md="3">
                                            <Form.Group>
                                                <label>First Nomber                                 </label>
                                                <Form.Control
                                                    placeholder="Username"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label htmlFor="exampleLastName">
                                                    Last Nomber
                                                </label>
                                                <Form.Control
                                                    placeholder="Last Name"
                                                    type="lastName"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Tel Trabou</label>
                                                <Form.Control
                                                    placeholder="Company"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Tell Celluar</label>
                                                <Form.Control
                                                    placeholder="042"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Form.Group>
                                                <label>Ta taraha na</label>
                                                <Form.Control
                                                    placeholder="Ta taraha na"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="4">
                                            <Form.Group>
                                                <label>Fax</label>
                                                <Form.Control
                                                    placeholder="Fax"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="px-1" md="4">
                                            <Form.Group>
                                                <label>Email</label>
                                                <Form.Control
                                                    placeholder="Email"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label>Kredito Maksimo</label>
                                                <Form.Control
                                                    placeholder="Kredito Maksimo"
                                                    type="number"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col className="pl-1" md="12">
                                            <Form.Group>
                                                <label>Rebendadors</label>
                                                <Form.Control
                                                    placeholder="Rebendadors"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Button
                                        className="btn-fill pull-right"
                                        type="submit"
                                        variant="info"
                                    >
                                        Add Kliente
                                    </Button>
                                    <div className="clearfix"></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ClientForm;
