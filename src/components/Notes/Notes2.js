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
import "./Notes.css";

function Notes(props) {
  const notes = props.notes;
  const [expanded, setExpanded] = useState(notes[0].id);
  const [active, setActive] = useState(false);

  const onNoteChange = (e) => {
    // setNoteValue(e.target.value);
  };
  const onTitleChange = (e) => {
    // setTitleValue(e.target.value);
  };

  const onCancelButton = (id) => {
    //TODO change note values
    setActive(false);
  };
  const onEditButton = (id) => {
    setActive(id);
    console.log(active);
  };

  const onSaveButton = () => {
    setActive(false);
    // TODO send back to database
  };

  const onExpand = (id) => {
    if (active === false) {
      setExpanded(id);
    }
  };

  const EditPanel = (props) => {
    return (
      <Box className="note-edit-panel cols">
        {active === props.id ? (
          <div className="note-edit-panel-active rows">
            <Divider />
            <Box className="note-edit-panel-active-buttons cols">
              <Button
                className="cancel-button"
                size="medium"
                onClick={() => onCancelButton(props.id)}
              >
                Cancel
              </Button>
              <Button
                className="save-button"
                size="medium"
                onClick={() => onSaveButton(props.id)}
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
            onClick={() => onEditButton(props.id)}
            color="primary"
          >
            Edit{" "}
          </Button>
        )}
      </Box>
    );
  };

  return (
    <ThemeProvider theme={primaryTheme}>
      <div>
        {notes.map((note) => {
          return (
            <Accordion
              onChange={() => onExpand(note.id)}
              expanded={expanded === note.id}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className="accordion-heading">
                  <TextField
                    InputProps={{ disableUnderline: true }}
                    disabled={!(active === note.id)}
                    defaultValue={note.title}
                    id="note-title"
                  />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box className="note-box rows">
                  {active === note.id ? (
                    <TextField
                      className="note-text-field"
                      InputProps={{ disableUnderline: true }}
                      multiline
                      disabled={!(active === note.id)}
                      defaultValue={note.note}
                    />
                  ) : (
                    <ReactMarkdown className="note-text-field">
                      {note.note}
                    </ReactMarkdown>
                  )}
                  <AccordionActions>
                    <EditPanel id={note.id} />
                  </AccordionActions>
                </Box>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </ThemeProvider>
  );
}

export default Notes;
