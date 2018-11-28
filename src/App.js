import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// Import Redux packages
import { connect } from 'react-redux';

// Import Global Styles
import GloalStyles from './global_config/GlobalStyles/globalStyles';

// Import Scenes
import Home from './scences/Home/Home';
import LandingPage from './scences/LandingPage/LandingPage';
import Authentication from './scences/Authentication/Authentication';
import Contact from './scences/Contact/Contact';


class App extends Component {
    render() {
        let routes = (
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login/'  component={Authentication} />
                <Route path='/contact-page/'  component={Contact} />
                <Redirect to="/" />
            </Switch>
        );

        if ( this.props.isAuthenticated ) {
            routes = (
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/login/'  component={Authentication} />
                    <Route path='/contact-page/'  component={Contact} />
                    <Route path='/landing-page/' component={LandingPage} />
                </Switch>
            )
        }
        return(
            <div>
                <GloalStyles />
                    <>
                        {routes}
                    </>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.services.session.token !== null
    };
};

export default withRouter(connect(mapStateToProps)(App));
