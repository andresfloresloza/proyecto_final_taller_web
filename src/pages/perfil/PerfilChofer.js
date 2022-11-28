import React from "react";
import "../../styles/Perfiles.css";

const PerfilChofer = () => {
  return (
    <div className="page">
      <img
        className="icono"
        src={require("../../assets/logotipo.png")}
        alt="Logo Principal"
      />
      <div className="contenedorChofer1">
        <div className="contenedorIndividuales">
          <img
            className="icono-perfil-chofer"
            src={require("../../assets/icon perfil.png")}
            alt="icono-perfil"
          />
          <div>
            <p>DATOS PERSONALES</p>
            <label className="tituloDatos">Nombre Completo:</label>
            <br />
            <label className="contenidoDatos">Luis Andrés Flores Loza</label>
            <br />
            <label className="tituloDatos">Correo Electronico:</label>
            <br />
            <label className="contenidoDatos">
              luisandresfloresloza@gmail.com
            </label>
            <br />
            <label className="tituloDatos">Telefono:</label> <br />
            <label className="contenidoDatos">766-808-86</label>
          </div>
        </div>
        <div className="contenedorIndividuales">
          <img
            className="icono-perfil-chofer"
            src={require("../../assets/icon perfil.png")}
            alt="icono-perfil"
          />
          <div>
            <p>DATOS VEHICULO</p>
            <label className="tituloDatos">Modelo:</label>
            <br />
            <label className="contenidoDatos">Foton</label>
            <br />
            <label className="tituloDatos">Marca:</label>
            <br />
            <label className="contenidoDatos">BJ5049XLC-A7</label>
            <br />
            <label className="tituloDatos">Placa:</label> <br />
            <label className="contenidoDatos">5675-PRD</label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PerfilChofer;
