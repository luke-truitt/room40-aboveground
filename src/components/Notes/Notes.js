import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import "./../../utils/global.css";
import {
  TextField,
  ThemeProvider,
  IconButton,
  Box,
  Button,
  Divider,
  AccordionActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { primaryTheme } from "../../utils/constants";
import ReactMarkdown from "react-markdown";

function Note(props) {
  const [expanded, setExpanded] = useState(props.expanded);
  const [title, setTitle] = useState(props.title);
  const [note, setNote] = useState(props.note);
  const [active, setActive] = useState(props.active);
  const [noteValue, setNoteValue] = useState(props.note);
  const [titleValue, setTitleValue] = useState(props.title);

  const onNoteChange = (e) => {
    setNoteValue(e.target.value);
  };
  const onTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const onCancelButton = () => {
    setNoteValue(props.note);
    setTitleValue(props.title);
    setActive(false);
    props.onCancelButton(props.id);
  };
  const onEditButton = () => {
    setActive(true);
    props.onEditButton(props.id);
  };

  const onSaveButton = () => {
    setActive(false);
    props.onSaveButton(props.id, noteValue, titleValue);
  };

  const EditPanel = (
    <Box className="note-edit-panel cols">
      {props.active ? (
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

  return (
    <Accordion
      onChange={() => props.onExpandButton(props.id)}
      expanded={props.expanded}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className="accordion-heading">
          <TextField
            onChange={onTitleChange}
            InputProps={{ disableUnderline: true }}
            disabled={!props.active}
            defaultValue={props.title}
            id="note-title"
          />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box className="note-box rows">
          {props.active ? (
            <TextField
              className="note-text-field"
              InputProps={{ disableUnderline: true }}
              multiline
              disabled={!props.active}
              value={noteValue}
              onChange={onNoteChange}
            />
          ) : (
            <ReactMarkdown className="note-text-field">
              {props.note}
            </ReactMarkdown>
          )}
          <AccordionActions>{EditPanel}</AccordionActions>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

function Notes(props) {
  const notes = props.notes;
  let initial = {};
  for (const i in notes) {
    initial[notes[i].id] = false;
  }
  const [active, setActive] = useState(initial);
  const [expanded, setExpanded] = useState(notes[0].id);

  const canExpand = () => {
    if (!active.includes(true)) {
      return false;
    }
  };

  const onCancelButton = (id) => {
    let newActive = active;
    newActive[id] = false;
    setActive(newActive);
  };

  const onEditButton = (id) => {
    let newActive = active;
    newActive[id] = true;
    setActive(newActive);
  };

  const onSaveButton = (id, note, title) => {
    let newActive = active;
    newActive[id] = false;
    setActive(newActive);
    console.log("save: ", active);
    // TODO send back to database
  };

  return (
    <ThemeProvider theme={primaryTheme}>
      <div>
        {notes.map((note, i) => {
          return (
            <Note
              canExpand={canExpand}
              onEditButton={onEditButton}
              onCancelButton={onCancelButton}
              onSaveButton={onSaveButton}
              id={note.id}
              note={note.note}
              title={note.title}
              active={i === 0}
            />
          );
        })}
      </div>
    </ThemeProvider>
  );
}

export default Notes;
