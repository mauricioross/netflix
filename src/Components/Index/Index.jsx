import React, { Component, Fragment } from 'react'
import "./Index.scss";
import Header from '../Header/index';
import Body from '../Body'
export default class Index extends Component {
    render() {
        return (
            <Fragment>
                <Header indes={true}></Header>
                <Body></Body>
            </Fragment>
        )
    }
}
