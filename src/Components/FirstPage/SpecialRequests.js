import React, { Component } from "react";
import "../../StyleSheets/SpecialRequests.css";

class SpecialRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="SR-overlay">
                <div className="SR-header-overlay">
                    <div className="SR-header-text">Special Requests</div>
                </div>
                <div className="SR-middle">
                    <div className="row">
                        <div className="SR-choice">gluten free</div>
                        <div className="SR-choice">vegan</div>
                        <div className="SR-choice">vegetarian</div>
                        <div className="SR-choice">low-carb</div>
                        <div className="SR-choice">no-carrots</div>
                        <div className="SR-choice">no-tomatoes</div>
                    </div>
                    <div className="row">
                        <div className="SR-choice">gluten free</div>
                        <div className="SR-choice">vegan</div>
                        <div className="SR-choice">vegetarian</div>
                        <div className="SR-choice">low-carb</div>
                        <div className="SR-choice">no-carrots</div>
                        <div className="SR-choice">no-tomatoes</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpecialRequest;
