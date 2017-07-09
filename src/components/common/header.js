import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

    renderLinks() {
        if (this.props.authenticated) {
            return (
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="nav-item" key={1}>
                            <Link className="nav-link" to="/bank-of-resume">CV bank</Link>
                        </li>
                        <li className="nav-item" key={2}>
                            <Link className="nav-link" to="/upload-resume">Upload Resume</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <Link path="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></Link>                    
                            <ul className="dropdown-menu">
                                <li className="dropdown-header">Your profile</li>
                                <li className="nav-item" key={1}>
                                    <Link className="nav-link" to="/bank-of-resume">CV bank</Link>
                                </li>
                                <li className="nav-item" key={2}>
                                    <Link className="nav-link" to="/upload-resume">Upload Resume</Link>
                                </li>
                                <li role="separator" className="divider"></li>
                                <li>
                                    <Link className="nav-link" to="/signout">Sign Out</Link>
                                </li>                                
                            </ul>
                        </li>    
                    </ul>
                </div>
            );
        } else {
            return (
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item" key={1}>
                            <Link className="nav-link" to="/signin">Sign In</Link>
                        </li>
                        <li className="nav-item" key={2}>
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            );
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">YOLO</Link>
                    </div>
                    {this.renderLinks()}
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Header);