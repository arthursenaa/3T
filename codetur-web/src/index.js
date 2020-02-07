import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Paginas
import App from './pages/Home/App';
import Pacotes from './pages//Pacotes/Pacotes';
import Cadastrar from './pages/Cadastrar/Cadastrar';
import NaoEncontrado from "./pages/NaoEncontrado/NaoEncontrado";



import { Route, Link, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import { parseJwt } from './services/auth.js';
import * as serviceWorker from './serviceWorker';

const RotaLogin = ({component: Component}) => (
    <Route 
        render={ props =>
            localStorage.getItem("usuario-codetur") !== null  ?
            (
                <Component {...props}/>
            ) : (
                <Redirect 
                    to={{pathname: "/",state: {from: props.location}}
                }
                />
            )
        }
    />
)

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <RotaLogin path='/Pacotes' component={Pacotes} />
                <RotaLogin path='/Cadastrar' component={Cadastrar} />
                <Route component={NaoEncontrado}/>

            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));










// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
