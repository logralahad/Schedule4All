import './css/estiloLogin.css';
import React, { Component, useState } from "react";
import UserService from "../services/user.service.js";

import fondo from './images/fondo_login.png';
import imagenRecreativa from './images/login.png'
import { Image, Alert, Button, Col, Container, Row } from 'react-bootstrap';

export default class LogIn extends Component {

    constructor(props) {
        super(props);
        this.onChangeCorreo = this.onChangeCorreo.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.buscarUsuario = this.buscarUsuario.bind(this);
        this.newUsuario = this.newUsuario.bind(this);

        this.state = {
            userActual: {
                id: null,
                nombre: "",
                paterno: "",
                materno: "",
                fecha: "",
                correo: "",
                password: "",
                genero: "",
                pais: "",
                estatus: true,
                sesion: false,

                sumbitted: false
            },
        };
    }

    //El método componentDidMount() se ejecuta después que la salida del componente ha sido renderizada en el DOM. 
    componentDidMount() {
        var divNav = document.getElementById('header-logo');
        divNav.style.display = 'none';

        var divNav = document.getElementById('header-logoDos');
        divNav.style.display = 'block';

        document.body.style.backgroundImage = `url(${fondo})`;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    }

    onChangeCorreo(e){
        this.setState({
            correo: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    newUsuario(){
        this.setState({
            id: null,
            nombre: "",
            paterno: "",
            materno: "",
            fecha: "",
            correo: "",
            password: "",
            genero: "",
            pais: "",
            estatus: true,
            sesion: false,

            submitted: false
        });
    }

    buscarUsuario(){
        UserService.findByEmails(this.state.correo)
         .then(response => {
            var pos_pwd = response.data[0].password;
            if(pos_pwd == this.state.password){
                this.setState({
                    id: response.data[0].id,
                    nombre: response.data[0].nombre,
                    paterno: response.data[0].paterno,
                    materno: response.data[0].materno,
                    fecha: response.data[0].fecha,
                    correo: response.data[0].correo,
                    password: response.data[0].password,
                    genero: response.data[0].genero,
                    pais: response.data[0].pais,
                    estatus: response.data[0].estatus,
                    sesion: response.data[0].sesion,
    
                    submitted: true
                });
            }
            else{
                alert("La contraseña o el correo son incorrectos.")
            }
         })
         .catch(e => {
            alert("No hay usuario registrado con dicho correo.")
         })
    }

    render() {
        const { nombre } = this.state;

        function AlertDismissible() {
            const [show, setShow] = useState(true);
          
            return (
              <>
                <Alert show={show} variant="success">
                  <Alert.Heading>¡Bienvenido, {nombre}!</Alert.Heading>
                  <p>
                    ¡Inicio de sesión exitoso!
                  </p>
                  <hr />
                  <div className="d-flex justify-content-end">
                    <Button href="/" onClick={() => setShow(false)} variant="outline-success">
                        <a href="/" style={{textDecoration: 'none', color: "black"}}>Cerrar</a>
                    </Button>
                  </div>
                </Alert>
              </>
            );
        }

        return (
            <div>
                {this.state.submitted ? (
                    <div>
                        <AlertDismissible />
                    </div>
                ) : (
                    <div>
                        <Container id="containerImagen">
                            <Row>
                                <Col xs={5}>
                                    <Image id="imageLogin" fluid src={imagenRecreativa}/>
                                    <h1 id="mensaje1">¡ HOLA !</h1>
                                    <h2 id="mensaje2">BIENVENIDO DE NUEVO</h2>
                                </Col>

                                <Col>
                                    <Container id="sign_in">
                                        <Row>
                                            <h1 style={{fontSize: '64px'}} id="inicia">INICIA<br/>SESI&Oacute;N</h1>
                                        </Row>

                                        <Row>
                                            <div class="textbox">
                                                <i class="fa fa-user icon fa-3x"></i>
                                                <input 
                                                    type="text"
                                                    id="user"
                                                    required
                                                    class="campo"
                                                    value={this.state.correo}
                                                    onChange={this.onChangeCorreo}
                                                    placeholder="CORREO"/>
                                            </div>
                                            
                                            <div class="textbox">
                                                <i class="fa fa-lock icon fa-3x"></i>
                                                <input
                                                    type="password"
                                                    id="pwd"
                                                    required
                                                    class="campo"
                                                    value={this.state.password}
                                                    onChange={this.onChangePassword}
                                                    name="password"
                                                    placeholder="CONTRASEÑA"/>
                                            </div>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <button class="btnEntrar" id="btnEntrar" onClick={this.buscarUsuario}>ENTRAR</button>
                                                <p><a href="https://www.youtube.com/watch?v=M5iSEdo5VNI&ab_channel=SilverVEVO" class="olvido">¿OLVIDASTE TU CONTRASEÑA?</a></p>
                                                <p><a href="/registrarse" class="registro">¿NUEVO? CREA UNA CUENTA</a></p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container> 
                    </div>
                )}
            </div>
        );
    }

}