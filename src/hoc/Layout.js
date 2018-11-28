import React, { Component } from 'react'

// Import third-party libs
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

// Import Components
import Navigation from '../components/Navigation/Navigation';

class Layout extends Component {
  render() {
    return (
        <ThemeProvider theme={this.props.theme}>
            <>
                <Navigation isAuth={this.props.isAuthenticated} />
                {this.props.children}
            </>
        </ThemeProvider>
    )
  }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.services.session.token !== null
    };
};

export default connect( mapStateToProps)( Layout);