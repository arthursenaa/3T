import React, { Component } from 'react';
import { Accordion, Card, Button, Table, ButtonToolbar, Jumbotron, Nav } from 'react-bootstrap';

import Axios from 'axios';
import './Cadastrar.css';

export default class CadastrarFilme extends Component {


    constructor() {
        super();
        this.state = {
            erro: "",
            titulo: "",
            imagem: "",
            descricao: "",
            pais: "",
            dataInicio: "",
            dataFim: "",
            Ativo: "",
            sucesso: "",
            AtivoInativo: [
                { ativo: "Ativo", bool: true },
                { ativo: "Inativo", bool: false },
            ],
        }
    }
    cadastroTitulo = (event) => {
        this.setState({ titulo: event.target.value })
    }

    cadastrarImagem = (event) => {
        this.setState({ imagem: event.target.value })
    }
    cadastroDescricao = (event) => {
        this.setState({ descricao: event.target.value })
    }

    cadastroPais = (event) => {
        this.setState({ pais: event.target.value })
    }

    cadastroDataInicio = (event) => {
        this.setState({ dataInicio: event.target.value })
    }
    cadastroDataFim = (event) => {
        this.setState({ dataFim: event.target.value })
    }

    cadastroAtivo = (event) => {
        this.setState({ Ativo: event.target.value })
    }

    cadastrarPacotes = (event) => {
        event.preventDefault();

        Axios.post("http://localhost:49352/api/pacote", {
            titulo: this.state.titulo,//Ok
            imagem: this.state.imagem,//Ok
            descricao: this.state.descricao,//Ok
            pais: this.state.pais,//Ok
            dataInicio: this.state.dataInicio,//ok
            dataFim: this.state.dataFim,
            ativo: this.state.Ativo,//Ok sem teste

        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-codetur')
            },

        })
            .then(response => {
                if (response.status === 200) {
                    this.setState({ sucesso: "Pacote Cadastrado" })
                }
            })
            .catch(error => console.log(error))

    }

    render() {
        return (
            <div className="divCadastro">

                <Nav variant="pills" defaultActiveKey="/home" style={{ backgroundColor: "black" }}>
                    <Nav.Item>
                        <Nav.Link href="/Pacotes">Lista de Pacotes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Cadastrar">Cadastrar Oferta</Nav.Link>
                    </Nav.Item>
                </Nav>

                <div className="divForm" style={{ width: "70%", marginLeft: "15%" }}>


                    <form method="POST" onSubmit={this.cadastrarPacotes}>
                        <div >
                            <h1 style={{textAlign:'center'}}>Cadastrar Pacotes</h1>
                        </div>
                        <br></br>
                        <div className="item">
                            <input
                                className="input__login"
                                placeholder="Titulo"
                                type="text"
                                name="name"
                                id="login__nome"
                                onChange={this.cadastroTitulo}
                                value={this.state.titulo}
                                style={{ width: "90%", marginLeft: "5%" }}
                            />
                        </div>
                        <br></br>
                        <div className="item">
                            <textarea
                                placeholder="Descricao"
                                type="text"
                                maxLength="455"
                                onChange={this.cadastroDescricao}
                                value={this.state.descricao}
                                style={{ width: "90%", marginLeft: "5%" }} />
                        </div>
                        <br></br>
                        <div className="item">
                            <input
                                className="input__login"
                                type="Text"
                                placeholder="Digite o Link da Imagem"
                                id="login__password"
                                onChange={this.cadastrarImagem}
                                value={this.state.imagem}
                                style={{ width: "90%", marginLeft: "5%" }}
                            />
                        </div>
                        <br></br>
                        <div className="item">
                            <input
                                className="input__login"
                                placeholder=" Pais"
                                type="Text"
                                name="password"
                                id="login__password"
                                onChange={this.cadastroPais}
                                value={this.state.pais}
                                style={{ width: "90%", marginLeft: "5%" }}
                            />
                        </div>
                        <br></br>
                        <div className="item">
                            <input
                                className="input__login"
                                placeholder="Data Inicial"
                                type="Date"
                                name="data"
                                id="login__password"
                                onChange={this.cadastroDataInicio}
                                value={this.state.dataInicio}
                                style={{ width: "90%", marginLeft: "5%" }}
                            />
                        </div>
                        <br></br>
                        <div className="item">
                            <input
                                className="input__login"
                                placeholder="Data Final"
                                type="Date"
                                name="data"
                                id="login__password"
                                onChange={this.cadastroDataFim}
                                value={this.state.dataFim}
                                style={{ width: "90%", marginLeft: "5%" }}
                            />
                        </div>
                        <br></br>

                        <div className="item" style={{ marginLeft: "5%" }}>
                            <select onChange={this.cadastroAtivo} style={{ width: '95%', fontSize: "0.8em" }} >
                                <option disabled selected >Ativo/Inativo</option>
                                {this.state.AtivoInativo.map(element => {
                                    return (
                                        <option value={element.bool} key={element.bool}>{element.ativo}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <br></br>

                        <div className="item">

                            <button className="btn btn__login" id="btn__login" style={{ width: "90%", marginLeft: "5%", backgroundColor:"black" }}>
                                Enviar
                        </button >
                        </div>
                        <br></br>
                        <p
                            className="text__login"
                            style={{ color: "green", textAlign: "center", fontSize: "0.8em" }}
                        >
                            {this.state.sucesso}
                        </p>
                        <p className="text__login"
                            style={{ color: "red", textAlign: "center", fontSize: "0.8em" }}>
                            {this.state.erro}
                        </p>
                    </form>

                </div>
            </div>
        );
    }
}