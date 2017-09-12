import React, { Component } from "react";
import ResturauntResult from "./ResturauntResult";
import "../../StyleSheets/SecondPageMain.css";
import Headerbar from "../Headerbar";
import RightArrow from "../../RightArrow.png";

class SecondPageMain extends Component {
    render() {
        return (
            <div className="Second-Page-Main">
                <Headerbar />
                <div className="RR-main">
                    <ResturauntResult />
                </div>
                <img src={RightArrow} className="leftArrow" />
                <div className="voteButton">VOTE</div>
                <img src={RightArrow} className="rightArrow" />
            </div>
        );
    }
}

export default SecondPageMain;
