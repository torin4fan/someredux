import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function(props) {
  return (
      <MuiThemeProvider>
          {props.children}
      </MuiThemeProvider>
    );
}