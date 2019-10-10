import React, {useState} from 'react';
import {API} from 'aws-amplify';

//bootstrap
import {Container,Row,Col,Form,Button,Spinner} from 'react-bootstrap';

function Contact(){

    const[formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const[status, setStatus] = useState('Thank you. I will be in touch shortly.');

    const handle_submit = (event)=>{

        event.preventDefault();

        const send_data = async function send_data(){
            console.log('Sending data');
            document.getElementById('loading').style.display = 'block';

            try{
                const formData = await API.post('restend', '/contact', 
                {body: formState
                });
                console.log('Returning data.');
                console.log(formData);
                console.log('Form is submitted');
                document.getElementById('loading').style.display = 'none';
                document.getElementById('contact-form').style.display = 'none';
                document.getElementById('results').style.display = 'block';

            }catch(err){
                document.getElementById('loading').style.display = 'none';
                document.getElementById('results').style.display = 'block';
                document.getElementById('contact-form').style.display = 'block';
                console.log(err);
                setStatus('An error has occured. Please try again.')
            }
        };

        send_data();

    };

    const handle_change = (e)=>{
        setFormState({...formState, [`${e.target.name}`]: e.target.value});
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'none';
        return;
    };

    return( 
        <section id="contact_form" className="page-section">
            <h2>Get in touch</h2>
            <hr/>
            <Container>
                <Form onSubmit={handle_submit}>
                    <Row id="contact-form">
                        <Col md={6}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control onChange={handle_change} name="name" required type="text" size="lg" placeholder="Name" />
                            </Form.Group>
                            <Form.Text className="text-muted">
                        
                            </Form.Text>
                        </Col>

                        <Col md={6}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control onChange={handle_change} name="email" required type="email" size="lg" placeholder="Email" />
                                <Form.Text className="text-muted">
                            
                                </Form.Text>
                            </Form.Group>
                        </Col>

                        <Col md={12}>
                            <Form.Group controlId="message">
                                <Form.Control onChange={handle_change} name="message" required as="textarea" placeholder="Message" rows="3" />
                            </Form.Group>
                        </Col>

                        <Col md={12} className="text-center">
                            <Button variant="primary" type="submit">
                                Send Message
                            </Button>
                        </Col>
                    </Row>

                    <Row id="loading">
                        <Col md={12}>
                            <Spinner animation="border"/>
                        </Col>
                    </Row> 

                    <Row>
                        <Col md={12}>
                            <p id="results">{status}</p>
                        </Col>
                    </Row> 
                </Form>
            </Container>
        </section>
    );
}

export default Contact;