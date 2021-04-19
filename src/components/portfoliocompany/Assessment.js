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
          <Box className="status">
            <Typography className="assessment-score" variant="h3">
              3
            </Typography>
            <Typography variant="body">{props.status}</Typography>
          </Box>
          <Divider className="vr" flexItem orientation="vertical" />
          <Box className="commentary">
            <Typography variant="h5">Recent Commentary</Typography>
            <Typography variant="body">{props.commentary}</Typography>
          </Box>
          <Divider className="vr" flexItem orientation="vertical" />
          <Box className="ass-todos">
            <Typography variant="h5">RPVC TODOs</Typography>
            {props.todo.map((i) => {
              return (
                <Typography variant="body">
                  {i}
                  <br />
                </Typography>
              );
            })}
          </Box>
        </Box>
        <Divider className="hr" />
        <Box className="history-box rows">
          <Box className="history-content cols">
            <DataGrid
              autoHeight
              hideFooterRowCount
              hideFooterPagination
              rows={props.history.rows}
              columns={props.history.columns}
              autoPageSize
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default Assessment;
