import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
});

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed){
        return 'loading...'
    }
     return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center"> 
              <Grid item component={Card}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>Infected</Typography>
                      <Typography variant="h5">
                          <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                      </Typography>
                      <Typography color="textSecondary">REAL DATE</Typography>
                      <Typography variant="body2">Active cases of COVID-19</Typography>
                  </CardContent>
              </Grid>
              <Grid item component={Card}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                      <Typography variant="h5">{recovered.value}</Typography>
                      <Typography color="textSecondary">REAL DATE</Typography>
                      <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
                  </CardContent>
              </Grid>
              <Grid item component={Card}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                      <Typography variant="h5">{deaths.value}</Typography>
                      <Typography color="textSecondary">REAL DATE</Typography>
                      <Typography variant="body2">Number of Deaths occured</Typography>
                  </CardContent>
              </Grid>
            </Grid>   
        </div>
    )
}

export default Cards;