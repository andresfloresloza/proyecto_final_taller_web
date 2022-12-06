import React from "react";
import { Route, Routes } from "react-router";
import LoginForm from "../pages/auth/LoginForm";
import RegisterAlmacen from "../pages/auth/RegisterAlmacen";
import RegisterChofer from "../pages/auth/RegisterChofer";
import RegisterCliente from "../pages/auth/RegisterCliente";
import RegisterProveedor from "../pages/auth/RegisterProveedor";
import RegisterVendedor from "../pages/auth/RegisterVendedor";
import HomePageAdministrador from "../pages/home/HomePageAdministrador";
import ListaAlmacenes from "../pages/lista/ListaAlmacenes";
import ListaChoferes from "../pages/lista/ListaChoferes";
import ListaClientes from "../pages/lista/ListaClientes";
import ListaProveedores from "../pages/lista/ListaProveedores";
import ListaVendedores from "../pages/lista/ListaVendedores";
import PerfilChofer from "../pages/perfil/PerfilChofer";
import PerfilCliente from "../pages/perfil/PerfilCliente";
import PerfilProveedor from "../pages/perfil/PerfilProveedor";
import PerfilVendedor from "../pages/perfil/PerfilVendedor";
import ComprarProducto from "../pages/proveedores/CompraProducto";

import {
  ROUTER_COMPRAR_PRODUCTO,
  ROUTER_HOME,
  ROUTER_INITIAL,
  ROUTER_LISTA_ALMACENES,
  ROUTER_LISTA_CHOFERES,
  ROUTER_LISTA_CLIENTES,
  ROUTER_LISTA_PROVEEDORES,
  ROUTER_LISTA_VENDEDORES,
  ROUTER_LOGIN_FORM,
  ROUTER_PERFIL_CHOFER,
  ROUTER_PERFIL_CLIENTE,
  ROUTER_PERFIL_PROVEEDOR,
  ROUTER_PERFIL_VENDEDOR,
  ROUTER_REGISTER_ALMACEN,
  ROUTER_REGISTER_CHOFER,
  ROUTER_REGISTER_CLIENTE,
  ROUTER_REGISTER_PROVEEDOR,
  ROUTER_REGISTER_VENDEDOR,
} from "./Constant";

const RouterConfig = () => {
  return (
    <Routes>
      <Route
        path={ROUTER_HOME}
        element={
          <>
            <HomePageAdministrador />
          </>
        }
      />
      <Route
        path={ROUTER_INITIAL}
        element={
          <>
            <LoginForm />
          </>
        }
      />
      <Route
        path={ROUTER_LOGIN_FORM}
        element={
          <>
            <LoginForm />
          </>
        }
      />
      <Route
        path={ROUTER_REGISTER_CLIENTE}
        element={
          <>
            <RegisterCliente />
          </>
        }
      />
      <Route
        path={ROUTER_REGISTER_PROVEEDOR}
        element={
          <>
            <RegisterProveedor />
          </>
        }
      />
      <Route
        path={ROUTER_REGISTER_CHOFER}
        element={
          <>
            <RegisterChofer />
          </>
        }
      />
      <Route
        path={ROUTER_REGISTER_VENDEDOR}
        element={
          <>
            <RegisterVendedor />
          </>
        }
      />
      <Route
        path={ROUTER_REGISTER_ALMACEN}
        element={
          <>
            <RegisterAlmacen />
          </>
        }
      />
      <Route
        path={ROUTER_LISTA_CLIENTES}
        element={
          <>
            <ListaClientes />
          </>
        }
      />
      <Route
        path={ROUTER_LISTA_VENDEDORES}
        element={
          <>
            <ListaVendedores />
          </>
        }
      />
      <Route
        path={ROUTER_LISTA_PROVEEDORES}
        element={
          <>
            <ListaProveedores />
          </>
        }
      />
      <Route
        path={ROUTER_LISTA_CHOFERES}
        element={
          <>
            <ListaChoferes />
          </>
        }
      />
      <Route
        path={ROUTER_LISTA_ALMACENES}
        element={
          <>
            <ListaAlmacenes />
          </>
        }
      />
      <Route
        path={ROUTER_PERFIL_CLIENTE}
        element={
          <>
            <PerfilCliente />
          </>
        }
      />
      <Route
        path={ROUTER_PERFIL_PROVEEDOR}
        element={
          <>
            <PerfilProveedor />
          </>
        }
      />
      <Route
        path={ROUTER_PERFIL_VENDEDOR}
        element={
          <>
            <PerfilVendedor />
          </>
        }
      />
      <Route
        path={ROUTER_PERFIL_CHOFER}
        element={
          <>
            <PerfilChofer />
          </>
        }
      />
      <Route
        path={ROUTER_COMPRAR_PRODUCTO}
        element={
          <>
            <ComprarProducto />
          </>
        }
      />
    </Routes>
  );
};

export default RouterConfig;
