import React, { Component } from 'react';
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import AboutPage from "../AboutPage/AboutPage";
import LeftNavigation from "../../components/LeftNavigation/LeftNavigation";
import MainPage from "../MainPage/MainPage";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import './App.css';
import './_animation.css';



class App extends Component {
    render() {
        return (
            <div>
                <Router basename={process.env.PUBLIC_URL}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={MainPage}/>
                            <Route path="/portfolio" component={PortfolioPage}/>
                            <Route path="/about" component={AboutPage}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;