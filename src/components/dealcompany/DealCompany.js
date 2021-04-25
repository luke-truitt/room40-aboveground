import React from "react";
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
import companyLogo from "./../../resources/images/guesthouse-logo-dark.png";
import Notes from "../Notes/Notes";
import DealCompanyOverview from "./DealCompanyOverview";
import { DataGrid } from "@material-ui/data-grid";

function DealCompany(props) {
  console.log(props);
  const EvalSummary = () => {
    return (
      <Box className="evalsum">
        <DataGrid
          autoHeight
          hideFooterRowCount
          hideFooterPagination
          density="comfortable"
          className="data-grid"
          rows={props.eval.rows}
          columns={props.eval.columns}
          autoPageSize
        />
      </Box>
    );
  };

  const Overview = () => {
    return <DealCompanyOverview {...props.overviewData} />;
  };
  const Evaluation = () => {
    return <EvalSummary />;
  };
  const Files = () => {
    return <div />;
  };

  const tabs = [
    { title: "Overview", component: <Overview /> },
    { title: "Evaluation", component: <Evaluation /> },
    // { title: "Files", component: <Files/> },
  ];
  return (
    <ThemeProvider theme={primaryTheme}>
      <Box className="dealco-box rows">
        <GlobalBreadcrumbs />
        <Box className="dealco-overview-top cols">
          {/*TODO Fix to be dynamic*/}
          <Box className="dealco-logo-box">
            <img className="dealco-logo" src={props.overview.logo} />
          </Box>
          <Box className="dealco-overview-buttons rows">
            <Button
              variant="contained"
              className="dealco-overview-deck-button"
              disableElevation
            >
              View Deck
              <OpenInNewIcon className="button-icon" />
            </Button>
            <Button
              variant="outlined"
              className="dealco-overview-note-button"
              disableElevation
            >
              New Note
              <AddIcon className="button-icon" />
            </Button>
          </Box>
        </Box>
        <Box className="dealco-overview-bottom">
          <Typography variant="body">
            <span className="dealco-overview-label">Deal Team: </span>
            {props.overview.dealTeam}
            <br />
            <span className="dealco-overview-label">Traction: </span>
            {props.overview.traction}
            <br />
            <span className="dealco-overview-label">Terms: </span>
            {props.overview.terms}
            <br />
            <span className="dealco-overview-label">Co-Investors: </span>
            {props.overview.coinvestors}
            <br />
          </Typography>
        </Box>
        <TabbedBox tabs={tabs} />
      </Box>
    </ThemeProvider>
  );
}

export default DealCompany;
