import React, { Component } from "react";
import "./App.css";
import FirstPageMain from "./Components/FirstPage/FirstPageMain";
import SecondPageMain from "./Components/SecondPage/SecondPageMain";

class App extends Component {
    constructor() {
        super();
        this.state = {
            page: "firstpage"
        };
        this.nextPage = this.nextPage.bind(this);
    }
    render() {
        if (this.state.page === "firstpage") {
            return <FirstPageMain nextPage={this.nextPage} />;
        } else if (this.state.page === "secondpage") {
            return <SecondPageMain />;
        }
    }
    nextPage() {
        this.setState({ page: "secondpage" });
    }
}

export default App;
