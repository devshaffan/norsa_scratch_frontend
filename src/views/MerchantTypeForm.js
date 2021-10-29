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

function MerchantTypeForm() {
    const history = useHistory();
    const queryParams = new URLSearchParams(window.location.search);
    const [ClientID, setClientID] = React.useState()
    const [validated, setValidated] = React.useState(false);
    const [formData, setFormData] = React.useState({
        id: "", Title: ""
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
    const { id, Title } = formData

    const validateInput = (name, value) => {

        if (name === "Title") {
            let pattern = new RegExp("^[a-zA-Z ]*$")
            if (pattern.test(value)) {
                return true
            }
            return "only alphabets and spaces"
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

        history.push('/admin/MerchantTypeList')
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
                                        <Col className="pr-1" md="12">
                                            <Form.Group
                                            >
                                                <label>Title</label>
                                                <Form.Control
                                                    required
                                                    placeholder="123"
                                                    type="text"
                                                    value={Title}
                                                    name="Title"
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
                                        Add Merchant Type
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

export default MerchantTypeForm;
