import { Routes, Route } from "react-router-dom"
import App from "../templates/App/App"
import Home from "../templates/Admin/Home"

import ForgotPass from "../templates/Login/ForgotPass"
import Login from "../templates/Login/Login"

import Mensagem from "../templates/Mensagem/Mensagem"
import MensagemLer from "../templates/Mensagem/MensagemLer"

import Usuario from "../templates/Usuario/Usuario"
import UsuarioEditar from "../templates/Usuario/UsuarioEditar"
import UsuarioNovo from "../templates/Usuario/UsuarioNovo"
import UsuariosLista from "../templates/Usuario/UsuariosLista"

import Cadastro from "../templates/Login/Cadastro"
import Cadastro2 from "../templates/Login/Cadastro2"
import Cadastro3 from "../templates/Login/Cadastro3"
import Cadastro4 from "../templates/Login/Cadastro4"

import Relatorio from "../templates/Relatorios/relatorio"
import Agenda from "../templates/Agenda/Agenda"
import Perfil from "../templates/Perfil/Perfil"
import Perfil2 from "../templates/Perfil/Perfil2"
import Desktop from "../templates/Desktop/Desktop"
import Forgotpass from "../templates/Login/Forgotpass"

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro2" element={<Cadastro2 />} />
        <Route path="/cadastro3" element={<Cadastro3 />} />
        <Route path="/cadastro4" element={<Cadastro4 />} />
        <Route path="/relatorio" element={<Relatorio />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/perfil2" element={<Perfil2 />} />
        <Route path="/Desktop" element={<Desktop />} />
        <Route path="/forgotpass" element={<ForgotPass />} />

        <Route path="/mensagem" element={<Mensagem />} />
        <Route path="/mensagemler" element={<MensagemLer />} />


        <Route path="/usuario" element={<Usuario />} />
        <Route path="/usuarioslista" element={<UsuariosLista />} />
        <Route path="/usuarionovo" element={<UsuarioNovo />} />
        <Route path="/usuarioeditar/:id" element={<UsuarioEditar />} />


      </Routes>
    </div>
  )
}
export default AppRoutes