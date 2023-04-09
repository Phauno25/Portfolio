import { Avatar, Box, Container, Grid, Paper, Typography } from "@mui/material";
import PageViewOutlined from "@mui/icons-material/PageviewOutlined";
import React from "react";

const Skills = (props) => {
  const { skills } = props;
  return (
    <Box component={"div"} sx={{ py: 8 }}>
      <Typography variant="h4" align="center" color="secondary">
        What languages do I know?
      </Typography>
      <Typography align="center">
        Here is a list of languages that I have learned and I like to use.
      </Typography>
      <Container>
        <Grid container spacing={2} sx={{ py: 4 }}>
          {skills.map((item) => {
            return (
              <Grid item xs={4} sm={2}>
                <Avatar
                  sx={{
                    bgcolor: "transparent",
                    margin: "0 auto",
                    width: 40,
                    height: 40,
                  }}
                  src={item.image}
                />

                <Typography variant="h6" align="center" color="secondary">
                  {item.title}
                </Typography>
                <Typography variant="body2" align="center" color="white">
                  {item.description}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;