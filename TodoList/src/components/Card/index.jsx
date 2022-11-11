import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export function Card({ task, deleteTask }) {
  const checktext = React.useRef(null);

  const changeText = () => {
    checktext.current.classList.toggle("line-through");
    checktext.current.classList.toggle("text-gray-400");
  };

  return (
    <ListItem
      className="bg-slate-100 mb-4 rounded-md"
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => deleteTask(task.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemIcon>
          <Checkbox
            edge="start"
            disableRipple
            onClick={() => {
              changeText();
            }}
          />
        </ListItemIcon>
        <ListItemText primary={task.text} ref={checktext} />
      </ListItemButton>
    </ListItem>
  );
}
