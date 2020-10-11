import React, {Component} from "react";

export default class Conversas extends Component {
    constructor(props) {
        super(props);
        this.state = {
			title: this.props.title
        };
     }

    render() {
    return (
        <div>
        <nav text-align="center" className="navbar">
            <ul className="navbar-list">
                <h1>Conversas</h1>
            </ul>
        </nav>
        <iframe title="DicordChat" src="https://titanembeds.com/embed/764760153903071242" height="600" width="100%" frameborder="0"></iframe>

        </div>

    )
    }
}