import React from "react"
import { Link } from "react-router-dom"

function CourseManagerProjectComponent() {

    return (
        <div class="w3-black">
            <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
                <img src="logo.svg" style={{ width: "100%" }} class="corner-image" />
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <a class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                        <p>HOME</p>
                    </a>
                </Link>
                <Link to="/portfolio-project" style={{ textDecoration: 'none' }}>
                    <a class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                        <p>PORTFOLIO WEBSITE</p>
                    </a>
                </Link>
                <Link to="/weather-project" style={{ textDecoration: 'none' }}>
                    <a class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                        <p>WEATHER APP</p>
                    </a>
                </Link>
                <Link to="/meditation-project" style={{ textDecoration: 'none' }}>
                    <a class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                        <p>MEDITATIVE TRACKER</p>
                    </a>
                </Link>
            </nav>
            <div class="w3-top w3-center" id="myNavbar">
                <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                    <Link to="/" href="#">
                        <a class="w3-bar-item w3-button" style={{ width: "25% !important" }}>HOME</a>
                    </Link>
                </div>
            </div>
            <div className="w3-padding-large" id="main">
                <header class="w3-container w3-padding-32 w3-center w3-black" id="home">
                    <h1 class="w3-center" id="me"> Course Management</h1>
                    <img src="portrait.jpg" alt="boy" class="w3-image" width="992" height="1108" />
                </header>
                <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
                    <h2 class="w3-text-light-grey">About Me</h2>
                    <hr style={{ width: "200px" }} class="w3-opacity" />
                    <p class="w3-text-light-grey"> Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <footer class="w3-content w3-padding-64 w3-text-grey w3-xlarge">
                    <p class="w3-medium">James Blanchard | Portfolio</p>
                </footer>
            </div>

        </div>
    )
}

export default CourseManagerProjectComponent