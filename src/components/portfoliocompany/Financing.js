import React from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { ThemeProvider, Box } from "@material-ui/core";
import "./PortfolioCompany.css";
import { primaryTheme } from "../../utils/constants";
function Financing(props) {
  const active = props.active;
  const data = props.data;
  return (
    <ThemeProvider theme={primaryTheme}>
      <Box className="financing-box rows">
        <DataGrid
          components={{
            Toolbar: GridToolbar,
          }}
          autoHeight
          hideFooterRowCount
          hideFooterPagination
          rows={props.history.rows}
          columns={props.history.columns}
          autoPageSize
        />
      </Box>
    </ThemeProvider>
  );
}
export default Financing;
