import {
  ThemeProvider,
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { primaryTheme } from "./../../utils/constants";
import Notes from "./../Notes/Notes2";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
function DealCompanyOverview(props) {
  //TODO: Export to consts
  const [status, setStatus] = useState(props.status);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <ThemeProvider theme={primaryTheme}>
      <Box className="dealco-overview cols">
        <Box className="dealco-ov-left rows">
          <Box className="dealco-status-box">
            <FormControl variant="outlined" className="dealco-status">
              <InputLabel>Status</InputLabel>
              <Select onChange={handleChange} value={status} label="Status">
                <MenuItem value={"Initial Evaluation"}>
                  Inital Evaluation
                </MenuItem>
                <MenuItem value={"Initial Vote"}>Initial Vote</MenuItem>
                <MenuItem value={"Final Vote"}>Final Vote</MenuItem>
                <MenuItem value={"Final Evaluation"}>Final Evaluation</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button variant="outlined">New Note</Button>
          <Button variant="outlined">Add to Weekly Meeting</Button>
          <Button variant="outlined">Initial Vote Results</Button>
          <Button variant="outlined">Final Vote Results</Button>
          <Button variant="outlined">Add to Portfolio</Button>
        </Box>
        <Notes className="dealco-ov-notes" notes={props.notes} />
      </Box>
    </ThemeProvider>
  );
}

export default DealCompanyOverview;
