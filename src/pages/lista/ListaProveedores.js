import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTER_PERFIL_PROVEEDOR } from "../../config/Constant";
import "../../styles/Listas.css";

const ListaProveedores = () => {
  const [list, setList] = useState([]);
  const token = useSelector((state) => state.login.token);

  useEffect(() => {
    getProveedores();
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
        setList(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="page">
      <div className="contenedorMensaje">
        <p className="tituloRanking">LISTA PROVEEDORES</p>
        <div className="containerTable">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NOMBRE COMPLETO</th>
                <th scope="col">DIRECCION</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {list?.map((link, index) => (
                <tr>
                  <td scope="row">{index + 1}</td>
                  <td>{link.nombre}</td>
                  <td>{link.ubicacion}</td>
                  <td>
                    <Link>Ver Perfil</Link>
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
export default ListaProveedores;
