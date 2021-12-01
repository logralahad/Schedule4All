import './css/estiloVideos.css';

import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';

import fondo from './images/headerBackground2.png';
import imagenScrollable from './images/imagenScrollable11.jpg'
import vectorDivisor from './images/divBackground2.png'
import { Container, Row, Nav, Image, Carousel, Card, Button, Col, Modal } from 'react-bootstrap';

export default class GaleriaVideos extends Component {

    constructor(props){
        super(props);

        this.state = {
            videos: ["https://www.youtube.com/embed/arj7oStGLkU", "https://www.youtube.com/embed/MlJdMr3O5J4",
            "https://www.youtube.com/embed/d8smMhh8DRU", "https://www.youtube.com/embed/SnWGwITaW-k", 
            "https://www.youtube.com/embed/8DfYQtZTsnU", "https://www.youtube.com/embed/OGEohVo0dHU", 
            "https://www.youtube.com/embed/z6IUiamE3-U", "https://www.youtube.com/embed/UNxhkq9jjVo", 
            "https://www.youtube.com/embed/L_66jzhyzUc"],
            tituloActual: "Inside the mind of a master procrastinator | Tim Urban",
            videoActual: "https://www.youtube.com/embed/arj7oStGLkU"
        };
    }

    componentDidMount() {
        var divNav = document.getElementById('header-logo');
        divNav.style.display = 'block';
        divNav.style.backgroundImage = `url(${fondo})`;
        divNav.style.backgroundRepeat = 'no-repeat';
        divNav.style.backgroundSize = 'cover';

        var divNav2 = document.getElementById('header-logoDos');
        divNav2.style.display = 'none';

        document.body.style.backgroundColor = "#1A1B1F";
        document.body.style.backgroundImage = `url(${imagenScrollable})`;
        document.body.style.backgroundRepeat = 'no-repeat'; 
        document.body.style.backgroundSize = '100%';
    }

    render(){
        const { videos } = this.state;
        var { videoActual, tituloActual }  = this.state;

        function TipoVista(){
            const handleSelect = (eventKey) => {
                if(eventKey == 1){
                    document.body.removeChild(document.body.lastChild);
                    document.getElementById('tituloActual').style.display = 'block';
                    ReactDOM.render(<VistaUnitaria />, document.body.appendChild(document.createElement("div")));
                    
                }
                else{
                    document.body.removeChild(document.body.lastChild);
                    document.getElementById('tituloActual').style.display = 'none';
                    ReactDOM.render(<VistaCuadricula />, document.body.appendChild(document.createElement("div")));
                    
                }
            }

            return(
                <Nav fill variant="pills" id="modoVista" onSelect={handleSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="1">Vista unitaria</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2">Vista de cuadr&iacute;cula</Nav.Link>
                    </Nav.Item>
                </Nav>
            );
        }

        function VistaUnitaria() {
            const [index, setIndex] = useState(0);
            
            const handleSelect = (selectedIndex, e) => {
                var apiKey = "AIzaSyADQdee_VITLYoKqJjlo_y_-Wp-XA8-THM";    
                var videoId = videos[selectedIndex].substring(30);
                var snippetURL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId + "&key=" + apiKey;

                $.getJSON(snippetURL)
                    .done(function(data) {
                        var label = document.getElementById("tituloActual");
                        if(label){
                            label.innerHTML = data.items[0].snippet.title;
                        }
                    })
                    .fail(function() {
                    console.log("Error");
                });
                setIndex(selectedIndex);
            }

            return(
                <Container id="galeriaUnitaria" style={{marginLeft: '120px', marginRight: 'auto'}}>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {videos.map((video, index) => (
                            <Carousel.Item key={index} interval={500000}>
                                <iframe src={video} width="840" height="473" title="YouTube video player" 
                                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
                                    encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                                    style={{marginLeft: '230px', marginRight: 'auto'}}>
                                </iframe>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            );
        };

        function VistaCuadricula() {
            const [show, setShow] = useState(false);
            
            const handleClose = () => setShow(false);
            const handleShow = (e) => {
                videoActual = e.target.value;
                setShow(true);
            }
            
            return(
                <Container id="galeriaCuadricula">
                    <Row xs={3} md={3} className="g-2">
                        {videos.map((video, index) => (
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Img srl_gallery_image="true" variant="top" src={"http://img.youtube.com/vi/"+ video.substring(30) 
                                            +"/maxresdefault.jpg"} />
                                    
                                    <Card.Body>
                                        <Button value={video} variant="primary" onClick={handleShow}>Ver video</Button>
                                        <Modal className="special_modal" dialogClassName="modal-90w" show={show} onHide={handleClose}>
                                            <Modal.Body>
                                                <iframe src={videoActual} width="840" height="473" title="YouTube video player" 
                                                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
                                                    encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                                                </iframe>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </Card.Body>
                                    <Card.Footer style= {{color: 'white'}}>Video {index + 1}</Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            );
        };

        return (
            <div>
                <Container fluid id="txtGaleria">
                    <Row>
                        <h1>Galer&iacute;a de videos</h1>
                        <p>Videos recomendados para cumplir</p>
                        <p>tus metas escolares.</p>
                    </Row>
                </Container> 

                <Image id="divisor" src={vectorDivisor} rounded/>
                <TipoVista />
                <h1 id="tituloActual" style={{textAlign: 'center', display: 'none'}}>{tituloActual}</h1>
            </div>
        )
    }
}