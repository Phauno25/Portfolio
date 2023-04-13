import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Icon,
  InputAdornment,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import QueryResult from "../../../shared/QueryResult";

const EditSoftSkills = (props) => {
  const { icon, title, description } = props.selectedSkill.data;
  const { setOpen,dispatch } = props;
  const [status, setStatus] = useState("ready");
  const [iconPreview, setIconPreview] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    const newSoftSkills = 
    {
      id: props.selectedSkill.id,
      data: {
        icon: e.target["icon"].value,
        title: e.target["title"].value,
        description: e.target["description"].value
      }
    }
    dispatch({type:"editSoftSkills", payload: newSoftSkills })
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setOpen(false);
      }, 2500);
    }, 2500);
    //Dispatch
  };

  const switchStatus = () => {
    switch (status) {
      case "loading":
        return (
          <>
            <Typography align="center">Saving changes...</Typography>
            <LinearProgress color="secondary" />
          </>
        );

      case "success":
        return (
          <QueryResult resultStatus={status} resultMsg={"Data modified Ok!"} />
        );
      default:
        return (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Confirm
          </Button>
        );
    }
  };

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      sx={{ mt: 2, p: 2 }}
    >
      <Grid item xs={12} sx={{ my: { xs: 0, sm: "1rem" } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="icon"
              fullWidth
              label="Icon Name"
              defaultValue={icon}
              helperText="The Font Material icon name"
              onBlur={(e) =>setIconPreview(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Icon sx={{ fontSize: "80px",mb:"1rem"}}>{iconPreview ? iconPreview : icon}</Icon>
            <Typography>Icon Preview</Typography>
          </Grid>
          <Grid item xs={12} sx={{ my: { xs: 0, sm: "1rem" } }}>
            <TextField
              name="title"
              fullWidth
              label="Title"
              defaultValue={title}
            />
          </Grid>
          <Grid item xs={12} sx={{ my: { xs: 0, sm: "1rem" } }}>
            <TextField
              name="description"
              fullWidth
              label="Description"
              defaultValue={description}
            />
          </Grid>
        </Grid>
        {switchStatus()}
      </Grid>
    </Box>
  );
};

export default EditSoftSkills;
