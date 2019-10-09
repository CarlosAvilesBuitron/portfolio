import React from 'react';

//bootstrap
import {Container,Row,Col,Form,Button} from 'react-bootstrap';

function Contact(){
    return( 
    <section id="contact_form" className="page-section">
        <h2>Get in touch</h2>
        <hr/>
        <Container>
            <Form>
                <Row>

                    <Col md={6}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" size="lg" placeholder="Name" />
                        </Form.Group>
                        <Form.Text className="text-muted">
                     
                        </Form.Text>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" size="lg" placeholder="Email" />
                            <Form.Text className="text-muted">
                         
                            </Form.Text>
                        </Form.Group>
                    </Col>

                    <Col md={12}>
                        <Form.Group controlId="message">
                            <Form.Control as="textarea" placeholder="Message" rows="3" />
                        </Form.Group>
                    </Col>

                    <Col md={12} className="text-center">
                        <Button variant="primary" type="submit">
                            Send Message
                        </Button>
                    </Col>

                
                </Row>
            </Form>
        </Container>
    </section>
    );
}

export default Contact;