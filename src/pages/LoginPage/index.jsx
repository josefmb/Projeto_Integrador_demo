import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import logo from '../../assets/e-commerce-concept-logo.png';
import seta from '../../assets/setinha.svg';

import "../../styles/GlobalStyles/styles.css";
import "../../styles/LoginStyles/styles.css";

const LoginPage = () => {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });

    login(email, password);
  }

  return (
    <div className="container">
      <header className="header">
        <img src={ logo } alt="E-commerce" />
        <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</span>
      </header>

      <p>{String(authenticated)}</p>

      <form onSubmit={ handleSubmit }>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input 
            type="text" 
            name="email" 
            id="email" 
            placeholder="fulano_beltrano@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="**************" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}   
          />
        </div>

        <a href="">Esqueci minha senha</a>

        <button className="button">
          Entrar <img src={ seta } alt="seta" />
        </button>

        <div className="loginFooter">
          <p>Ainda não possui uma conta? </p>
          <a href="#">Criar uma conta</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;