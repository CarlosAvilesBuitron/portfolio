import React from 'react';
import parse from 'html-react-parser';

//Bootstrap
import {Container,Row,Col,Carousel,Button} from 'react-bootstrap';

//Icons
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";

function PortfolioModal(props){

    const close_modal = ()=>{
        const modal = document.getElementById('portfolio-modal');
        modal.style.display = 'none';
    };

    const open_link = (link)=>{
        window.open(link,'_blank');
    };

    const render_slider = (images)=>{

        let render;

        if(images.length === 1){
            render = ()=>{
                return(<img src={images[0]} alt="" />);
            }

            return render();

        }else{

            let render_wrapper = (items)=>{
                return(<Carousel>{items}</Carousel>);
            };

            render = images.map((image, index)=>{
                return(<Carousel.Item key="index">
                    <img
                    className="d-block w-100"
                    src={image.image}
                    alt={image.title}
                    />
                    <Carousel.Caption>
                    <h3>{image.title}</h3>
                    <p>{image.caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>);
            });

            return render_wrapper(render);
        }

        
    }

    return(
        <div id="portfolio-modal" className="custom-modal">
            <Container>
                
                    <div className="modal-content">

                        <div className="modal-header">
                            <h2>{props.example.title}</h2>
                            <span className="close" onClick={close_modal} id="close-portfolio-modal">&times;</span>
                        </div>

                        <div className="modal-body">
                            <Row>
                                <Col md={6}>
                                    {parse(props.example.description)}
                                </Col>
                                <Col md={6}>
                                    {render_slider(props.example.images)}
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-footer">
                            <p>{props.example.tech}</p>
                            <div className="links">
                                <Button onClick={()=>{open_link(props.example.link)}} className="link"><FaExternalLinkAlt/></Button>
                                {props.example.code && (
                                    <Button onClick={()=>{open_link(props.example.git)}} className="git"><FaGithub/></Button>
                                )}
                            </div>
                        </div>
                    </div>
                
            </Container>
        </div>
    );
}

export default PortfolioModal;