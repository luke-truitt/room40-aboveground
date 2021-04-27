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
import ReactMarkdown, { propTypes } from "react-markdown";

function Notes(props) {
  const [notepadActive, setNotepadActive] = useState(false);
  const [current, setCurrent] = useState("Notes");
  const [saved, setSaved] = useState("Notes");

  const onCancelButton = (id) => {
    //TODO change note values
    setNotepadActive(false);
    setCurrent(saved);
  };
  const onEditButton = (id) => {
    setNotepadActive(true);
  };

  const onSaveButton = () => {
    setNotepadActive(false);
    setSaved(current);
    // TODO send back to database
  };

  const handleChange = (event) => {
    setCurrent(event.target.value);
  };
  const EditPanel = () => {
    return (
      <Box className="note-edit-panel cols">
        {notepadActive ? (
          <div className="note-edit-panel-active rows">
            <Divider />
            <Box className="note-edit-panel-active-buttons cols">
              <Button
                variant="outlined"
                className="cancel-button"
                onClick={() => onCancelButton()}
              >
                Cancel
              </Button>
              <Button
                className="save-button"
                variant="filled"
                onClick={() => onSaveButton()}
                color="primary"
              >
                Save
              </Button>
            </Box>
          </div>
        ) : (
          <Button className="edit-button" onClick={() => onEditButton()}>
            Edit{" "}
          </Button>
        )}
      </Box>
    );
  };
  console.log(props);
  return (
    <Box className="notes-box rows">
      <Box className="notes-box-top cols">
        <Card className="notes-todos">
          <CardContent className=" rows">
            <Typography variant="h6" className="notes-subtitle">
              TODOs
            </Typography>
            <FormControl>
              <FormGroup>
                {props.todos.map((todo) => {
                  return (
                    <FormControlLabel
                      className="week-agenda-item"
                      control={<Checkbox />}
                      label={todo}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
          </CardContent>{" "}
        </Card>
        <Card className="notes-dg-card">
          <CardContent className="notes-dg-card-content">
            <Typography variant="h6" className="notes-subtitle">
              Portfolio
            </Typography>
            <DataGrid
              autoHeight
              autoPageSize
              hideFooterRowCount
              hideFooterPagination
              density="compact"
              className="notes-data-grid"
              rows={props.portfolio.rows}
              columns={props.portfolio.columns}
            />
          </CardContent>
        </Card>
      </Box>
      <Card className="notes-box-bottom">
        <CardContent className="notepad-box rows">
          <Typography variant="h6" className="notes-subtitle">
            Notes
          </Typography>
          {notepadActive ? (
            <TextField
              className="notepad-text-field"
              variant="outlined"
              multiline
              disabled={!notepadActive}
              value={current}
              onChange={handleChange}
            />
          ) : (
            <ReactMarkdown className="notepad-text-field">
              {saved}
            </ReactMarkdown>
          )}
        </CardContent>
      </Card>

      <EditPanel />
    </Box>
  );
}

function WeeklyMeeting(props) {
  const initialVotesCols = [
    { field: "deal", headerName: "Deal", width: 400 },
    {
      field: "vote",
      headerName: " ",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          disableElevation
          color="secondary"
          className="vote-button"
        >
          {" "}
          Vote
        </Button>
      ),
    },
    { field: "status", headerName: "Status", width: 200 },
  ];
  const finalVotesCols = [
    { field: "deal", headerName: "Deal", width: 400 },
    {
      field: "vote",
      headerName: " ",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          disableElevation
          color="secondary"
          className="vote-button"
        >
          Vote
        </Button>
      ),
    },
    { field: "status", headerName: "Status", width: 200 },
  ];

  const InitialVotes = () => {
    return (
      <Box className="initial-votes">
        <DataGrid
          autoHeight
          autoPageSize
          hideFooterRowCount
          hideFooterPagination
          density="comfortable"
          className="notes-data-grid"
          rows={props.initialVotes.rows}
          columns={initialVotesCols}
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
          density="comfortable"
          className="notes-data-grid"
          rows={props.finalVotes.rows}
          columns={finalVotesCols}
        />
      </Box>
    );
  };
  console.log(props);
  const tabs = [
    { title: "Notes", component: <Notes {...props.notes} /> },
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
