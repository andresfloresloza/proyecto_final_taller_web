import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../styles/CompraProducto.css";

const ComprarProducto = () => {
  const [listaProveedores, setListaProveedores] = useState([]);
  const [listaProductos, setListaProductos] = useState([]);
  const token = useSelector((state) => state.login.token);

  useEffect(() => {
    getProveedores();
    getProductos();
  }, []);

  const getProveedores = () => {
    const url = "https://localhost:7272/api/proveedor/search";
    axios
      .get(url, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setListaProveedores(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const getProductos = () => {
    const url = "https://localhost:7272/api/producto/search";
    axios
      .get(url, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setListaProductos(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="page">
      <div className="contenedorCompra1">
        <h2>FORMULARIO DE COMPRA</h2>
        <div className="contenedorInputCompra">
          <select className="inputProveedor">
            <option>-- Selecciona el Proveedor --</option>
            {listaProveedores.map((link) => (
              <option>{link.nombre}</option>
            ))}
          </select>
        </div>
        <div className="contenedorInputCompra">
          <select className="inputProducto">
            <option>-- Selecciona un Producto --</option>
            {listaProductos.map((link) => (
              <option>{link.nombre}</option>
            ))}
          </select>
          <label className="label">Cantidad: </label>
          <input className="inputCantidad" type="number" placeholder="0" />
        </div>
        <div className="contenedorInputCompra">
          <Link className="btn_añadir">Añadir</Link>
        </div>
      </div>

      <div className="contenedorCompra2">
        <div className="containerTable">
          <h3>LISTA DE ARTICULOS A COMPRAR</h3>
          <br />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">PRODUCTO</th>
                <th scope="col">CANTIDAD</th>
                <th scope="col">PRECIO UNITARIO</th>
                <th scope="col">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Coca Cola 2Ltrs</td>
                <td>100</td>
                <td>10 Bs</td>
                <td>1000 Bs</td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>Agua Vital 2Ltrs</td>
                <td>10</td>
                <td>7 Bs</td>
                <td>70 Bs</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th className="cuadrado" scope="col"></th>
                <th className="cuadrado" scope="col"></th>
                <th className="cuadrado" scope="col"></th>
                <th className="cuadrado" scope="col">
                  TOTAL Bs.
                </th>
                <th scope="col">1070 Bs</th>
              </tr>
            </thead>
          </table>
          <Link className="login-btn_login">Pagar</Link>
        </div>
      </div>
    </div>
  );
};
export default ComprarProducto;
