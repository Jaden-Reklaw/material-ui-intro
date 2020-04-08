import React, { Component } from 'react';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'; //Bring in material UI

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class App extends Component {
  handleClick = (event) => {
    console.log('handleClick');
  }
  
  render() {
    const classes = this.props.classes;
    return (
      <div className="App">
        <header>
          <h1>Material UI Intro</h1>
        </header>
        <main>
          <p>Hey! Make sure to use the version 3 docs! (They don't use Hooks!)</p>
          <a href="https://v3.material-ui.com/">Material UI Docs</a>
        </main>
        <section>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={this.handleClick}
          className={classes.button}
        >Secondary</Button>
        </section>
      </div>
    );
  }
}

export default withStyles(styles)(App);
