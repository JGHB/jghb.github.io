import React from "react"
import { Link } from "react-router-dom"

function WeatherAppProjectComponent() {

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
                <Link to="/course-manager-project" style={{ textDecoration: 'none' }}>
                    <a class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                        <p>COURSE MANAGER</p>
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
                    <h1 class="w3-center" id="me"> Weather App</h1>
                    <img src="weatherappwireframe.png" alt="boy" class="w3-image" width="992" height="1108" />
                </header>
                <div class="w3-content w3-justify w3-text-grey w3-padding-64">
                    <h2 class="w3-text-light-grey">About Project</h2>
                    <hr style={{ width: "200px" }} class="w3-opacity" />
                    <p class="w3-text-light-grey"> I am currently in the process of building a front end application using React. This application
                        will allow the user to search for a location and the application will display detailed information about the current day's
                        forecast as awell as information about weather for the rest of the week at that location. My goal for this project is to try to
                        improve my user interface design skills. I am expirimenting with <a href="https://github.com/JGHB/jghb.github.io/tree/master" target="blank">ChakraUI</a> to 
                        style the application. I am also using this project
                        as an opportunity to expiriment with fetching data from 3rd-party APIs. I conducted a survey of all available free weather APIs and
                        decided to use OpenWeatherMap's api, which allows for a considerable amount of requests per day and delivers detailed weather information.
                        Check out the repository for this project <a href="https://github.com/JGHB/Weather-App" target="blank">here</a>!
                    </p>
                    <h2 class="w3-text-light-grey">Skills</h2>
                    <hr style={{ width: "200px" }} />
                    <ul class="w3-text-light-grey">
                        <li>
                            HTML/CSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            ChakraUI
                        </li>
                        <li>
                            Accessing 3rd-Party APIs
                        </li>
                    </ul>
                </div>

                <footer class="w3-content w3-padding-64 w3-text-grey w3-xlarge">
                    <p class="w3-medium">James Blanchard | Portfolio</p>
                </footer>
            </div>

        </div>
    )
}

export default WeatherAppProjectComponent