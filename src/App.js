import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import ArrowsIcon from '@material-ui/icons/CompareArrows';


import './App.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class App extends Component {

  handleClick = () => {
    alert('Thanks!')
  }

  render() {
    const classes = this.props.classes;
    return (
      <>
        <header>
          <h1>Material UI Intro</h1>
        </header>
        <main>
          <p>
            Hey! Make sure to use the version 3 docs! (They don't use hooks!)
            <a href="https://v3.material-ui.com/">https://v3.material-ui.com/</a>
          </p>
          <p>
            Install with `npm install @material-ui/core`. This will get the 
            latest version of Material UI. (Watch out for potential differences, but 
            so far I haven't had any trouble with this.)
          </p>
          <section>
            <h2>Demos</h2>
            <Button variant="contained" color="secondary" 
                    onClick={this.handleClick} className={classes.button}>
              <DeleteIcon />Click Me!
            </Button>
            <Button variant="contained" className={classes.button}>
              <ArrowsIcon />Cancel
            </Button>
          </section>
        </main>
      </>
    );
  }
}

export default withStyles(styles)(App);