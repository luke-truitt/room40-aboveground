import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import {
  Typography,
  ThemeProvider,
  Box,
  Card,
  CardContent,
  TextField,
  Divider,
} from "@material-ui/core";
import { primaryTheme } from "../../utils/constants";
import "./../../utils/global.css";

function Assessment(props) {
  return (
    <ThemeProvider theme={primaryTheme}>
      <Box className="assessment-box rows">
        <Box className="current-box cols">
          {/* TODO Add edit component*/}
          <TextField
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Card>
            <CardContent>
              <Typography variant="h5">Current Status</Typography>
              <Typography variant="body">{props.status}</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h5">Recent Commentary</Typography>
              <Typography variant="body">{props.commentary}</Typography>
            </CardContent>
          </Card>
          {/* TODO Change to list*/}
          <Card>
            <CardContent>
              <Typography variant="h5">RPVC TODOs</Typography>
              {props.todo.map((i) => {
                return (
                  <Typography variant="body">
                    {i}
                    <br />
                  </Typography>
                );
              })}
            </CardContent>
          </Card>
        </Box>
        <Divider />
        <Box className="history-box rows">
          <Box className="history-content cols">
            <Card className="history-chart">
              <CardContent>
                <DataGrid
                  autoHeight
                  hideFooterRowCount
                  hideFooterPagination
                  rows={props.history.rows}
                  columns={props.history.columns}
                  autoPageSize
                />
              </CardContent>
            </Card>
            <Typography variant="h3">CHART</Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default Assessment;
