import { Icon, IconButton, Tooltip } from "@mui/material";
import React from "react";

const AdminButton = (props) => {
  const { callback, icon, position } = props;

/*   const defineCss = () =>{

    if (position === "left") {
      return {position: "absolute",
      top: "0",
      left: "0" , 
      bgcolor: "primary.main"}
    }
    if (position === "right") {
      return {position: "absolute",
      top: "0",
      rigth: "0" , 
      bgcolor: "primary.main"}
    }
  } 

  const css = defineCss(); */


  return (
    <Tooltip title="edit">
      <IconButton sx={{position: "absolute",
      top: "0",
      right: "0" , 
      bgcolor: "primary.main"}} onClick={callback}>
        <Icon>{icon}</Icon>
      </IconButton>
    </Tooltip>
  );
};

export default AdminButton;
