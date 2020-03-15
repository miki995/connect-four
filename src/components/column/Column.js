import React, { Component } from "react";
import Field from "../field/Field";

export default class Column extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
    }

    render() {
        return (
            <div onClick={() => this.props.handleClick()}>
                {[...Array(this.props.fields.length)].map((i, index) => <Field key={index} color={this.props.fields[index]}/>)}
            </div>
        )
    }
}
