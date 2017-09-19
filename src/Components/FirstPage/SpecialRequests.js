import React, { Component } from "react";
import "../../StyleSheets/SpecialRequests.css";
import axios from "axios";

class SpecialRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            chosenTag: []
        };
        this.pickedTag = this.pickedTag.bind(this);
    }
    render() {
        var tagArray = this.state.tags;
        var tagDiv = tagArray.map(
            function(tag, index) {
                return (
                    <div
                        className="SR-choice"
                        id={tag.id}
                        key={index}
                        name={tag.attributes.name}
                        filter={tag.attributes.filter}
                        to={tag.attributes.link}
                        onClick={this.pickedTag}
                    >
                        {tag.attributes.name}
                    </div>
                );
            }.bind(this)
        );
        return (
            <div className="SR-overlay">
                <div className="SR-header-overlay">
                    <div className="SR-header-text">Special Requests</div>
                </div>
                <div className="SR-middle">
                    {tagDiv}
                </div>
            </div>
        );
    }
    pickedTag(event) {
        if (event.target.className === "SR-choice") {
            this.setState({
                chosenTag: this.state.chosenTag.concat(event.target.id)
            });
            event.target.className = "chosen-Tag";
        } else if (event.target.className === "chosen-Tag") {
            event.target.className = "SR-choice";

            var a = this.state.chosenTag;
            var indexOfTag = a.indexOf(event.target.id);
            a.splice(indexOfTag, 1);
            var b = a;

            console.log(a);
            console.log(b);
            console.log(a.splice(indexOfTag, 1));
            this.setState({
                chosenTag: b
            });
        }
    }
    componentDidMount() {
        axios
            .get(
                "https://api.getgameplan.com/alpha/category?fields%5Bcategory%5D=name%2Cpriority&fields%5Brank%5D=name%2Cmin%2Cmax%2Cicon%2Cquartiles%2Ctooltips&fields%5Bgroup%5D=name%2Cpriority&fields%5Btag%5D=name%2Cgroup%2Corder%2Cfeatured%2Cfilter%2Cdata&filter%5Btype%5D=experience&include=ranks%2Cgroups%2Cgroups.experience_tags",
                {}
            )
            .then(
                function(response) {
                    console.log(response);
                    var a = response.data.included;
                    var b = [];
                    a.forEach(function(element) {
                        if (element.type === "tag") {
                            b.push(element);
                        }
                    });
                    this.setState({ tags: b });
                }.bind(this)
            )
            .catch(function(error) {
                console.log(error);
            });
    }
}

export default SpecialRequest;
