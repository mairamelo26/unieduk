import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink 
} from "react-router-dom";
import Desempenho from './desempenho';
import Conversas from './conversas';
import Home from './home';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EqualizerIcon from '@material-ui/icons/Equalizer';

export default class props extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			title: ''
    };
    
    this.handleHomeTitle = this.handleHomeTitle.bind(this);
    this.handleNavigationTitle = this.handleNavigationTitle.bind(this);

  }

  handleHomeTitle() {
		this.props.handlePageTitle(this.state);
  }

  handleNavigationTitle(_State) {
    var handleToUpdate  =   this.props.handlePageTitle;
    handleToUpdate(_State);
  }

  render() {
    return (
      <Router>
        <Menu {...props}>
        <NavLink to="./home">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon  />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>   
          </NavLink>
          <NavLink to="./conversas">
          <ListItem button>
            <ListItemIcon>
              <ChatIcon  />
            </ListItemIcon>
            <ListItemText primary="Conversas" />
          </ListItem>   
          </NavLink>
          <NavLink to="./desempenho">
          <ListItem button>
            <ListItemIcon>
              <EqualizerIcon  />
            </ListItemIcon>
            <ListItemText primary="Desempenho" />
          </ListItem>   
          </NavLink>
        </Menu>
        <div>
          <Switch>
            <Route path="/desempenho">
              <Desempenho />
            </Route>
            <Route path="/conversas">
              <Conversas />
            </Route>
            <Route path="/">
              <Home handleHomeTitle={this.handleNavigationTitle} title={'Home'}/>
            </Route>
          </Switch>
        </div>
      </Router>
  
    );
  }
}




