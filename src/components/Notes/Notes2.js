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
/** Notes format
 * notes = [
  {
    id: 1,
    title: "Memo",
    note:
      "Key Stats \
    * 1M of 5M homes used a stager (20% penetration)\
    * 10K pr"}\
 */
function Notes(props) {
  const [saved, setSaved] = useState(props.notes);
  const [current, setCurrent] = useState([...props.notes]);
  const [expanded, setExpanded] = useState(saved[0].id);
  const [active, setActive] = useState(false);

  const onTitleChange = (idx) => (e) => {
    let prev = [...current];
    prev[idx].title = e.target.value;
    setCurrent(prev);
  };
  const onNoteChange = (idx) => (e) => {
    let prev = [...current];
    console.log("1", saved);
    let note = { ...prev[idx] };
    console.log("2", saved);
    note.note = e.target.value;
    console.log("3", saved);
    prev[idx] = note;
    console.log(prev);
    console.log("4", saved);
    setCurrent(prev);
  };

  const onSave = (idx) => {
    let prev = [...saved];
    prev[idx].title = current[idx].title;
    prev[idx].note = current[idx].note;
    setSaved(prev);
    setActive(false);
    // TODO: Send to DB
  };

  const onCancel = () => {
    console.log("onCancel");
    console.log("current 1:", current);
    console.log("saved:", saved);
    var prev = [...saved];
    setCurrent(prev);
    setActive(false);
    console.log("current 2:", current);
  };

  const onEdit = (idx) => {
    setActive(saved[idx].id);
  };

  const onExpand = (idx) => {
    if (active === false) {
      setExpanded(saved[idx].id);
    }
  };

  const EditPanel = (props) => {
    return (
      <Box className="note-edit-panel cols">
        {active === saved[props.idx].id ? (
          <div className="note-edit-panel-active rows">
            <Divider />
            <Box className="note-edit-panel-active-buttons cols">
              <Button
                className="cancel-button"
                size="medium"
                onClick={() => onCancel()}
              >
                Cancel
              </Button>
              <Button
                className="save-button"
                size="medium"
                onClick={() => onSave(props.idx)}
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
            onClick={() => onEdit(props.idx)}
            color="primary"
          >
            Edit
          </Button>
        )}
      </Box>
    );
  };

  return (
    <ThemeProvider theme={primaryTheme}>
      <div>
        {saved.map((note, idx) => {
          return (
            <Accordion
              onChange={() => onExpand(idx)}
              expanded={expanded === note.id}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className="accordion-heading">
                  <TextField
                    InputProps={{ disableUnderline: true }}
                    disabled={!(active === note.id)}
                    defaultValue={note.title}
                    id="note-title"
                    onChange={onTitleChange(idx)}
                    value={current[idx].title}
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
                      value={current[idx].note}
                      onChange={onNoteChange(idx)}
                    />
                  ) : (
                    <ReactMarkdown className="note-text-field">
                      {note.note}
                    </ReactMarkdown>
                  )}
                  <AccordionActions>
                    <EditPanel idx={idx} />
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
