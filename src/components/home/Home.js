import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
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
import * as api from './../../utils/api/api';

const axios = require("axios");

function Home(props) {
  const [loading, setLoading] = useState(true);
  const [deals, setDeals] = useState([]);
  const [activities, setActivities] = useState([]);
  const [events, setEvents] = useState([]);
  const [weekEvents, setWeekEvents] = useState([]);
  const [portCos, setPortCos] = useState([]);

  const LoadDeals = () => {
    api.deal.GetDeals()
    .then(function (response) {
      let big_deals = response.data.data;
      let company_ids = []
      big_deals.forEach(d => {
          company_ids.push(d.company_id);
      });
      const comp_id_str = company_ids.join(',');
      let companies = {};
      api.company.GetCompanies(comp_id_str).then(function (res) {
          companies = res.data.data;
          let i = 0;
          big_deals.forEach(d => {
              d.companyName = companies[i].name;
              i = i + 1;
          });
          setDeals(big_deals)
      })
      })
      .catch(function (error) {
      console.log(error);
      });
  }

  const LoadAgenda = () => {
    api.activity.GetActivities()
    .then(function (response) {
        setActivities(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const LoadEvents = () => {
    api.evt.GetEvents(null, true)
    .then(function (response) {
        setEvents(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const LoadPortCos = () => {
    api.company.GetCompanies(null, "2")
    .then(function (response) {
      setPortCos(response.data.data);
      })
      .catch(function (error) {
      console.log(error);
      });
  }

  useEffect(() => {
    LoadDeals();
    LoadAgenda();
    LoadEvents();
    LoadPortCos();
}, []);

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
            // rows={deals}
            rows={props.deals.rows}
            columns={props.deals.columns}
            autoPageSize
            onCellClick={(params) => props.openDealCompany(params.row.id)}
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
              onCellClick={(params) => props.openPortfolioCompany(params.row.id)}
              density="compact"
              className="data-grid"
              // rows={portCos}
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
