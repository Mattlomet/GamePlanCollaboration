import React, { Component } from "react";
import "../../StyleSheets/Note.css";

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Note-overlay">
                <div className="Note-header-overlay">
                    <div className="Note-header-text">Leave a Note:</div>
                </div>
                <div className="Note-forum">
                    <form>
                        <input
                            className="Note-input"
                            onChange={this.setNote}
                            placeholder="leave a custom note to the resturaunt"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default Note;
