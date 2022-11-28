/* eslint-disable jsx-a11y/anchor-is-valid */
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  ROUTER_HOME,
  ROUTER_JUEGOS,
  ROUTER_LISTA_ALMACENES,
  ROUTER_LISTA_CHOFERES,
  ROUTER_LISTA_CLIENTES,
  ROUTER_LISTA_PROVEEDORES,
  ROUTER_LISTA_VENDEDORES,
  ROUTER_LOGIN_FORM,
  ROUTER_PERFIL,
  ROUTER_RANKING,
  ROUTER_REGISTER_ALMACEN,
  ROUTER_REGISTER_CHOFER,
  ROUTER_REGISTER_CLIENTE,
  ROUTER_REGISTER_PROVEEDOR,
  ROUTER_REGISTER_VENDEDOR,
} from "../config/Constant";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="navbar_principal">
      <Nav className="navbar navbar-expand-lg navbar navbar-dark ">
        <div className="container-fluid">
          <a href={ROUTER_HOME}>
            <img
              className="icono-menu"
              src={require("../../src/assets/logo2.png")}
              alt="icono-perfil"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <NavDropdown title="FACTURAS">
                <Link className="dropdown-item">LISTA FACTURAS</Link>
              </NavDropdown>
              <NavDropdown title="PEDIDOS">
                <Link className="dropdown-item">LISTA PEDIDOS</Link>
              </NavDropdown>
              <NavDropdown title="USUARIOS">
                <Link className="dropdown-item" to={ROUTER_REGISTER_CLIENTE}>
                  REGISTRAR CLIENTE
                </Link>
                <Link className="dropdown-item" to={ROUTER_REGISTER_VENDEDOR}>
                  REGISTRAR VENDEDOR
                </Link>
                <Link className="dropdown-item" to={ROUTER_REGISTER_CHOFER}>
                  REGISTRAR CHOFER
                </Link>
                <Link className="dropdown-item" to={ROUTER_REGISTER_PROVEEDOR}>
                  REGISTRAR PROVEEDOR
                </Link>

                <br />
                <Link className="dropdown-item" to={ROUTER_LISTA_CLIENTES}>
                  LISTA CLIENTES
                </Link>
                <Link className="dropdown-item" to={ROUTER_LISTA_VENDEDORES}>
                  LISTA VENDEDORES
                </Link>
                <Link className="dropdown-item" to={ROUTER_LISTA_CHOFERES}>
                  LISTA CHOFERES
                </Link>
                <Link className="dropdown-item" to={ROUTER_LISTA_PROVEEDORES}>
                  LISTA PROVEEDORES
                </Link>
              </NavDropdown>
              <NavDropdown title="ALMACENES">
                <Link className="dropdown-item" to={ROUTER_REGISTER_ALMACEN}>
                  REGISTRAR ALMACEN
                </Link>
                <Link className="dropdown-item" to={ROUTER_LISTA_ALMACENES}>
                  LISTA ALMACENES
                </Link>
              </NavDropdown>
              <NavDropdown title="PROVEEDORES">
                <Link className="dropdown-item">COMPRAR PRODUCTO</Link>
              </NavDropdown>
              <li className="nav-item">
                <a className="nav-link" href={ROUTER_LOGIN_FORM}>
                  CERRAR SESIÓN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    </div>
  );
};

export default Header;
