import React, { Component } from 'react'

// Import third-party libs
import styled, { ThemeProvider } from 'styled-components';

// import Theme
import defaultTheme from '../../global_config/Themes/defaultTheme';

// Import Components
import Navigation from '../../components/Navigation/Navigation';

class Contact extends Component {
  render() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <>
                <Navigation />
                <p>Hello contact</p>
            </>
      </ThemeProvider>
    )
  }
}

export default Contact;