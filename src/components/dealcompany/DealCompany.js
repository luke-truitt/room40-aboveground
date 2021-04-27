import React, { useEffect, useState } from "react";
import {
  Typography,
  ThemeProvider,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
} from "@material-ui/core";
import GlobalBreadcrumbs from "../GlobalBreadcrumbs";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { primaryTheme } from "../../utils/constants";
import "./DealCompany.css";
import "./../../utils/global.css";
import TabbedBox from "../TabbedBox";
import Assessment from "./Assessment";
import Financing from "./Financing";
import AddIcon from "@material-ui/icons/Add";
import companyLogo from "./../../resources/images/guesthouse-logo.png";
import Notes from "../Notes/Notes";
import * as api from './../../utils/api/api';

function DealCompany(props) {
  
  const [loading, setLoading] = useState(true);
  const [deal, setDeal] = useState({});
  const [company, setCompany] = useState({});

  useEffect(() => {
    api.deal.GetDeal(props.dealId)
    .then(function (response) {
      setDeal(response.data);
      let _deal = response.data;
      
      api.company.GetCompany(_deal.company_id).then(function (res) {
          setCompany(res.data);
          console.log(company);
      })
      console.log(deal);
      }
      
    )
      .catch(function (error) {
      console.log(error);
      });
}, [props.dealId]);
  const Overview = () => {
    return <div />;
  };
  const Evaluation = () => {
    return <div />;
  };
  const Files = () => {
    return <div />;
  };

  const tabs = [
    { title: "Overview", component: <Overview /> },
    // { title: "Evaluation", component: <Evaluation/> },
    // { title: "Files", component: <Files/> },
  ];
  return (
    <ThemeProvider theme={primaryTheme}>
      <Box className="portco-box rows">
        <GlobalBreadcrumbs />
        <Box className="portco-overview-top cols">
          {/*TODO Fix to be dynamic*/}
          <Box className="portco-logo-box">
            {/* <img className="portco-logo" src={props.overview.logo} /> */}
            <span className="portco-overview-label">{company.name}</span>
          </Box>
          <Box className="portco-overview-buttons rows">
            <Button
              variant="contained"
              className="portco-overview-deck-button"
              disableElevation
            >
              View Deck
              <OpenInNewIcon className="button-icon" />
            </Button>
            <Button
              variant="outlined"
              className="portco-overview-note-button"
              disableElevation
            >
              New Note
              <AddIcon className="button-icon" />
            </Button>
          </Box>
        </Box>
        <Box className="portco-overview-bottom">
          <Typography variant="body">
            <span className="portco-overview-label">Deal Team: </span>
            {/* {props.overview.dealTeam} */}
            <br />
            <span className="portco-overview-label">Traction: </span>
            {/* {props.overview.traction} */}
            <br />
            <span className="portco-overview-label">Terms: </span>
            {/* {props.overview.terms} */}
            <br />
            <span className="portco-overview-label">Co-Investors: </span>
            {/* {props.overview.coinvestors} */}
            <br />
          </Typography>
        </Box>
        <TabbedBox tabs={tabs} />
      </Box>
    </ThemeProvider>
  );
}

export default DealCompany;
