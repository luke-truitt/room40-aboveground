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
          <Card className="status">
            <CardContent>
              <Typography className="assessment-score" variant="h3">
                3
              </Typography>
              <Typography variant="body">{props.status}</Typography>
            </CardContent>
          </Card>
          <Card className="commentary">
            <CardContent>
              <Typography variant="h6">Recent Commentary</Typography>
              <Typography variant="body">{props.commentary}</Typography>
            </CardContent>
          </Card>
          <Card className="ass-todos">
            <CardContent>
              <Typography variant="h6">RPVC TODOs</Typography>
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
        <Card className="history-box rows">
          <CardContent className="history-content">
            <Typography variant="h6">History</Typography>
            <DataGrid
              className="history-grid"
              autoHeight
              hideFooterRowCount
              hideFooterPagination
              rows={props.history.rows}
              columns={props.history.columns}
              autoPageSize
            />
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
export default Assessment;
