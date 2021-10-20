import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './Header.css';
import logo from '../../../assets/logo.png';
import useFirebase from './../../Hooks/useFirebase';

const Header = () => {
    const { user, signInPopupUsingGoogle, doTheSignOut } = useFirebase();
    return (
        <header>
            <div className="header-area ">
                <div className="header-top_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-6 ">
                                <div className="social_media_links">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                                <div className="short_contact_list">
                                    <ul className="mb-0">
                                        <li><a href="#"> <FontAwesomeIcon icon={faUser} /> Hello! {user?.displayName?user.displayName:'Guest'}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className="main-header-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-2">
                                <div className="logo">
                                    <NavLink to="/home">
                                        <img src={logo} alt="docmed logo" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation" className="m-0">
                                            <li><NavLink activeClassName="active" to="/home">home</NavLink></li>
                                            <li><NavLink activeClassName="active" to="/departments">Departments</NavLink></li>
                                            <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div className="Appointment">
                                    <div className="book_btn d-none d-lg-block">
                                        {
                                            user.displayName ?
                                                <NavLink className="popup-with-form" onClick={doTheSignOut} to="/">Signout</NavLink>
                                                :
                                                <NavLink className="popup-with-form" onClick={signInPopupUsingGoogle} to="/">Signin</NavLink>
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;