import ReactDOM from "react-dom";
import "./style.css";
import SideBar from "./sidebar";
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Marketing 4.0'
    };
    this.handlePageTitle = this.handlePageTitle.bind(this);
  }

  handlePageTitle(_State) {
    alert(_State);
    this.setState({title: 'Segunda vez'})
    alert(this.state.title);
  }

  static getDerivedStateFromProps(props, state) {
    console.log (props);
    console.log (state);
    return {favoritecolor: props.favcol };
  }

  componentDidMount(nextProps) {
     console.log (nextProps);
  }

  componentDidUpdate(nextProps) {
        console.log (nextProps);
  }

  render () {
    return (
      <div id="App">
          <div id="page-wrap">
  
          </div>  

          <SideBar handlePageTitle={this.handlePageTitle} pageWrapId={"page-wrap"} outerContainerId={"App"} />
      </div>
  
  );
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);