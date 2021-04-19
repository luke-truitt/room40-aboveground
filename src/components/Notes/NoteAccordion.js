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
import EditIcon from "@materia../../utils/constants
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import { primaryTheme } from "./../../utils/constants";
import { gridColumnsTotalWidthSelector } from "@material-ui/data-grid";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function NoteAccordion(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [note, setNote] = useState(props.data);
  const [activeNote, setActiveNote] = useState("");
  const [active, setActive] = useState(false);

  const saveNoteChanges = () => {
    setNote(activeNote);
    setActive(false);
  };
  const cancelNoteChanges = () => {
    setActiveNote(note);
    setActive(false);
  };
  const handleNoteChange = (event) => {
    setActiveNote(event.target.activeNote);
  };
  const editPanel = (
    <Box className="note-edit-panel cols">
      {active ? (
        <div className="note-edit-panel-active rows">
          <Divider />
          <Box className="note-edit-panel-active-buttons cols">
            <Button
              className="cancel-button"
              size="small"
              onClick={() => cancelNoteChanges()}
            >
              Cancel
            </Button>
            <Button
              className="save-button"
              size="small"
              onClick={() => saveNoteChanges(true)}
              color="primary"
            >
              Save
            </Button>
          </Box>
        </div>
      ) : (
        <Button
          className="edit-button"
          size="small"
          onClick={() => setActive(true)}
          color="primary"
        >
          Edit
        </Button>
      )}
    </Box>
  );
  const handleExpand = (panel) => (event, isExpanded) => {
    console.log("HEY");

    setExpanded(isExpanded ? panel : false);
    console.log(expanded);
  };

  return (
    <div className={classes.root}>
      <Accordion
        onChange={() => handleExpand("panel1")}
        expanded={expanded === "panel1"}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            <TextField
              defaultValue="Memo"
              InputProps={{ disableUnderline: true }}
              id="note-title"
            />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ThemeProvider theme={primaryTheme}>
            <Box className="note-box rows">
              {active ? (
                <TextField
                  className="note-text-field"
                  multiline
                  disabled={!active}
                  defaultValue={note}
                  activeNote={activeNote}
                  onChange={handleNoteChange}
                  InputProps={{ disableUnderline: true }}
                />
              ) : (
                <ReactMarkdown className="note-text-field">
                  {note}
                </ReactMarkdown>
              )}
              <AccordionActions>{editPanel}</AccordionActions>
            </Box>
          </ThemeProvider>
        </AccordionDetails>
      </Accordion>
      <Accordion
        onChange={() => handleExpand("panel2")}
        expanded={expanded === "panel2"}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default NoteAccordion;
