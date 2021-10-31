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
import { useHistory } from 'react-router-dom';

import { useEffect } from "react";
import { getClientData } from "services/client";

function ClientForm() {
    const history = useHistory();
    const queryParams = new URLSearchParams(window.location.search);
    const [ClientID, setClientID] = React.useState()
    const [validated, setValidated] = React.useState(false);
    const [formData, setFormData] = React.useState({
        Code: "", FirstName: "", LastName: "", WorkNo: "",
        ContactNo: "", WorksAt: "",
        Email: "", FaxNumber: "",
        Status: "",
        MaxBorrowAmount: "", Dealer_id: ""
    });
    useEffect(() => {

        const params = queryParams.get("id")
        if (params != null) {
            setClientID(params)
        }
        else {
            setClientID(null)
        }

    }, [])

    useEffect(() => {
        if (ClientID != null) {
            // get client data
            const response = null;
            //setFormData(response)
            return;
        }
        getClientData(ClientID)
        .then(function(response){
            console.log(response)
            // setFormData(response.data)
        })
        .catch(function(error){
            console.log("cannot fetch the data with an " + error)
        })
    }, [ClientID])
    const { Code, FirstName, LastName, WorkNo, ContactNo, WorksAt,
        Email, FaxNumber, Status, MaxBorrowAmount, Dealer_id } = formData

    const validateInput = (name, value) => {
        if (name === "Code") {
            let pattern = new RegExp("^[a-zA-Z 0-9_.-]*$")
            if (pattern.test(value)) {
                return true
            }
            return "No special characters"
        }
        if (name === "FirstName" || name === "LastName" || name === "WorksAt") {
            let pattern = new RegExp("^[a-zA-Z ]*$")
            if (pattern.test(value)) {
                return true
            }
            return "only alphabets and spaces"
        }
        if (name === "WorkNo" || name === "FaxNumber" || name === "ContactNo") {
            let pattern = new RegExp("^[0-9 ]*$")
            if (pattern.test(value)) {
                return true
            }
            return "only numbers or spaces"

        }


        return true
    }

    const handleInputChange = (e) => {
        const valid = validateInput(e.target.name, e.target.value)
        if (valid != true) {
            alert(valid)
            return;
        }
        setFormData({ ...formData, [e.target.name]: [e.target.value] })
    }
    const validateEmail = (email) => {
        let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (pattern.test(email)) {
            return true
        }
        return "not a valid email"
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const valid = validateEmail(Email)
        if (valid != true) {
            alert(valid)
            return;
        }
        history.push('/admin/ClientList')
        alert("i am submitted")

    }


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
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col className="pr-1" md="2">
                                            <Form.Group
                                            >
                                                <label>Code</label>
                                                <Form.Control
                                                    required
                                                    placeholder="123"
                                                    type="text"
                                                    value={Code}
                                                    name="Code"
                                                    onChange={e => handleInputChange(e)}
                                                ></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a value.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col className="px-1" md="5">
                                            <Form.Group>
                                                <label>Nomber</label>
                                                <Form.Control
                                                    required
                                                    placeholder="Frank"
                                                    type="text"
                                                    value={FirstName}
                                                    name="FirstName"
                                                    onChange={e => handleInputChange(e)}
                                                ></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a value.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="5">
                                            <Form.Group>
                                                <label htmlFor="exampleLastName">
                                                    Fam
                                                </label>
                                                <Form.Control
                                                    required
                                                    placeholder="Semper"
                                                    type="text"
                                                    value={LastName}
                                                    name="LastName"
                                                    onChange={e => handleInputChange(e)}
                                                ></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a value.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Tel Trabou</label>
                                                <Form.Control
                                                    required
                                                    placeholder="00-0000-00"
                                                    type="text"
                                                    value={WorkNo}
                                                    name="WorkNo"
                                                    onChange={e => handleInputChange(e)}

                                                ></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a value.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Tell Celluar</label>
                                                <Form.Control
                                                    required
                                                    placeholder="042"
                                                    type="text"
                                                    value={ContactNo}
                                                    name="ContactNo"
                                                    onChange={e => handleInputChange(e)}
                                                ></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a value.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Form.Group>
                                                <label>Ta taraha na</label>
                                                <Form.Control
                                                    required
                                                    placeholder="Ta taraha na"
                                                    type="text"
                                                    value={WorksAt}
                                                    name="WorksAt"
                                                    onChange={e => handleInputChange(e)}
                                                ></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a value.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="4">
                                            <Form.Group>
                                                <label>Fax</label>
                                                <Form.Control
                                                    required
                                                    placeholder="Fax"
                                                    type="text"
                                                    value={FaxNumber}
                                                    name="FaxNumber"
                                                    onChange={e => handleInputChange(e)}
                                                ></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a value.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col className="px-1" md="4">
                                            <Form.Group>
                                                <label>Email</label>
                                                <Form.Control
                                                    required
                                                    placeholder="Email"
                                                    type="text"
                                                    value={Email}
                                                    name="Email"
                                                    onChange={e => handleInputChange(e)}
                                                ></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a value.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label>Kredito Maksimo</label>
                                                <Form.Control
                                                    required
                                                    placeholder="Kredito Maksimo"
                                                    type="number"
                                                    value={MaxBorrowAmount}
                                                    name="MaxBorrowAmount"
                                                    onChange={e => handleInputChange(e)}
                                                ></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a value.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="12">
                                            <Form.Group>
                                                <label>Rebendadors</label>
                                                <Form.Control
                                                    required
                                                    placeholder="Rebendadors"
                                                    type="text"
                                                    value={Dealer_id}
                                                    name="Dealer_id"
                                                    onChange={e => handleInputChange(e)}
                                                ></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a value.
                                                </Form.Control.Feedback>
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
