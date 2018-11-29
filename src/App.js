import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// Import Redux packages
import { connect } from 'react-redux';
import * as actions from './services/index';

// Import Global Styles
import GloalStyles from './global_config/GlobalStyles/globalStyles';
import defaultTheme from './global_config/Themes/defaultTheme';
import landingPageTheme from './global_config/Themes/landingPageTheme';

// Import HOC
import Layout from './hoc/Layout';

// Import Scenes
import Home from './scences/Home/Home';
import LandingPage from './scences/LandingPage/LandingPage';
import Authentication from './scences/Authentication/Authentication';
import Contact from './scences/Contact/Contact';


class App extends Component {

    componentDidMount() {
        this.props.checkAuthentication();
    }

    render() {
        
        let routes = (
            <Layout theme={defaultTheme}>
                <Switch>
                    <Route path='/login'  component={Authentication} />
                    <Route path='/contact-page' component={Contact} />
                    <Route path='/' exact component={Home} />
                    <Redirect to='/' />
                </Switch>
            </Layout>
        );

        if ( this.props.isAuthenticated ) {
            routes = (
                <Layout theme={landingPageTheme}>
                    <Switch>
                        <Route path='/landing-page' exact component={LandingPage} />
                        {/* Somethings off here since i need to add the auth component - TODO */}
                        <Route path='/login'  component={Authentication} />
                        <Redirect to='/landing-page' />
                    </Switch>
                </Layout>
            )
        }
        
        return(
            <div>
                <GloalStyles />
                    {routes}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.services.session.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        checkAuthentication: () => dispatch(actions.authCheckState())
    };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
