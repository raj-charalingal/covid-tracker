import React from "react";
import { Card, CardContent, Typography, Grid, Paper } from "@material-ui/core";
import CountUp from "react-countup";
import { useStyles } from '../CustomizeUI/Customize';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const classes = useStyles();
  if (!confirmed) {
    return "loading...";
  }
  return (
    <div>
      <Grid container spacing={3} justify="center" >
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Typography className={classes.paper_typography1} gutterBottom>Infected</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography className={classes.paper_typography2} >{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Active cases of COVID-19</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Typography className={classes.paper_typography1} gutterBottom>Recovered</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography className={classes.paper_typography2} >{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Typography className={classes.paper_typography1} gutterBottom>Deaths</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography className={classes.paper_typography2} >{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Number of Deaths occured</Typography>
          </Paper>
        </Grid>
      </Grid>
      
    </div>
  );
};

export default Cards;
