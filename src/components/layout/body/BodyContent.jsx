import Landing from "../../sections/landing/Landing";
import AboutMe from "../../sections/about/AboutMe";
import SoftSkills from "../../sections/soft-skills/SoftSkills";
import Experience from "../../sections/experience/Experience";
import Education from "../../sections/education/Education";
import { Grid } from "@mui/material";
import Skills from "../../sections/skills/Skills";
import Footer from "../footer/Footer";
import Products from "../../sections/products/Products";
import React from "react";

const BodyContent = (props) => {
  return (
    <>
      <Landing></Landing>
      <AboutMe></AboutMe>
      <SoftSkills></SoftSkills>
      <Grid container spacing={2} sx={{ py: 8 }} id="edex">
        <Grid item xs={12} md={6}>
          <Experience></Experience>
        </Grid>
        <Grid item xs={12} md={6}>
          <Education></Education>
        </Grid>
      </Grid>
      <Skills></Skills>
      <Products></Products>
      <Footer></Footer>
    </>
  );
};

export default BodyContent;
