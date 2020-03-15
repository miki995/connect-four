import React, { Component } from "react";

import './Field.css'

export default class Field extends Component {

    render() {
        return (
            <div className='FieldClass'>
                <div className={this.props.color}/>
            </div>
        )
    }
}
