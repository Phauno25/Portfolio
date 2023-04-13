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
  
  const EditExperience = (props) => {
    const { icon, workplace, description,dateFrom,dateTo } = props.selectedExperience.data ? props.selectedExperience.data : "";
    const { setOpen,dispatch,request } = props;
    const [status, setStatus] = useState("ready");
    const [iconPreview, setIconPreview] = useState();

    const handleSubmit = (e) => {
      e.preventDefault();
      setStatus("loading");
      const newExperience = 
      {
        id: props.selectedExperience.id,
        data: {
          icon: e.target["icon"].value,
          workplace: e.target["workplace"].value,
          description: e.target["description"].value,
          dateFrom: e.target["dateFrom"].value,
          dateTo: e.target["dateTo"].value,
        }
      }
      switch (request) {
        case "edit":
          dispatch({type:"editExperience", payload: newExperience })
          break;
      
        case "add":
          dispatch({type:"addExperience", payload: newExperience })
          break;

          default:
          break;
      }
     
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
                onBlur={(e)=> setIconPreview(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <Icon sx={{ fontSize: "80px",mb:"1rem"}}>{iconPreview ? iconPreview : icon}</Icon>
              <Typography>Icon Preview</Typography>
            </Grid>
            <Grid item xs={12} sx={{ my: { xs: 0, sm: "1rem" } }}>
              <TextField
                name="workplace"
                fullWidth
                label="Work Place"
                defaultValue={workplace}
              />
            </Grid>
            <Grid item xs={12} sx={{ my: { xs: 0, sm: "1rem" } }}>
              <TextField
                name="description"
                fullWidth
                label="Description"
                multiline
                rows={3}
                defaultValue={description}
              />
            </Grid>
            <Grid item xs={6} sx={{ my: { xs: 0, sm: "1rem" } }}>
              <TextField
                name="dateFrom"
                fullWidth
                label="Date From"
                defaultValue={dateFrom}
              />
            </Grid>
            <Grid item xs={6} sx={{ my: { xs: 0, sm: "1rem" } }}>
              <TextField
                name="dateTo"
                fullWidth
                label="Date To"
                defaultValue={dateTo}
              />
            </Grid>
          </Grid>
          {switchStatus()}
        </Grid>
      </Box>
    );
  };
  
  export default EditExperience;
  