import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink 
  } from "react-router-dom";
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem'
import IntroMarketing from './materias/intromarketing';
import RelacaoCliente from './materias/relacaocliente';
import Administracao from './materias/administracao';

export default class Home extends Component {
    render() {
        return (
        <div align="center">
            <nav text-align="center" className="navbar">
                <ul className="navbar-list">
                    <h1>Marketing 4.0</h1>
                </ul>
            </nav>
            <Router>
                <NavLink to="./intromarketing" className="inactive" activeClassName="active" >
                    <ListItem button>
                        <ListItemText primary="Introução ao Marketing"/>
                    </ListItem>   
                </NavLink>
                <NavLink to="./relacaocliente" className="inactive" activeClassName="active" >
                    <ListItem button>
                        <ListItemText primary="Relação com o cliente" />
                    </ListItem>   
                </NavLink>
                <NavLink to="./administracao" className="inactive" activeClassName="active" >
                    <ListItem button>
                        <ListItemText primary="Administração" />
                    </ListItem>   
                </NavLink>
                <div>
                <Switch>
                    <Route path="/intromarketing">
                        <IntroMarketing />
                    </Route>
                    <Route path="/relacaocliente">
                        <RelacaoCliente />
                    </Route>
                    <Route path="/administracao">
                        <Administracao/>
                    </Route>
                </Switch>
                </div>
            </Router>
        </div>
                
        )
    }
}