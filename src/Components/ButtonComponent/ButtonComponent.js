import React, { Component, Fragment } from "react";

export default class ButtonComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onClick, name } = this.props;
        return <Fragment>
            <div >
                <button id={name} onClick={onClick}>{name}</button>
            </div>
        </Fragment>
    }
}