import React, { Component,Fragment } from 'react'
import './styles.scss';
export default class index extends Component {
  render() {
    return (
      <Fragment>
          <div className="profile-container">
            <div className="profile-icon">
                <img src={this.props.image} alt=""/>
            </div>
            <p className="profile-name">
              {this.props.name}
            </p>
          </div>
      </Fragment>
    )
  }
}

