import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import './Destination.css'

const Destination = () => {

    const footerheadingStyle = {
        color: 'black',
        fontSize: '50px',
        letterSpacing: '8px',
        margin: '40px',
        fontFamily: 'cursive'
    }

    return (
        <div>
            <div className="destination-container mb-5 mt-5 ps-5">
                <h3 style={footerheadingStyle}>!!Find A Place!! </h3>
                <Form className="ps-5 ms-5">
                    <Row className="align-items-center">
                        <Col sm={3} className="my-1">
                            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                Place Name
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="Doctor name" />
                        </Col>

                        <Col sm={3} className="my-1">
                            <Form.Select className="me-sm-2" id="inlineFormCustomSelect" placeholder="Username">
                                <option value="0">Choose a Location</option>
                                <option value="1">Dhaka</option>
                                <option value="2">Chittagong</option>
                                <option value="3">Bandorban</option>
                                <option value="4">Sylhet</option>
                                <option value="5"> Cox's Bazar</option>
                                <option value="6">Sent Martin</option>
                            </Form.Select>
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button type="submit">Choose Location</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
};

export default Destination;