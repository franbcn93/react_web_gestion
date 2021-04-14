import "../style/Header.css";
import React, { Component, Fragment } from "react";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <header id="main-header">
          <a id="logo-header" href="/">
            <img
              className="imgLogo"
              src="https://res.cloudinary.com/dfb6ivozp/image/upload/v1617948985/logo_fondo_bosenc.png"
              alt=""
            />
          </a>
          <nav>
            <ul>
              <li>
                <a href="/">Inicio</a>
                {/* <a href="/react_web">Inicio</a> */}
              </li>
              <li>
                <a href="/gestion">Tecnología e innovación</a>
              </li>
              {/* Está por modificar */}
              <li>
                <a href="/hospitales">Hospitales</a>
              </li>
              <li>
                <a href="/contacto">Contacto</a>
              </li>
            </ul>
          </nav>
        </header>
      </Fragment>
    );
  }
}
