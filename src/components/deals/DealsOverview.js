import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Container, Typography } from "@material-ui/core";

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
//   },
// ];

const columns = [
  { field: "company", headerName: "Company", width: 120 },
  { field: "type", headerName: "Type", width: 100 },
  { field: "cost", headerName: "Cost", width: 120 },
  { field: "fmv", headerName: "FMV", width: 120 },
  { field: "mtm", headerName: "MTM", width: 100, hide: true },
  { field: "onFirstCheck", headerName: "On 1st Check", width: 150, hide: true },
  { field: "sector", headerName: "Sector", width: 100 },
  { field: "stake", headerName: "% Stake", width: 120 },
  { field: "lastRoundMoney", headerName: "Last Round $", width: 150 },
  { field: "lastPostVal", headerName: "Last Post Val", width: 150 },
  {
    field: "highlights",
    headerName: "Highlights & Latest",
    width: 200,
  },
];

const rows = [
  {
    id: 1,
    company: "Braid",
    type: "Core",
    cost: "$1,000,000",
    fmv: "$1,000,000",
    mtm: "5x",
    onFirstCheck: "5x",
    sector: "Health",
    stake: "20%",
    lastRoundMoney: "20%",
    lastPostVal: "$1,000,000",
    highlights: "Doing really well.",
  },
  {
    id: 2,
    company: "Braid",
    type: "Core",
    cost: "$1,000,000",
    fmv: "$1,000,000",
    mtm: "5x",
    onFirstCheck: "5x",
    sector: "Health",
    stake: "20%",
    lastRoundMoney: "20%",
    lastPostVal: "$1,000,000",
    highlights: "Doing really well.",
  },
  {
    id: 3,
    company: "Braid",
    type: "Core",
    cost: "$1,000,000",
    fmv: "$1,000,000",
    mtm: "5x",
    onFirstCheck: "5x",
    sector: "Health",
    stake: "20%",
    lastRoundMoney: "20%",
    lastPostVal: "$1,000,000",
    highlights: "Doing really well.",
  },
  {
    id: 4,
    company: "Braid",
    type: "Core",
    cost: "$1,000,000",
    fmv: "$1,000,000",
    mtm: "5x",
    onFirstCheck: "5x",
    sector: "Health",
    stake: "20%",
    lastRoundMoney: "20%",
    lastPostVal: "$1,000,000",
    highlights: "Doing really well.",
  },
  {
    id: 5,
    company: "Braid",
    type: "Core",
    cost: "$1,000,000",
    fmv: "$1,000,000",
    mtm: "5x",
    onFirstCheck: "5x",
    sector: "Health",
    stake: "20%",
    lastRoundMoney: "20%",
    lastPostVal: "$1,000,000",
    highlights: "Doing really well.",
  },
];

function DealsOverview() {
  return (
    <Container>
      <DataGrid
        autoHeight
        autoPageSize
        hideFooterRowCount
        hideFooterPagination
        rows={rows}
        columns={columns}
      />
    </Container>
  );
}
export default DealsOverview;
