import React from "react";
import {
  Typography,
  ThemeProvider,
  Box,
  Card,
  CardContent,
} from "@material-ui/core";
import GlobalBreadcrumbs from "./../GlobalBreadcrumbs";

import { primaryTheme, DateDisplay } from "../../utils/constants";
import "./Portfolio.css";
import "./../../utils/global.css";
import TabbedBox from "../TabbedBox";
import PortfolioOverview from "./PortfolioOverview";

function Portfolio(props) {
  console.log("HEY", props);
  const HeaderCardContent = (
    <Box className="port-header-card-content-box rows">
      {props.headerLeft.map((row) => (
        <Box className="port-header-card-row cols">
          <Typography variant="body" className="port-header-card-row-label">
            {row.label}
          </Typography>
          <Typography variant="body" className="port-header-card-row-value">
            {row.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  const Overview = (
    <PortfolioOverview openPortfolioCompany={props.openPortfolioCompany} />
  );
  const tabs = [
    { title: "Overview", component: Overview },
    // { title: "Analytics", component: "AnalyticsComponent" },
  ];
  return (
    <ThemeProvider theme={primaryTheme}>
      <Box className="port-box rows">
        <GlobalBreadcrumbs />
        <Typography className="port-title" variant="h3">
          Portfolio
        </Typography>
        <Box className="port-header cols">
          <Card variant="outlined" className="port-header-card">
            <CardContent className="port-header-card-content">
              {HeaderCardContent}
            </CardContent>
          </Card>
          <Typography variant="body" className="port-header-text">
            {props.headerRight}
          </Typography>
          <Card variant="outlined" className="port-last-updated-card">
            <CardContent className="port-last-updated-card-content">
              <DateDisplay date={props.lastUpdated} />
            </CardContent>
          </Card>
        </Box>
        <TabbedBox tabs={tabs} />
      </Box>
    </ThemeProvider>
  );
}

export default Portfolio;
