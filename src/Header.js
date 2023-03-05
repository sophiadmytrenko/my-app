import React from "react";
import logo from './pics/logo.png';
import './App.css';
//import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container-fluid">
                <ul class="navbar-nav">
                    <a class="navbar-brand" href="#"><img class="photo" src={logo} ></img>React Site</a>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <form class="navbar-text">
                        <input type="text" placeholder="Search"></input>
                        <button>Search</button>
                    </form>
                </ul>
            </div>
        </nav>
    );
}

export default App;


