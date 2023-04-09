import React from "react";
import { Avatar, Box, Grid, Icon, Typography } from "@mui/material";
import PageViewOutlined from "@mui/icons-material/PageviewOutlined";
import softSkills from "./softSkills.css";

const SoftSkills = (props) => {
  const {softSkills}  = props;
  return (
    <Box
      component="div"
      className="soft_skills_container"
      sx={{ position: "relative", py: 10 }}
    >
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        {softSkills.map((item) => {
          return (
            <Grid item xs={12} md={3}>
              <Avatar
                sx={{
                  bgcolor: "transparent",
                  margin: "0 auto",
                  width: 60,
                  height: 60,
                }}
              >
                <Icon
                  sx={{ fontSize: 60, color: "text.primary" }}
                >{item.icon}</Icon>
              </Avatar>
              <Typography variant="h3" align="center" color="secondary.main">
                {item.title}
              </Typography>
              <Typography align="center">{item.description}</Typography>{" "}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SoftSkills;
