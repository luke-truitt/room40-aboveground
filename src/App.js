import React, { useState } from "react";
import clsx from "clsx";
import "./App.css";
import "./utils/global.css";
import { useTheme } from "@material-ui/core/styles";
import logo from "./resources/images/logo-light.svg";
import Portfolio from "./components/portfolio/Portfolio";
import PortfolioCompany from "./components/portfoliocompany/PortfolioCompany";
import Deals from "./components/deals/Deals";
import Home from "./components/home/Home";
import DealCompany from "./components/dealcompany/DealCompany";

import {
  Container,
  AppBar,
  Toolbar,
  List,
  IconButton,
  Divider,
  ListItem,
  ListItemText,
  Drawer,
  Typography,
  CssBaseline,
  ListItemIcon,
  ThemeProvider,
  Icon,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/Event";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PieChartIcon from "@material-ui/icons/PieChart";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import InboxIcon from "@material-ui/icons/Inbox";
import MailIcon from "@material-ui/icons/Mail";
import { UseNavStyles, primaryTheme } from "./utils/constants";
import { homeData, portfolioCompanyData, portfolioData } from "./utils/Data";
import WeeklyMeeting from "./components/weeklymeeting/WeeklyMeeting";
import * as api from "./utils/api";

function App() {
  const drawerWidth = 240;
  const classes = UseNavStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("Home");
  const [data, setData] = useState({
    home: homeData,
    weeklyMeeting: null,
    portfolio: portfolioData,
    portfolioCompany: null,
    deals: null,
  });
  api.GetActivities();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const openPortfolioCompany = (id) => {
    const newData = data;
    //TODO switch to be dynamic
    newData.portfolioCompany = portfolioCompanyData;
    setData(newData);
    console.log(data.portfolioCompany);
    setTab("PortfolioCompany");
  };

  const MainListItems = [
    { key: "Home", icon: <HomeIcon /> },
    { key: "Weekly Meeting", icon: <EventIcon /> },
    { key: "Portfolio", icon: <PieChartIcon /> },
    { key: "Deals", icon: <WorkOutlineIcon /> },
  ];
  const Navigation = {
    Home: <Home {...data.home} openPortfolioCompany={openPortfolioCompany} />,
    "Weekly Meeting": <WeeklyMeeting />,
    Portfolio: (
      <Portfolio
        {...data.portfolio}
        openPortfolioCompany={openPortfolioCompany}
      />
    ),
    Deals: <Deals />,
    PortfolioCompany: <PortfolioCompany {...data.portfolioCompany} />,
  };
  console.log("hi again", data);

  return (
    <ThemeProvider theme={primaryTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} className="tool-bar-logo" />
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {MainListItems.map((item) => {
              return (
                <ListItem
                  button
                  key={item.key}
                  onClick={() => setTab(item.key)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.key} />
                </ListItem>
              );
            })}
          </List>
          <Divider />
          <List>
            <ListItem button key={"New Deal"}>
              <ListItemIcon>
                <AddCircleIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={"New Deal"} />
            </ListItem>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <div className="active-component">{Navigation[tab]}</div>
        </main>
      </div>
    </ThemeProvider>
  );
}
export default App;
