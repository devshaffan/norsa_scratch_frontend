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

function MerchantForm() {
    const history = useHistory();
    const queryParams = new URLSearchParams(window.location.search);
    const [ClientID, setClientID] = React.useState()
    const [validated, setValidated] = React.useState(false);
    const [formData, setFormData] = React.useState({
        id: "", Code: "", Name: "", MerchantType_id: "", AccountNo: "", BankName: ""
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
            // setFormData(response)
        }
    }, [ClientID])
    const { id, Code, Name, MerchantType_id, AccountNo, BankName } = formData

    const validateInput = (name, value) => {
        if (name === "Code") {
            let pattern = new RegExp("^[a-zA-Z 0-9_.-]*$")
            if (pattern.test(value)) {
                return true
            }
            return "No special characters"
        }
        if (name === "Name" || name === "BankName") {
            let pattern = new RegExp("^[a-zA-Z ]*$")
            if (pattern.test(value)) {
                return true
            }
            return "only alphabets and spaces"
        }
        if (name === "AccountNo") {
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



    const handleSubmit = (event) => {
        event.preventDefault()

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
                                        <Col className="pr-1" md="6">
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
                                        <Col className="px-1" md="6">
                                            <Form.Group>
                                                <label>Nomber</label>
                                                <Form.Control
                                                    required
                                                    placeholder="Username"
                                                    type="text"
                                                    value={Name}
                                                    name="Name"
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
                                                <label >
                                                    Account Number
                                                </label>
                                                <Form.Control
                                                    required
                                                    placeholder="Last Name"
                                                    type="lastName"
                                                    value={AccountNo}
                                                    name="AccountNo"
                                                    onChange={e => handleInputChange(e)}
                                                ></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a value.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Bank Nomber</label>
                                                <Form.Control
                                                    required
                                                    placeholder="00-0000-00"
                                                    type="text"
                                                    value={BankName}
                                                    name="BankName"
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
                                                <label>Merchant Type</label>
                                                <Form.Control
                                                    required
                                                    placeholder="Abc"
                                                    type="text"
                                                    value={MerchantType_id}
                                                    name="MerchantType_id"
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
                                        Add Merchant
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

export default MerchantForm;
