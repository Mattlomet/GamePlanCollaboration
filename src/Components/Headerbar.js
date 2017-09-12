import React, { Component } from "react";
import "../StyleSheets/Header.css";
import gameplanLogo from "../gameplanlogo.svg";
import dropDown from "../menu.png";

class Headerbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Header-Top-Bar">
                <div className="Header-logo">
                    <a href="https://app.getgameplan.com/">
                        <img
                            className="logo"
                            src={gameplanLogo}
                            alt="gameplanlogo"
                        />
                    </a>
                </div>
                <div className="Header-Drop">
                    <img
                        className="dropDownMenu"
                        src={dropDown}
                        alt="dropdownmenu"
                    />
                </div>
            </div>
        );
    }
}

export default Headerbar;
