import React, { useState } from "react";
import axios from "axios";
import './registerPopUp.css';
import logo from   '../../assets/images/group-1.png';
import { login } from "../../services/session/SessionService.tsx";
import personIcon from '../../assets/svg/material-symbols_person-outline-rounded.svg';
import emailIcon from '../../assets/svg/ic_round-alternate-email.svg';
import passwordIcon from '../../assets/svg/mdi_password-outline.svg';
import phoneIcon from '../../assets/svg/mingcute_cellphone-line.svg';
import microsoftIcon from '../../assets/svg/logos_microsoft-icon.svg';
import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoftAlt } from "react-icons/tfi";

const RegisterPopup = ({ isOpen, closePopup, openLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3338/register", {
        name,
        email,
        password,
      });

      console.log("Registro bem-sucedido:", response.data);
      closePopup(); // Fecha o pop-up após o cadastro
      openLogin(); // Abre o pop-up de login automaticamente
    } catch (error) {
      setErrorMessage("Erro ao registrar. Tente novamente.");
      console.error("Erro ao registrar:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={closePopup}>
      <div className="register-container" onClick={(e) => e.stopPropagation()}>
        <img src={logo} alt="logo" id="register-logo" />
        <h4>Se prepare para acessar a plataforma que vai elevar a sua performance</h4>

        {errorMessage && <p className="error">{errorMessage}</p>}
        <form onSubmit={handleRegister}>
          <div id="input-popup-register">
            <img src={personIcon} alt="icon" />
            <input
                className="register-input1"
              type="text"
              value={name}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div id="input-popup-register">
            <img src={emailIcon} alt="icon" />
            <input
                className="register-input1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
            />
          </div>

          <div id="input-popup-register">
            <img src={passwordIcon} alt="icon" />
              <input
                className="register-input1"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
          </div>

          <div id="input-popup-register">
            <img src={passwordIcon} alt="icon" />
              <input
                className="register-input1"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirme a senha"
                required
              />
          </div>

          
          <div id="input-popup-register">
            <img src={phoneIcon} alt="icon" />
              <input
                className="register-input1"
                type="text"
                placeholder="Digite seu DDD + WhatsApp"
                required
              />
          </div>

          {password !== confirmPassword && <span className="error">As senhas não coincidem.</span>}

          <button className="register-button" type="submit">
            Continuar
          </button>
        </form>

        {/* <button className="register-button-continue" onClick={openLogin}>
          Já tenho conta
        </button> */}
        <div className="register-hr"><hr /><p>ou continuar com</p><hr /></div>
        <div className="register-with">
          <button className="register-with-button" >
            <FcGoogle size={25}/>
            Google
          </button>
          <button className="register-with-button" >
          {/* <TfiMicrosoftAlt size={20} color="rgba(0, 187, 255, 0.296)"/> */}
          <img src={microsoftIcon} alt="icon" />
          Microsoft
          </button>
        </div>

      </div>
    </div>
  );
};

export default RegisterPopup;
