import React from "react"
import { Link } from "react-router-dom"

function PortfolioProjectComponent() {

    return (
        <div class="w3-black">
            <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
                <img src="logo.svg" style={{ width: "100%" }} class="corner-image" />
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <a class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                        <p>HOME</p>
                    </a>
                </Link>
                <Link to="/weather-project" style={{ textDecoration: 'none' }}>
                    <a class="w3-bar-item w3-button w3-padding-large w3-black sidebar-item">
                        <p>WEATHER APP</p>
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
                    <h1 class="w3-center" id="me"> Portfolio Website</h1>
                    <img src="portrait.jpg" alt="boy" class="w3-image" width="496" height="556" />
                </header>
                <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
                    <h2 class="w3-text-light-grey">About Project</h2>
                    <hr style={{ width: "200px" }} class="w3-opacity" />
                    <p class="w3-text-light-grey"> I built this portfolio with the purpose of showcasing projects I 
                    have worked on and providing information about myself. It is a static site build with React. I 
                    used the <a href="https://www.npmjs.com/package/react-scroll" target="blank">react-scroll</a> library to implement smooth 
                    scrolling, <a href="https://www.npmjs.com/package/react-fade-in" target="blank">react-fade-in</a> to implement a fade in animation, and <a href="https://reactrouter.com/" target="blank">react-router</a> to link between the homepage 
                    and the pages displaying information about individual projects. The site was styled with HTML and CSS. 
                    I deployed to GitHub Pages using the <a href="https://www.npmjs.com/package/gh-pages" target="blank"> gh-pages</a> library. Check out the repository for this project <a href="https://github.com/JGHB/jghb.github.io/tree/master" target="blank">here</a>!
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
                            Github Pages
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

export default PortfolioProjectComponent