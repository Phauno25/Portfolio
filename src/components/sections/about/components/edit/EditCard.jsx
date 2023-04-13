import {
  Box,
  Button,
  Grid,
  Icon,
  InputAdornment,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import QueryResult from "../../../../shared/QueryResult";
import regex from "../../../../../utils/regex";

const EditCard = (props) => {
  const { name, profile, email, city, image } = props.about;
  const { setOpen,dispatch} = props;
  const [status, setStatus] = useState("ready");
  const [imgPreview, setImgPreview] = useState();

  const loadImage = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgPreview(reader.result);
    };
   
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    const basicInfo = {
      name: e.target["name"].value,
      profile: e.target["profile"].value,
      email: e.target["email"].value,
      city: e.target["city"].value,
      image: imgPreview ? imgPreview : image,
       
    }
    dispatch({type:"setInfo", payload: basicInfo})
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setOpen(false);
      }, 1500);
    }, 2500);
    //Dispatch
  };
  const switchStatus = () => {
    switch (status) {
      case "loading":
        return (
          <>
          <Typography align="center" sx={{mt:3}}>Saving changes...</Typography>
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
      <Grid item xs={12}>
        <Grid container spacing={3} >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Typography variant="body2">Profile image</Typography>
            <Button variant="contained" component="label">
              Upload File
              <input name="image" onChange={(e) => loadImage(e)} type="file" hidden />
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={imgPreview ? imgPreview : image}
              sx={{
                objectFit: "cover",
                width: "100px",
                height: "100px",
              }}
            ></Box>
            <Typography>Image Preview</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="name"
              fullWidth
              label="Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon color="secondary">person</Icon>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="profile"
              fullWidth
              label="Profile"
              defaultValue={profile}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon color="secondary">code</Icon>{" "}
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              fullWidth
              label="Email"
              defaultValue={email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon color="secondary">inbox</Icon>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="city"
              fullWidth
              label="City"
              defaultValue={city}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon color="secondary">place</Icon>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        
        </Grid>
        {switchStatus()}
      </Grid>
    </Box>
  );
};

export default EditCard;
