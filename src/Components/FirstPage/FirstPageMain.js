import React, { Component } from "react";
import Note from "./Note";
import SpecialRequests from "./SpecialRequests";
import NextPage from "./NextPage";
import "../../StyleSheets/FirstPageMain.css";
import gameplanLogo from "../../gameplanlogo.svg";
import dropDown from "../../menu.png";

class FirstPageMain extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="First-Page-Main">
                <div className="First-Page-Top-Bar">
                    <div className="First-Page-logo">
                        <a href="https://app.getgameplan.com/">
                            <img
                                className="logo"
                                src={gameplanLogo}
                                alt="gameplanlogo"
                            />
                        </a>
                    </div>
                    <div className="First-Page-Drop">
                        <img
                            className="dropDownMenu"
                            src={dropDown}
                            alt="dropdownmenu"
                        />
                    </div>
                </div>
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
