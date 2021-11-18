import './css/estiloImages.css';

import React, { Component, useState } from "react";

import fondo from './images/headerBackground2.png';
import imagenScrollable from './images/imagenScrollable22.jpg'
import vectorDivisor from './images/divBackground2.png'
import { Container, Row, Nav, Image, Carousel, Card, Button, Col, Modal } from 'react-bootstrap';

export default class GaleriaImagenes extends Component {

    constructor(props){
        super(props);

        this.state = {
            imagenes: ["./galeria/1.png", "./galeria/2.png","./galeria/3.png","./galeria/4.png", "./galeria/5.png",
                "./galeria/6.png", "./galeria/7.png", "./galeria/8.png", "./galeria/9.png", ],
            titulos: ["Tips de estudio", "Estudiar en tiempos de COVID", "Tips para estudiar online", "Técnicas de estudio", 
                "Consejos para el semestre", "Consejos para superar los exámenes finales", "Cómo organizar un lugar de estudio",
                "Tips para organizarse mejor", "Gestión de tiempo"],
            imagenActual: "./galeria/1.png"
        };
    }

    componentDidMount() {
        var divNav = document.getElementById('header-logo');
        divNav.style.backgroundImage = `url(${fondo})`;
        divNav.style.backgroundRepeat = 'no-repeat';
        divNav.style.backgroundSize = 'cover';
        divNav.style.display = 'block';

        var divNav2 = document.getElementById('header-logoDos');
        divNav2.style.display = 'none';

        document.body.style.backgroundColor = "#1A1B1F";
        document.body.style.backgroundImage = `url(${imagenScrollable})`;
        document.body.style.backgroundRepeat = 'no-repeat'; 
        document.body.style.backgroundSize = '100%';
    }

    render(){
        const { imagenes, titulos } = this.state;
        var { imagenActual }  = this.state;

        function VistaUnitaria() {
            const [show, setShow] = useState(false);
            
            const handleClose = () => setShow(false);
            const handleShow = (e) => {
                imagenActual = e.target.value;
                setShow(true);
            }

            return(
                <Container id="galeriaUnitariaImages">
                    <Row xs={3} md={3} className="g-3">
                        {imagenes.map((imagen, index) => (
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Img srl_gallery_image="true" variant="top" src={imagen} />
                                    <Card.Body>
                                        <Card.Text style= {{color: 'white'}}>{titulos[index]}</Card.Text>
                                        <Button value={imagen} variant="primary" onClick={handleShow}>Ver imagen</Button>
                                        <Modal scrollable={true} dialogClassName="modal-90w-2" show={show} onHide={handleClose}>
                                            <Modal.Body>
                                                <img src={imagenActual} className="img-fluid" style={{ justifyContent: 'center'}}/> 
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </Card.Body>
                                    
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            );
        };

        /*function VistaCuadricula() {

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
        };*/

        return (
            <div>
                <Container fluid id="txtGaleriaImages">
                    <Row>
                        <h1>Galer&iacute;a de im&aacute;genes</h1>
                        <p>Consejos, gu&iacute;as e informaci&oacute;n</p>
                        <p>para aprobar al semestre.</p>
                    </Row>
                </Container> 

                <Image id="divisorImages" src={vectorDivisor} rounded/>
                <VistaUnitaria />
            </div>
        )
    }
}