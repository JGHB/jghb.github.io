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
            </nav>
            <div class="w3-top w3-center" id="myNavbar">
                <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                    <Link to="/" href="#">
                        <a class="w3-bar-item w3-button" style={{ width: "25% !important" }}>HOME</a>
                    </Link>
                </div>
            </div>
            <div className="w3-padding-large" id="main">
                <header class="w3-container w3-padding-32 w3-center w3-black">
                    <h1 class="w3-center" id="me"> Course Manager</h1>
                    <img style={{ marginBottom: "10px" }} src="coursemanagerproject1.png" alt="boy" class="w3-image" width="992" height="1108" />
                    <img src="coursemanagerproject2.png" alt="boy" class="w3-image" width="992" height="1108" />
                </header>
                <div class="w3-content w3-justify w3-text-grey w3-padding-64">
                    <h2 class="w3-text-light-grey">About Project</h2>
                    <hr style={{ width: "200px" }} class="w3-opacity" />
                    <p class="w3-text-light-grey"> I built a course manager application that
                        mimics <a href="https://www.blackboard.com/teaching-learning/learning-management">Blackboard</a> or <a href="https://www.instructure.com/">Canvas</a>. These
                        are learning management systems which allow educators to provide students with resources such as
                        course announcements, study material, assignments, and more. My application implements basic functionality for users to create
                        courses. These courses can be customized to contain modules, lessons, topics, and widgets for different levels of granularity in
                        learning experiences. The front end of this project was built as a React app, using <a href="https://redux.js.org/">Redux</a> for state management. I styled 
                        using <a href="https://getbootstrap.com/" target="blank">Bootstrap</a> and custom CSS. The back end was built in Node.js using the <a href="https://expressjs.com/">Express.js framework</a> This back end leverages <a href="https://mongoosejs.com/">Mongoose</a> to
                        connect to a MongoDB database hosted in the cloud via <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a>.
                        Check out the repository for this project <a href="https://github.com/JGHB/jghb.github.io/tree/master">here</a>!
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
                            Redux
                        </li>
                        <li>
                            REST API Design
                        </li>
                        <li>
                            Node.js
                        </li>
                        <li>
                            Express.js
                        </li>
                        <li>
                            Mongoose
                        </li>
                        <li>
                            MongoDB
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

export default CourseManagerProjectComponent