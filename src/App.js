import React, { Component } from "react";
import "./App.css";
import FirstPageMain from "./Components/FirstPage/FirstPageMain";
import SecondPageMain from "./Components/SecondPage/SecondPageMain";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "firstpage"
        };
        this.nextPage = this.nextPage.bind(this);
    }
    render() {
        return (
            <div className="App">
                <div className="First-Page-Main">
                    <FirstPageMain nextPage={this.nextPage} />
                </div>
                <div className="Second-Page-Main">
                    <SecondPageMain />
                </div>
            </div>
        );
    }
    nextPage() {
        this.setState({ page: "secondpage" });
    }
}

export default App;
