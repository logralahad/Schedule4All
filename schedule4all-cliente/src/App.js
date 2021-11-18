import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { Route, Routes } from "react-router-dom";

import logo from './components/images/logo.png';
import Inicio from './components/inicio.component.js';
import GaleriaVideos from './components/galeria-videos.component';
import { Container, Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import GaleriaImagenes from './components/galeria-imagenes.component';
import Registro from './components/registro.component';
import LogIn from './components/login-component';

function App() {
  return (
    <div className="App">
      <div id="header-logo">
        <Navbar className="navbar py-4" expand="lg" >
          <Container>
              <Navbar.Brand href="/">
                  <img
                      src={logo}
                      className="d-inline-block align-top"
                      alt="Schedule4All logo"
                  />{' '}
                  <h2 id="main_title">Schedule4All</h2>
              </Navbar.Brand>
          </Container>
          
          <Container id="barraBotones">
              <Nav className="justify-content-end" activeKey="/">
                  <Nav.Item>
                  <button style={{backgroundColor: "#5956F2"}}>
                        <a href="/contacto" style={{textDecoration: 'none', color: "white"}}>Contacto</a>
                      </button>
                  </Nav.Item>

                  <Nav.Item>
                      <button style={{backgroundColor: "#5956F2"}}>
                        <a href="/login" style={{textDecoration: 'none', color: "white"}}>Iniciar sesión</a>
                      </button>
                  </Nav.Item>

                  <Nav.Item>
                      <DropdownButton id="dropdown-basic-button" title="Galería">
                          <Dropdown.Item href="/galeria-videos">Videos</Dropdown.Item>
                          <Dropdown.Item href="/galeria-imagenes">Imagenes</Dropdown.Item>
                      </DropdownButton>
                  </Nav.Item>

                  <Nav.Item id="btnRegistro" >
                      <button style={{backgroundColor: "#56E1FF", }}>
                        <a href="/registrarse" style={{textDecoration: 'none', color: "black"}}>Registrarse</a>
                      </button>
                  </Nav.Item>

                  <Nav.Item id="btnInicio" style={{display: 'none'}}>
                      <button style={{backgroundColor: "#E6E955", }}>
                        <a href="/" style={{textDecoration: 'none', color: "black"}}>Inicio</a>
                      </button>
                  </Nav.Item>
              </Nav>
          </Container>
        </Navbar>
      </div>

      <div id="header-logoDos" style={{display: 'none'}}>
        <Navbar className="navbar py-4" expand="lg" >
          <Container id="barraBotonesDos">
              <Nav className="justify-content-end" activeKey="/">
                  <Nav.Item >
                      <button style={{backgroundColor: "#E6E955", }}>
                        <a href="/" style={{textDecoration: 'none', color: "black"}}>Inicio</a>
                      </button>
                  </Nav.Item>

                  <Nav.Item>
                      <DropdownButton id="dropdown-basic-buttonDos" title="Galería">
                          <Dropdown.Item href="/galeria-videos">Videos</Dropdown.Item>
                          <Dropdown.Item href="/galeria-imagenes">Imagenes</Dropdown.Item>
                      </DropdownButton>
                  </Nav.Item>

                  <Nav.Item >
                      <button style={{backgroundColor: "#E6E955", }}>
                        <a href="/contacto" style={{textDecoration: 'none', color: "black"}}>Contacto</a>
                      </button>
                  </Nav.Item>

                  <Nav.Item >
                      <button style={{backgroundColor: "#E6E955", }}>
                        <a href="/servicios" style={{textDecoration: 'none', color: "black"}}>Servicios</a>
                      </button>
                  </Nav.Item>
              </Nav>
          </Container>

          <Container>
              <Navbar.Brand href="/">
                <h2 id="main_titleDos">Schedule4All</h2>
                  <img
                      id="logoDos"
                      src={logo}
                      className="d-inline-block align-top"
                      alt="Schedule4All logo"
                  />{' '}
              </Navbar.Brand>
          </Container>
        </Navbar>
      </div>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/galeria-videos" element={<GaleriaVideos/>}></Route>
          <Route path="/galeria-imagenes" element={<GaleriaImagenes/>}></Route>
          <Route exact path="/registrarse" element={<Registro/>}></Route>
          <Route exact path="/login" element={<LogIn/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
