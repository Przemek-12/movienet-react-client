import './App.css';
import MainPage from './mainPage/mainPage.js';
import VideoPlayer from './videoPlayer/videoPlayer.js';
import {LoginPage, RegisterPage} from './logRegPage/logRegPage.js';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Nav from "./navigation/navigation.js";
import { Component } from 'react';

const App = () => {
    return (
        <Router >
            <div className='app'>
                <Switch >
                    {/* The exact param disables the partial matching for a route and makes 
                sure that it only returns the route if the path is an EXACT match 
                to the current url.  */}
                    <Route exact path="/">
                        <Redirect to="/main" />
                    </Route>
                    <CustomRoute exact path="/main" isPrivate={false} hasNav={true} component={() => < MainPage />} />
                    <CustomRoute exact path="/login" isPrivate={false} hasNav={true} component={() => < LoginPage />} />
                    <CustomRoute exact path="/register" isPrivate={false} hasNav={true} component={() => < RegisterPage />} />
                    <CustomRoute exact path="/player" isPrivate={true} hasNav={false} component={() => < VideoPlayer />} />
                </Switch>
            </div>
        </Router>
    );
}

class CustomRoute extends Route {
    render() {
        const Component = this.props.component;

        if (this.props.isPrivate === true) {
            if (!this.isAuthenticated()) {
                return <Redirect to="/main" />;
            }
        }

        if (this.props.hasNav === true) {
            return (
                <>
                    <Nav activeTo={this.props.path} />
                    <Component />
                </>
            )
        }

        return <Component />;
    }

    isAuthenticated() {
        if (localStorage.getItem('token') !== null) {
            return true;
        }
        return false;
    }
}

export default App;