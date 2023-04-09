import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import Person from "@mui/icons-material/Person";

import React, { useContext } from "react";
import AboutAccordion from "./components/AboutAccordion";
import AboutCard from "./components/AboutCard";

const AboutMe = (props) => {
  const about = props.about;
  return (
    <Box component={"div"} sx={{ py: 8 }}>
      <Grid container spacing={6} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} md={3}>
        <AboutCard about={about} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
        <AboutAccordion about={about}/>
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
