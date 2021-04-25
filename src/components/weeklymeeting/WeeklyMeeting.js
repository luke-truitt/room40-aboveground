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
import { useState } from "react";
import TabbedBox from "../TabbedBox";
import ReactMarkdown from "react-markdown";

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
  const [notepadActive, setNotepadActive] = useState(false);
  const [notepad, setNotepad] = useState("Notes");

  const onCancelButton = (id) => {
    //TODO change note values
    setNotepadActive(false);
  };
  const onEditButton = (id) => {
    setNotepadActive(true);
  };

  const onSaveButton = () => {
    setNotepadActive(false);
    // TODO send back to database
  };

  const EditPanel = (props) => {
    return (
      <Box className="note-edit-panel cols">
        {notepadActive ? (
          <div className="note-edit-panel-active rows">
            <Divider />
            <Box className="note-edit-panel-active-buttons cols">
              <Button
                className="cancel-button"
                size="medium"
                onClick={() => onCancelButton()}
              >
                Cancel
              </Button>
              <Button
                className="save-button"
                size="medium"
                onClick={() => onSaveButton()}
                color="primary"
              >
                Save
              </Button>
            </Box>
          </div>
        ) : (
          <Button
            className="edit-button"
            size="medium"
            onClick={() => onEditButton()}
            color="primary"
          >
            Edit{" "}
          </Button>
        )}
      </Box>
    );
  };
  const handleChange = (event) => {
    setNotepad(event.target.value);
  };

  const Notepad = () => {
    return (
      <Box className="notepad-box rows">
        {notepadActive ? (
          <TextField
            className="notepad-text-field"
            multiline
            disabled={!notepadActive}
            key={1}
            value={notepad}
            onChange={(evt, value) => setNotepad(value)}
          />
        ) : (
          <ReactMarkdown className="notepad-text-field">
            {notepad}
          </ReactMarkdown>
        )}
        <EditPanel />
      </Box>
    );
  };
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
          <Notepad className="meeting-notes-text-field" />
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
