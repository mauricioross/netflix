import React, { Component, useState, onScroll, Fragment } from 'react'
import './styles.scss'
import Netflix_logo from '../../Assets/Netflix_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faBell, faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect, Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default class Header extends Component {



  render() {

    var classStyle = this.props.index === false ? ' header-browse ' : {};
    var scrollStyle = this.props.scrollPosition === false ? ' header-black ' : {};

    return (
      <div className={'header-container ' + classStyle + scrollStyle} >
        {/* <object data="../../Assets/Netflix_logo.svg" type="image/svg+xml"></object> */}

        <div>
          <span className="header-menu-bars"><FontAwesomeIcon icon={faBars} /></span>
        </div>

        <img src={Netflix_logo} id="logo" alt="" />
        {this.props.index === false ?
          <Fragment>
            <div className="header-menu">
              <ul >
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
            <div className="header-search">
              <ul>
                <li>
                  <input className="input-search" type="text" placeholder="BUSCAR" />
                </li>
              </ul>
            </div>
          </Fragment>
          : null
        }
      </div>
    )
  }
}
