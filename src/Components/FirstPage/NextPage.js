import React, { Component } from "react";
import "../../StyleSheets/NextPage.css";
import RightArrow from "../../RightArrow.png";

class NextPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="NextPage-overlay">
                <img
                    src={RightArrow}
                    className="NextPage-button"
                    onClick={this.props.nextPage}
                />
            </div>
        );
    }
}

export default NextPage;
