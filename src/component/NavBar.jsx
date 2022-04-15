import React, {Component} from "react";
import { Link } from "react-router-dom";
import {ButtonContainer,NavWrapper} from "./Button";

import logo from "../logo.svg"

export default class NavBar extends Component{
    render(){
        return(<React.Fragment>
                <NavWrapper className="navbar navbar-expand-lg navbar-dark px-sm-5">
                    <div className="container-fluid">
                        <Link to="/" >
                            <img src={logo} alt="logo" className="navbar-brand" /> 
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" > Products</Link>
                                </li>
                            </ul>
                            <Link to="/cart" className="ml-auto" >
                                <ButtonContainer> 
                                    <span className="mr-4">
                                         <i className="fa fa-cart-plus"></i>
                                    </span>
                                    my cart
                                </ButtonContainer>
                            </Link>
                        </div>
                    </div>
                </NavWrapper>
            </React.Fragment>)
    }
}

