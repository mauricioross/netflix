import React, { Component, useState, onScroll } from 'react'
import './styles.scss'
import Netflix_logo from '../../Assets/Netflix_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect, Link
} from "react-router-dom";
export default class Header extends Component {



  render() {

    var classStyle = this.props.index === false ? ' header-browse ' : {};
    var scrollStyle = this.props.scrollPosition === false ? ' header-black ' : {};

    return (
      <div className={'header-container ' + classStyle + scrollStyle} >
        {/* <object data="../../Assets/Netflix_logo.svg" type="image/svg+xml"></object> */}
        <img src={Netflix_logo} id="logo" alt="" />
        {this.props.index === false ?
          <div className="header-menu">
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><a href="">Programas</a></li>
              <li><a href="">Peliculas</a></li>
              <li><a href="">Más Recientes</a></li>
              <li><a href="">Mi lista</a></li>
            </ul>
            <ul>
              <li><a href=""><FontAwesomeIcon icon={faSearch} /></a></li>
              <li><a href="">Niños</a></li>
              <li><a href=""><FontAwesomeIcon icon={faGift} /></a></li>
              <li><a href=""><FontAwesomeIcon icon={faBell} /></a></li>
              <li><a href="" className="caret-profile"><img className="header-img-profile" alt="" /><span><FontAwesomeIcon icon={faCaretDown} /></span></a></li>

            </ul>
          </div>
          : null
        }
      </div>
    )
  }
}
