import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTER_PERFIL_PROVEEDOR } from "../../config/Constant";
import "../../styles/Listas.css";

const ListaProductos = () => {
  const [list, setList] = useState([]);
  const token = useSelector((state) => state.login.token);

  useEffect(() => {
    getProductos();
  }, []);

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
        setList(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="page">
      <div className="contenedorMensaje">
        <p className="tituloRanking">LISTA PRODUCTOS</p>
        <div className="containerTable">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NOMBRE DEL PRODUCTO</th>
                <th scope="col">STOCK</th>
                <th scope="col">PRECIO</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {list?.map((link, index) => (
                <tr>
                  <td scope="row">{index + 1}</td>
                  <td>{link.nombre}</td>
                  <td>{link.stock}</td>
                  <td>{link.precio} Bs.</td>
                  <td>
                    <Link>Ver Producto</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ListaProductos;
