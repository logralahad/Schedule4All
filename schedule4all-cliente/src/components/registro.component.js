import './css/estiloRegistro.css';
import React, { Component, useState } from "react";
import UserService from "../services/user.service.js";
import GoogleLogin from 'react-google-login';

import fondo from './images/headerRegistro1.png';
import googleIcon from './images/googleicon.png';
import fbIcon from './images/facebookicon.jpg';
import footerImg from './images/footerRegistro1.png';
import imagenRecreativa from './images/profileFondo.jpg'
import { Image, Alert, Button, Col, Container, Row } from 'react-bootstrap';

export default class Registro extends Component {

    constructor(props) {
        super(props);
        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangePaterno = this.onChangePaterno.bind(this);
        this.onChangeMaterno = this.onChangeMaterno.bind(this);
        this.onChangeFecha = this.onChangeFecha.bind(this);
        this.onChangeCorreo = this.onChangeCorreo.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeGenero = this.onChangeGenero.bind(this);
        this.onChangePais = this.onChangePais.bind(this);

        this.saveUsuario = this.saveUsuario.bind(this);
        this.newUsuario = this.newUsuario.bind(this);
        this.limpiar = this.limpiar.bind(this);

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
        divNav.style.display = 'block';
        divNav.style.backgroundImage = `url(${fondo})`;
        divNav.style.backgroundRepeat = 'no-repeat';
        divNav.style.backgroundSize = '120%';

        var divNav2 = document.getElementById('header-logoDos');
        divNav2.style.display = 'none';

        var btnUno = document.getElementById('btnRegistro');
        var btnDos = document.getElementById('btnInicio');
        btnUno.style.display = 'none';
        btnDos.style.display = 'block';
    }

    onChangeNombre(e) {
        this.setState({
            nombre: e.target.value
        });
    }

    onChangePaterno(e){
        this.setState({
            paterno: e.target.value
        });
    }

    onChangeMaterno(e){
        this.setState({
            materno: e.target.value
        });
    }

