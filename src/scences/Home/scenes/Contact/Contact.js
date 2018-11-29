import React, { Component } from 'react'

// Import third-party libs
import styled, { ThemeProvider } from 'styled-components';

// import Theme
import defaultTheme from '../../../../global_config/Themes/defaultTheme';

// Import Components

class Contact extends Component {
  render() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <>
                <p>Hello contact</p>
            </>
      </ThemeProvider>
    )
  }
}

export default Contact;