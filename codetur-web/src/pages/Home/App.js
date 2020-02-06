import React, { Component } from 'react';

import Axios from 'axios';

import './App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      senha: "",
      erro: ""
    }
  }

  loginEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  loginSenha = (event) => {
    this.setState({ senha: event.target.value })
  }

  efetuarLogin = (event) => {
    event.preventDefault();

    Axios.post("http://localhost:49352/api/LoginControler", {
      email: this.state.email,
      senha: this.state.senha
    })
      .then(data => {
        if (data.status === 200) {
          localStorage.setItem("usuario-codetur", data.data.token);
          
          this.props.history.push("/Pacotes");         
          
        } else {
        }
      })
      .catch(erro => {
        this.setState({ erro: "Usuário ou senha inválidos" });
        console.log(erro);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>OIOIOIS</h1>

        <div className="divForm">

            <form onSubmit={this.efetuarLogin} className="form">
              <h3>Login</h3>
              <br></br>
              <div className="item">
                <input
                  className="input__login"
                  placeholder="Email"
                  type="text"
                  name="username"
                  id="login__email"
                  onChange={this.loginEmail}
                  value={this.state.email}
                />
              </div>

              <br></br>
              <div className="item">
                <input
                  className="input__login"
                  placeholder="Senha"
                  type="password"
                  name="password"
                  id="login__password"
                  onChange={this.loginSenha}
                  value={this.state.senha}
                />
              </div>
              <br></br>
              <div className="item">
                <button className="btn btn__login" id="btn__login" style={{ width:'10em' }}>
                  Login
              </button >
              </div>
              <p
                className="text__login"
                style={{ color: "red", textAlign: "center" }}
              >
                {this.state.erro}
              </p>
            </form>
          </div>
      </div>
    );
  }
}