    onChangeFecha(e){
        this.setState({
            fecha: e.target.value
        });
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

    onChangeGenero(e){
        this.setState({
            genero: e.target.value
        });
    }

    onChangePais(e){
        this.setState({
            pais: e.target.value
        });
    }

    saveUsuario(){
        var data = {
            nombre: this.state.nombre,
            paterno: this.state.paterno,
            materno: this.state.materno,
            fecha: this.state.fecha,
            correo: this.state.correo,
            password: this.state.password,
            genero: this.state.genero,
            pais: this.state.pais,
            estatus: this.state.estatus,
            sesion: this.state.sesion
        };

        console.log(data);

        UserService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    nombre: response.data.nombre,
                    paterno: response.data.paterno,
                    materno: response.data.materno,
                    fecha: response.data.fecha,
                    correo: response.data.correo,
                    password: response.data.password,
                    genero: response.data.genero,
                    pais: response.data.pais,
                    estatus: response.data.estatus,
                    sesion: response.data.sesion,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
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

    limpiar(){
        var inputs = document.getElementsByTagName('input');
        var select1 = document.getElementById('genero');
        var select2 = document.getElementById('pais');
    
        for (let i = 0; i < inputs.length; i++) {
            var ipt = inputs[i];
            if (ipt.value != '') {
                ipt.value = "";
            }
        }
    
        select1.selectedIndex = 0;
        select2.selectedIndex = 0;
    }

    render() {
        const responseGoogle = (response) => {
            console.log(response.profileObj);
        }

        const onFailureSucess = (response) => {
            console.log("Log in fallo");
        }

        const onSignOutSucess = () => {
            console.log("Log off exitosamente");
        }

        function AlertDismissible() {
            const [show, setShow] = useState(true);
          
            return (
              <>
                <Alert show={show} variant="success">
                  <Alert.Heading>¡Bienvenido!</Alert.Heading>
                  <p>
                    ¡Te has registrado exitosamente!
                  </p>
                  <hr />
                  <div className="d-flex justify-content-end">
                    <Button href="/login" onClick={() => setShow(false)} variant="outline-success">
                        <a href="/login" style={{textDecoration: 'none', color: "black"}}>Cerrar</a>
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
                        <Container>
                            <Row>
                                <Col sm={6}>
                                    <div id="sign_in">
                                        <h1>REG&Iacute;STRATE AHORA</h1>

                                        <div id="form">
                                            <label for="usuario">NOMBRE:</label>
                                            <input
                                                type="text"
                                                id="nombre"
                                                required
                                                value={this.state.nombre}
                                                onChange={this.onChangeNombre}
                                                name="nombre"
                                            />

                                            <label for="usuario">APELLIDO PATERNO:</label>
                                            <input
                                                type="text"
                                                id="paterno"
                                                required
                                                value={this.state.paterno}
                                                onChange={this.onChangePaterno}
                                                name="paterno"
                                            />

                                            <label for="usuario">APELLIDO MATERNO:</label>
                                            <input
                                                type="text"
                                                id="materno"
                                                required
                                                value={this.state.materno}
                                                onChange={this.onChangeMaterno}
                                                name="materno"
                                            />

                                            <label for="fecha">FECHA DE NACIMIENTO:</label>
                                            <input
                                                type="date"
                                                id="fecha"
                                                required
                                                value={this.state.fecha}
                                                onChange={this.onChangeFecha}
                                                name="fecha"
                                            />

                                            <label>G&Eacute;NERO:</label>
                                            <select 
                                                id="genero" 
                                                name="genero" 
                                                size="1"
                                                value={this.state.genero}
                                                onChange={this.onChangeGenero}
                                            >
                                                <option value="none" selected disabled hidden>ELIGE TU G&Eacute;NERO</option>
                                                <option>MASCULINO</option>
                                                <option>FEMENINO</option>
                                            </select>

                                            <label>P&Aacute;IS:</label>
                                            <select 
                                                id="pais" 
                                                name="pais" 
                                                size="1"
                                                value={this.state.pais}
                                                onChange={this.onChangePais}
                                            >
                                                <option value="none" selected disabled hidden>ELIGE TU PA&Iacute;S</option>
                                                <option>M&Eacute;XICO</option>
                                                <option>ESPAÑA</option>
                                                <option>ESTADOS UNIDOS</option>
                                                <option>ALEMANIA</option>
                                                <option>FRANCIA</option>
                                                <option>ITALIA</option>
                                            </select>

                                            <label for="email">CORREO:</label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={this.state.correo}
                                                onChange={this.onChangeCorreo}
                                                name="email"
                                            />

                                            <label for="pwd">CONTRASEÑA:</label>
                                            <input
                                                type="password"
                                                id="password"
                                                required
                                                value={this.state.password}
                                                onChange={this.onChangePassword}
                                                name="password"
                                            />
                                        </div>

                                        <div id="pnlFormInferior">
                                            <div id="formButtons">
                                                <Button  className="navButton" id="btnSubmit" onClick={this.saveUsuario}>CONFIRMAR</Button >
                                                <Button  className="navButton" id="btnCancelar" onClick={this.limpiar}>BORRAR</Button >
                                            </div>

                                            <div id="altSignIn">
                                                <GoogleLogin
                                                    clientId="395857363643-mbv70stiskuqvmspdrc6jjnnaodh4pn7.apps.googleusercontent.com"
                                                    render={renderProps => (
                                                        <img src={googleIcon} onClick={renderProps.onClick} disabled={renderProps.disabled} style={{width: "45px", height: "45px"}}/>
                                                    )}
                                                    buttonText="Usar Google"
                                                    onSuccess={responseGoogle}
                                                    onFailure={onFailureSucess}
                                                    cookiePolicy={'single_host_origin'}
                                                    style={{width: "95px"}}
                                                />
                                                <img src={fbIcon} style={{width: "45px", height: "45px"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col sm={2}>
                                    <Image id="linea"></Image>
                                </Col>
                            </Row>
                        </Container>
                        <Image id="mainImagenRegistro" fluid src={imagenRecreativa}/>
                        <Image id="footer" src={footerImg}/>
                    </div>
                )}
            </div>
        );
    }

}