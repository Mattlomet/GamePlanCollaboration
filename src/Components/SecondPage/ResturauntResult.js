import React, { Component } from "react";
import "../../StyleSheets/ResturauntResult.css";
import testRest from "../../TESTREST.png";

class ResturauntResult extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="RR-header">Vote on Results</div>
                <div className="RR-choice">
                    <img
                        className="R-picture"
                        src={testRest}
                        alt="testResturaunt"
                    />
                    <div className="R-title">
                        CUBA LIBRE RESTAURANT & RUM BAR
                    </div>
                    <div className="R-descrip">
                        Walk through the doors of Cuba Libre and you will be
                        transported back to the shores of the island paradise
                        with it's décor, ambiance, and incredibly flavorable
                        cuban cuisine. Cuba Libre offers everything you would
                        want in an unforgettable meal.
                    </div>
                    <div>
                        <div className="R-price">$42/guest</div>
                        <div className="R-location">1.1 mi</div>
                        <div className="R-theme">Casual-Cuban-Alcohol</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResturauntResult;
