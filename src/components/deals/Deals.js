import React from "react";
import {
  Typography,
  ThemeProvider,
  Box,
  Card,
  CardContent,
} from "@material-ui/core";
import GlobalBreadcrumbs from "../GlobalBreadcrumbs";

import { primaryTheme, DateDisplay } from "../../utils/constants";
import "./Deals.css";
import "./../../utils/global.css";
import TabbedBox from "../TabbedBox";
import DealsOverview from "./DealsOverview";

function DealsCompany() {
  const headerCardContent = [
    { label: "Lorem ipsum", value: "dolor sit amet" },
    { label: "Lorem ipsum", value: "dolor sit amet" },
    { label: "Lorem ipsum", value: "dolor sit amet" },
  ];
  const headerTextContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros risus, volutpat at tristique id,\
    lacinia sit amet ex. Nam ultricies arcu eros, quis cursus libero sollicitudin non. Pellentesque ac \
    est in tortor convallis congue non et risus.";
  const lastUpdated = new Date();

  const HeaderCardContent = (
    <Box className="deals-header-card-content-box rows">
      {headerCardContent.map((row) => (
        <Box className="deals-header-card-row cols">
          <Typography variant="body" className="deals-header-card-row-label">
            {row.label}
          </Typography>
          <Typography variant="body" className="deals-header-card-row-value">
            {row.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  const Overview = <DealsOverview />;
  const tabs = [
    { title: "Overview", component: Overview },
    { title: "Analytics", component: "AnalyticsComponent" },
  ];
  return (
    <ThemeProvider theme={primaryTheme}>
      <Box className="deals-box rows">
        <GlobalBreadcrumbs />
        <Typography className="deals-title" variant="h3">
          Deals
        </Typography>
        <Box className="deals-header cols">
          <Card className="deals-header-card">
            <CardContent className="deals-header-card-content">
              {HeaderCardContent}
            </CardContent>
          </Card>
          <Typography variant="body" className="deals-header-text">
            {headerTextContent}
          </Typography>
          <Card variant="outlined" className="deals-last-updated-card">
            <CardContent className="deals-last-updated-card-content">
              <DateDisplay date={lastUpdated} />
            </CardContent>
          </Card>
        </Box>
        <TabbedBox tabs={tabs} />
      </Box>
    </ThemeProvider>
  );
}

export default DealsCompany;
