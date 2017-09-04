import React, { Component } from "react";
import Note from "./Note";
import SpecialRequests from "./SpecialRequests";
import NextPage from "./NextPage";
import "../../StyleSheets/FirstPageMain.css";

class FirstPageMain extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="Special-Requests-Comp">
                    <SpecialRequests />
                </div>
                <div className="Note-Comp">
                    <Note />
                </div>
                <div className="Next-Page-Comp">
                    <NextPage nextPage={this.props.nextPage} />
                </div>
            </div>
        );
    }
}

export default FirstPageMain;
