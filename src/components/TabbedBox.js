import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  ThemeProvider,
  Card,
} from "@material-ui/core";
import { primaryTheme } from "../utils/constants";
import "./TabbedBox.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <ThemeProvider theme={primaryTheme}>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    </ThemeProvider>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabbedBox(props) {
  const tabs = props.tabs;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={primaryTheme}>
      <Tabs value={value} onChange={handleChange} className="tabs">
        {tabs.map((tab, i) => (
          <Tab label={tab.title} {...a11yProps(i)} />
        ))}
      </Tabs>

      <Card className="tabbed-box-card" variant="outlined">
        {tabs.map((tab, i) => (
          <TabPanel index={i} value={value}>
            {tab.component}
          </TabPanel>
        ))}
      </Card>
    </ThemeProvider>
  );
}
export default TabbedBox;
