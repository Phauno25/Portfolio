import { Icon, IconButton, Tooltip } from "@mui/material";
import React from "react";

const AdminButton = (props) => {

  const { callback,icon } = props;

  return (
    <Tooltip title="edit">
    <IconButton
      sx={{
        position: "absolute",
        top: "0",
        right: "0",
        bgcolor: "primary.main",
      }}
      onClick={callback}
    >
      <Icon>{icon}</Icon>
    </IconButton>
    </Tooltip>
  );
};

export default AdminButton;
