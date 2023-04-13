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

const EditSkills = (props) => {
  const { image, title, description } = props.selectedSkill.data ? props.selectedSkill.data : "";
  const { setOpen, dispatch, request } = props;
  const [status, setStatus] = useState("ready");
  const [imgPreview, setImgPreview] = useState();

  const loadImage = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgPreview(reader.result);
    };
    //setImgPreview(archivo);
    console.log(imgPreview);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    const NewSkills = {
      id: props.selectedSkill.id,
      data: {
        image: e.target["image"].value,
        title: e.target["title"].value,
        description: e.target["description"].value,
        image: imgPreview ? imgPreview : image,
      },
    };
    switch (request) {
      case "edit":
        dispatch({ type: "editSkills", payload: NewSkills });
        break;

      case "add":
        dispatch({ type: "addSkills", payload: NewSkills });
        break;
    }
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setOpen(false);
      }, 2500);
    }, 2500);
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
            <Typography variant="body2">Skill image</Typography>
            <Button variant="contained" component="label">
              Upload File
              <input
                name="image"
                onChange={(e) => loadImage(e)}
                type="file"
                hidden
              />
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
                mb: 2,
              }}
            ></Box>
            <Typography>Image Preview</Typography>
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

export default EditSkills;
