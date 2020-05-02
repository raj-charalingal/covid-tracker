import { withStyles, hexToRgb } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";


export const useStyles =makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
        margin: "5%",
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridGap: `${theme.spacing.unit * 3}px`
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: "rgb(255, 255, 255)",
        background: "linear-gradient(147deg, #000000 0%, #434343 74%)",
        whiteSpace: "nowrap",
        marginBottom: theme.spacing.unit
      } ,
      divider: {
        margin: `${theme.spacing.unit * 4}px 0`
      }
    /* paper_typography1 : {
        color: "rgb(255, 255, 255)"
    },
    paper_typography2 : {
        color: hexToRgb("#FF847C")
    } */,

  }));