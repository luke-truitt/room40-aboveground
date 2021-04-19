import React from "react";
import {
  Typography,
  ThemeProvider,
  Box,
  Card,
  CardContent,
  FormControl,
  FormGroup,
  FormControlLabel,
  Divider,
  Checkbox,
  TextField,
  Button,
} from "@material-ui/core";
import GlobalBreadcrumbs from "../GlobalBreadcrumbs";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { primaryTheme } from "../../utils/constants";
import "./../../utils/global.css";
import "./WeeklyMeeting.css";
import { DataGrid } from "@material-ui/data-grid";

import TabbedBox from "../TabbedBox";

const notesColumns = [
  { field: "company", headerName: "Company", width: 100 },
  { field: "todo", headerName: "TODO", width: 300 },
];
const initialVoteColumns = [
  { field: "deal", headerName: "Deal", width: 400 },
  { field: "vote", headerName: "", width: 100 },
];
const finalVoteColumns = [
  { field: "deal", headerName: "Deal", width: 400 },
  { field: "vote", headerName: "", width: 100 },
];
function WeeklyMeeting(props) {
  props = {
    notes: {
      todos: ["Eat cake", "Cry a lot", "Celebrate"],
      portfolio: [
        { id: 1, company: "Braid", todo: "Many many things" },
        { id: 2, company: "Braid", todo: "Many many things" },
        { id: 3, company: "Braid", todo: "Many many things" },
        { id: 4, company: "Braid", todo: "Many many things" },
      ],
    },
    initialVotes: [
      { id: 1, deal: "Company", vote: "" },
      { id: 2, deal: "Company", vote: "" },
      { id: 3, deal: "Company", vote: "" },
      { id: 4, deal: "Company", vote: "" },
    ],
    finalVotes: [
      { id: 1, deal: "Company", vote: "" },
      { id: 2, deal: "Company", vote: "" },
      { id: 3, deal: "Company", vote: "" },
      { id: 4, deal: "Company", vote: "" },
    ],
  };
  const notes = props.notes;
  const Notes = () => {
    return (
      <Box className="notes-box rows">
        <Box className="notes-box-top cols">
          <Box className="notes-todos rows">
            <Typography className="notes-sub-title" variant="body">
              TODOs
            </Typography>
            <FormControl>
              <FormGroup>
                {notes.todos.map((todo) => {
                  return (
                    <FormControlLabel control={<Checkbox />} label={todo} />
                  );
                })}
              </FormGroup>
            </FormControl>
          </Box>
          <Divider className="vr" orientation="vertical" flexItem />
          <DataGrid
            autoHeight
            autoPageSize
            hideFooterRowCount
            hideFooterPagination
            density="compact"
            className="notes-data-grid"
            rows={notes.portfolio}
            columns={notesColumns}
          />
        </Box>
        <Divider className="hr" />
        <Box className="notes-box-bottom">
          <TextField
            multiline
            variant="filled"
            className="meeting-notes-text-field"
          ></TextField>
        </Box>
      </Box>
    );
  };
  const InitialVotes = () => {
    return (
      <Box className="initial-votes">
        <DataGrid
          autoHeight
          autoPageSize
          hideFooterRowCount
          hideFooterPagination
          density="compact"
          className="notes-data-grid"
          rows={props.initialVotes}
          columns={initialVoteColumns}
        />
      </Box>
    );
  };
  const FinalVotes = () => {
    return (
      <Box className="final-votes">
        <DataGrid
          autoHeight
          autoPageSize
          hideFooterRowCount
          hideFooterPagination
          density="compact"
          className="notes-data-grid"
          rows={props.finalVotes}
          columns={finalVoteColumns}
        />
      </Box>
    );
  };
  const tabs = [
    { title: "Notes", component: <Notes /> },
    { title: "Initial Votes", component: <InitialVotes /> },
    { title: "Final Votes", component: <FinalVotes /> },
  ];
  return (
    <ThemeProvider theme={primaryTheme}>
      <Box className="weekly-meeting-box rows">
        <GlobalBreadcrumbs />
        <Typography className="weekly-meeting-title" variant="h4">
          This Week: to fix
        </Typography>
        <TabbedBox tabs={tabs} />
      </Box>
    </ThemeProvider>
  );
}

export default WeeklyMeeting;
