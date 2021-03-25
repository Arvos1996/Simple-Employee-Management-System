import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div> <a href="https://github.com/Arvos1996" className="navbar-brand">Employee Management App</a></div>
                        <div> <a href="http://localhost:3000/add-employee" className="navbar-text"> Add Employee</a></div>
                        <div> <a href="http://localhost:3000/add-employee" className="navbar-text" style={{marginLeft: "10px"}}> Update Emplyee</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;