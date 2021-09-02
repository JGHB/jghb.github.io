import React, { useState } from "react";
import ProjectCardComponent from "../Components/ProjectCardComponent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import HomePageComponent from "../Components/HomePageComponent";
import PortfolioProjectComponent from "../Components/PortfolioProjectComponent";
import ScrollToTop from "../Components/ScrollToTop";
import WeatherAppProjectComponent from "../Components/WeatherAppProjectComponent";
import MeditativeTrackerProjectComponent from "../Components/MeditativeTrackerProjectComponent";
import CourseManagerProjectComponent from "../Components/CourseManagerProjectComponent";

function PersonalSiteContainer() {

    const [projectState, setProjectState] = useState(null);

    return (
        <div class="w3-black">
            <Router>
                <ScrollToTop />
                <Switch>
                    <Route path="/" exact={true} render={() =>
                        <HomePageComponent />
                    } />
                    <Route path="/portfolio-project" exact={true} render={() =>
                        <PortfolioProjectComponent />
                    } />
                    <Route path="/weather-project" exact={true} render={() =>
                        <WeatherAppProjectComponent />
                    } />
                    <Route path="/meditation-project" exact={true} render={() =>
                        <MeditativeTrackerProjectComponent/>
                    } />
                    <Route path="/course-manager-project" exact={true} render={() =>
                        <CourseManagerProjectComponent />
                    } />
                </Switch>
            </Router>

        </div>

    )
}

export default PersonalSiteContainer;