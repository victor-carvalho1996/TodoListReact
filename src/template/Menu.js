import React from "react";

function Menu() {
    return (
        <nav className="navbar navbar-inverse bg-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <i className="fa fa-calendar-check-o"></i>
                    </a>
                </div>

                <div id='navebar' className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="#/todos">Tasks</a></li>
                        <li><a href="#/about">About</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu