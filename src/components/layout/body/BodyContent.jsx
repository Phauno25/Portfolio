
import Landing from "../../sections/landing/Landing";
import AboutMe from "../../sections/about/AboutMe";
import SoftSkills from "../../sections/soft-skills/SoftSkills";
import Experience from "../../sections/experience/Experience";
import Education from "../../sections/education/Education";
import { Grid } from "@mui/material";
import Skills from "../../sections/skills/Skills";
import Footer from "../footer/Footer";
import Products from "../../sections/products/Products";
import { ContextData } from "../../../context/contextData";
import React, { useContext, useState } from "react";

const BodyContent = (props) => {
  
  const {pablo} = useContext(ContextData);
  return pablo ? (
    <>
      <Landing></Landing>
      <AboutMe about={pablo.about}></AboutMe>
      <SoftSkills softSkills={pablo.softskills}></SoftSkills>
      <Grid container spacing={2} sx={{py:8}}>
        <Grid item xs={12} md={6}>
          <Experience experience={pablo.experience}></Experience>
        </Grid>
        <Grid item xs={12} md={6}>
          <Education education={pablo.education}></Education>
        </Grid>
      </Grid>
      <Skills skills={pablo.skills}></Skills>
      <Products products={pablo.products}></Products>
      <Footer></Footer>
    </>
  ) : (
    ""
  );
};

export default BodyContent;
