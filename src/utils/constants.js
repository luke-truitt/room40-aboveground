import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export const drawerWidth = 240;
export const UseNavStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    background: "#000000",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
export const primaryTheme = createMuiTheme({
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "sans-serif"],
    button: {
      textTransform: "none",
    },
    body: {
      fontSize: "1.5rem",
    },
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
  },
  palette: {
    type: "dark",

    primary: {
      main: "#141414",
      light: "#484848",
      dark: "#000000",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#ff6762",
      light: "#ff9990",
      dark: "#c63338",
      contrastText: "#000000",
    },
  },
});
export const DateDisplay = (props) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        className="date-display"
        label="Last Updated"
        format="MM/dd/yyyy"
        value={props.date}
        disabled
      />
    </MuiPickersUtilsProvider>
  );
};
