/* eslint-disable jsx-a11y/anchor-is-valid */
import { Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  ROUTER_COMPRAR_PRODUCTO,
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
import { userLogout } from "../redux/loginSlice";
import "../styles/Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const token = useSelector((state) => state.login.token);

  const logout = () => {
    dispatch(userLogout(token));
    history(ROUTER_LOGIN_FORM);
  };

  return (
    <div className="navbar_principal">
      {token && (
        <Nav className="navbar navbar-expand-lg navbar navbar-dark ">
          <div className="container-fluid">
            <a href={ROUTER_HOME}>
              <img
                className="icono-menu"
                src={require("../../src/assets/logo2.png")}
                alt="icono-perfil"
              />
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
                  <Link
                    className="dropdown-item"
                    to={ROUTER_REGISTER_PROVEEDOR}
                  >
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
                  <Link className="dropdown-item" to={ROUTER_COMPRAR_PRODUCTO}>
                    COMPRAR PRODUCTO
                  </Link>
                </NavDropdown>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={ROUTER_LOGIN_FORM}
                    onClick={logout}
                  >
                    CERRAR SESIÓN
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Nav>
      )}
    </div>
  );
};

export default Header;
