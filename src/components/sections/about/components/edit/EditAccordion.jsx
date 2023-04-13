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
  import QueryResult from "../../../../shared/QueryResult";
  
  const EditAccordion = (props) => {
    const { setOpen ,description,dispatch} = props;
    const [status, setStatus] = useState("ready");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setStatus("loading");
      const description = {
        proffessional: e.target["proffessional"].value,
        personal: e.target["personal"].value,
        conclusion: e.target["whyme"].value,   
      }
      dispatch({type:"setDescription", payload: description})
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
          <Grid item xs={12}>
            <TextField
              name="proffessional"
              fullWidth
              label="Proffesional Context"
              multiline
              rows={5}
              defaultValue={description.proffessional}
            />
          </Grid>
          <Grid item xs={12} sx={{ my: { xs: 0, sm: "1rem" } }}>
            <TextField
              name="personal"
              fullWidth
              label="Personal Context"
              multiline
              rows={5}
              defaultValue={description.personal}

            />
          </Grid>
          <Grid item xs={12} sx={{ my: { xs: 0, sm: "1rem" } }}>
            <TextField
              name="whyme"
              fullWidth
              label="Why Me"
              multiline
              rows={2}
              defaultValue={description.conclusion}
            />
          </Grid>
          {switchStatus()}
        </Grid>
      </Box>
    );
  };
  
  export default EditAccordion;
  