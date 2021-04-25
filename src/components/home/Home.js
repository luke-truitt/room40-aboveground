import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { DataGrid } from "@material-ui/data-grid";
import {
  ThemeProvider,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Link,
  FormControl,
  Button,
} from "@material-ui/core";
import { primaryTheme } from "./../../utils/constants";
import "./../../utils/global.css";
import "./Home.css";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

function Home(props) {
  const AgendaCard = () => {
    return (
      <Card className="home-agenda-card">
        <CardContent className="home-agenda-content">
          <Typography className="home-card-title" variant="h6">
            📋 Agenda
          </Typography>
          <FormGroup column>
            {props.agenda.map((i, idx) => {
              return (
                <FormControlLabel
                  className="home-agenda-item"
                  control={<Checkbox name={"checked-" + idx} />}
                  label={i}
                />
              );
            })}
          </FormGroup>
        </CardContent>
      </Card>
    );
  };
  const DealsCard = () => {
    return (
      <Card className="home-deals-card">
        <CardContent classNaome="home-deals-card-content">
          <Typography className="home-card-title" variant="h6">
            🤝 Deals
          </Typography>
          <DataGrid
            autoHeight
            hideFooterRowCount
            hideFooterPagination
            density="compact"
            className="data-grid"
            rows={props.deals.rows}
            columns={props.deals.columns}
            autoPageSize
            onCellClick={() => props.openDealCompany(0)}
          />
        </CardContent>
      </Card>
    );
  };
  const PortfolioCard = () => {
    return (
      <Card className="home-portfolio-card home-left-bottom ">
        <CardContent className="home-portfolio-card-content">
          <Typography className="home-card-title" variant="h6">
            📁 Portfolio
          </Typography>
          <div>
            <DataGrid
              autoPageSize
              hideFooterRowCount
              hideFooterPagination
              autoHeight
              //TODO
              onCellClick={() => props.openPortfolioCompany(0)}
              density="compact"
              className="data-grid"
              rows={props.portfolio.rows}
              columns={props.portfolio.columns}
              autoPageSize
            />
          </div>
        </CardContent>
      </Card>
    );
  };
  const TodayCard = () => {
    return (
      <Card className="home-today-card">
        <CardContent className="home-today-card-content">
          <Typography variant="h6" className="home-card-title">
            📣 Today
          </Typography>
          {props.today.map((i, idx) => {
            return (
              <Card
                className={"meeting-card" + " meeting-card-" + String(idx)}
                density="compact"
                variant="outlined"
              >
                <CardContent className="meeting-card-content cols">
                  <Typography variant="body" className="meeting meeting-time">
                    {i.time}
                  </Typography>
                  <Typography variant="body" className="meeting meeting-name">
                    {i.name}
                  </Typography>
                  <Link href={i.link} color="secondary">
                    <OpenInNewIcon className="open-icon" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </CardContent>
      </Card>
    );
  };

  const calendarCols = [
    {
      headerName: "Year",
      width: 150,
      renderCell: (params) => (
        <strong>
          {params.value.getFullYear()}
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
          >
            Open
          </Button>
        </strong>
      ),
    },
  ];

  const CalendarTable = () => {};
  const WeekCard = () => {
    return (
      <Card className="home-week-card">
        <CardContent className="home-week-card-content">
          <Typography variant="h6" className="home-card-title">
            📅 Later this week
          </Typography>
          {props.week.map((i) => {
            return (
              <Card className="meeting-card" variant="outlined">
                <CardContent className="meeting-card-content cols">
                  <Typography variant="body" className="meeting meeting-time">
                    {i.time}
                  </Typography>
                  <Typography variant="body" className="meeting meeting-name">
                    {i.name}
                  </Typography>
                  <Link href={i.link} color="secondary">
                    <OpenInNewIcon className="open-icon" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </CardContent>
      </Card>
    );
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <ThemeProvider theme={primaryTheme}>
      <Box className="home-box rows">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <AgendaCard />
            </Grid>
            <Grid item xs={4}>
              <DealsCard />
            </Grid>
            <Grid item xs={5}>
              <TodayCard />
            </Grid>
            <Grid item xs={7}>
              <PortfolioCard />
            </Grid>
            <Grid item xs={5}>
              <WeekCard />
            </Grid>
          </Grid>
        </div>
      </Box>
    </ThemeProvider>
  );
}
export default Home;
