import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export default function DeleteButton(props) {
  return (
    <React.Fragment>
      <IconButton aria-label="delete" {...props}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
}
