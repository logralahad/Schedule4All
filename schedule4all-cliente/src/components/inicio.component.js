import './css/estiloIndex.css';
import "@fontsource/zilla-slab-highlight";

import React, { Component } from "react";
import imagenIndex from './images/main2.png';
import fondo from './images/fondo.png';

import { Row, Col, Image, Container } from 'react-bootstrap';

export default class Inicio extends Component {

    componentDidMount() { 
        var divNav = document.getElementById('header-logo');
        divNav.style.backgroundImage = 'none';
        divNav.style.display = 'block';

        var divNav2 = document.getElementById('header-logoDos');
        divNav2.style.display = 'none';

        document.body.style.backgroundImage = `url(${fondo})`;
        document.body.style.backgroundRepeat = 'none';
        document.body.style.backgroundSize = 'cover'; 
    }

    render(){
        return (
            <div>
                <Container id="container-index">
                    <Row>
                        <Col xs={7}>
                            <Container id="slogan">
                                <Row>
                                    <h1 id="sloganMain">TODAS TUS TAREAS</h1>
                                    <h2 id="sloganSub">EN UN SOLO LUGAR</h2>
                                    
                                    <p id="description">
                                    TUS DEBERES PENDIENTES SIN TENER QUE ABRIR TODAS LAS PLATAFORMAS A LA VEZ, JUNTO CON RECORDATORIOS Y SUGERENCIAS CON FUENTES CONFIABLES.
                                    </p>
                                </Row>

                                <Row>
                                    <button id="btnConocer">
                                    <a href="https://www.youtube.com/watch?v=mI5jnUSA9Ag&ab_channel=Melanch%C3%B8licMemories" id="btnConocer">Conocer más...
                                    </a>
                                    </button>
                                </Row>
                            </Container>
                        </Col>
                        <Col>
                            <Image id="mainImagen" src={imagenIndex} rounded fluid/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}