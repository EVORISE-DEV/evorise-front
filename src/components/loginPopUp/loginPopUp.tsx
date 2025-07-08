import React, { useState } from "react";
import axios from "axios";
import './loginPopUp.css';
import logo from   '../../assets/images/group-1.png';
import { login } from "../../services/session/SessionService.tsx";
import emailIcon from '../../assets/svg/ic_round-alternate-email.svg';
import passwordIcon from '../../assets/svg/mdi_password-outline.svg';
import microsoftIcon from '../../assets/svg/logos_microsoft-icon.svg';
import { FcGoogle } from "react-icons/fc";

const LoginPopup = ({ isOpen, closePopup, openRegister } : any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e : any) => {
    e.preventDefault();
    setErrorMessage("");

    try {
          const response = await login(email, password);

          closePopup(); // Fecha o pop-up após o login
    } catch (error) {
      setErrorMessage("Erro ao fazer login. Verifique suas credenciais.");
      console.error("Erro ao logar:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={closePopup}>
      <div className="login-container" onClick={(e) => e.stopPropagation()}>
        <img src={logo} alt="logo" id="login-logo" />
        <h4>Se prespare para acessar a plataforma que vai elevar a sua performance</h4>
        {errorMessage && <p className="error">{errorMessage}</p>}

        <form onSubmit={handleLogin}>
          <div id="input-popup">
            <img src={emailIcon} alt="icon" />
            <input
              className="login-input1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
            />
          </div>

          <div id="input-popup">
          <img src={passwordIcon} alt="icon" />
            <input
              className="login-input1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              required
            />
          </div>

          <div className="login-remember">
            {/* <Checkbox
              inputProps={{
                'aria-label': 'Checkbox A',
              }}
            /> */}
            <input type="checkbox" id="remember" name="remember" value="remember"  />
            <label htmlFor="vehicle1">Lembre-me</label>
            <a href="/">Esqueceu sua senha?</a>
          </div>

          <button className="login-button" type="submit">
            Continuar
          </button>
        </form>
        {/* 
        <button className="login-button" onClick={openRegister}>
          Não tenho conta
        </button> */}
        <div className="login-hr"><hr /><p>ou continuar com</p><hr /></div>

        <div className="login-with">
          <button className="login-with-button" >
            <FcGoogle size={25}/>
            Google
          </button>
          <button className="login-with-button" >
            {/* <TfiMicrosoftAlt size={20} color="rgba(0, 187, 255, 0.296)"/> */}
            <img src={microsoftIcon} alt="icon" />
            Microsoft
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
