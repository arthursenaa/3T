import React, { Component } from 'react';

import { Accordion, Card, Button, Table, ButtonToolbar, Jumbotron , Nav } from 'react-bootstrap';
import { parseJwt } from '../../services/auth';
import './Pacote.css';


export default class Pacotes extends Component {

    constructor() {
        super();
        this.state = {
            pacotes: [],
        }
    }

    listarPacotes = () => {
        fetch('http://localhost:49352/api/pacote')
            .then(response => response.json())
            .then(data => this.setState({ pacotes: data }))
            .catch(error => console.log(error))
    }



    componentDidMount() {
        this.listarPacotes();
    }

    render() {
        return (
            <div className="Pacote">
                <Nav variant="pills" defaultActiveKey="/home" style={{backgroundColor:"black"}}>
                    <Nav.Item>
                        <Nav.Link href="/Pacotes">Lista de Pacotes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Cadastrar">Cadastrar Oferta</Nav.Link>
                    </Nav.Item>
                </Nav>
                <br></br>
                <div className="Detalhes" style={{ marginLeft: "8%", marginRight: "8%" }}>
                    <br></br>
                    {this.state.pacotes.map(element => {
                        return (
                            <Jumbotron>
                                <div style={{ display: 'flex' }}>

                                    <div>
                                        <h1>{element.titulo}</h1>
                                        <p>{element.descricao} <br></br> - {element.pais}</p>
                                        <p>
                                            <Button variant="primary">Learn more</Button>
                                        </p>
                                    </div>
                                    <div style={{ marginLeft: '5%' }}>
                                        <img src={element.imagem} alt="img pacote" style={{ position: 'absolute', width: '40%', height: '25%' }}></img>
                                    </div>
                                </div>
                            </Jumbotron>
                        );
                    })}

                </div>
            </div>
        );
    }
}
