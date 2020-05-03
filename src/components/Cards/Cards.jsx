import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import { useStyles } from '../CustomizeUI/Customize';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const classes = useStyles();
  if (!confirmed) {
    return "loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={1} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography className={styles.typographySub}>
              Infected
            </Typography>
            <Typography variant="h5" component="h2" className={styles.typographyMain}>
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography className={styles.typographySub}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p" className={styles.typographySub}>
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography className={styles.typographySub}>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2" className={styles.typographyMain}> 
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography className={styles.typographySub}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p" className={styles.typographySub}>
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography className={styles.typographySub}>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2" className={styles.typographyMain}>
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography className={styles.typographySub}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p" className={styles.typographySub}>
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
