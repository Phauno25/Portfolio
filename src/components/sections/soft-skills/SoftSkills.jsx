import React, { useContext, useEffect, useReducer, useState } from "react";
import { Avatar, Box, Container, Grid, Icon, Typography } from "@mui/material";
import AdminButton from "../../shared/AdminButton";
import { ContextData } from "../../../context/contextData";
import EditSoftSkills from "./edit/EditSoftSkills";
import AdminModal from "../../shared/AdminModal";
import portfolioService from "../../../services/portfolioService";
import softSkillsReducer from "./hooks/softSkillsReducer";
import "./softSkills.css";

const initialsoftSkills = null;

const SoftSkills = () => {
  const { user } = useContext(ContextData);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState();
  const [softSkills, dispatch] = useReducer(
    softSkillsReducer,
    initialsoftSkills
  );

  useEffect(() => {
    portfolioService.getCollection("softskills").then((res) => {
      dispatch({ type: "setSoftSkills", payload: res });
    });
  }, []);

  const openModal = (item) => {
    console.log(item);
    setSelectedSkill(item);
    setIsEdit(true);
  };
  return (
    <>
      {softSkills ? (
        <Box
          component="div"
          className="soft_skills_container"
          sx={{ position: "relative", py: 10 }}
          id="softSkills"
        >
          <Container>
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
              {softSkills.map((item) => {
                return (
                  <Grid
                    key={item.id}
                    item
                    xs={12}
                    md={3}
                    sx={{ position: "relative" }}
                  >
                    {user ? (
                      <AdminButton
                        icon="edit"
                        callback={() => openModal(item)}
                      />
                    ) : (
                      ""
                    )}
                    <Avatar
                      sx={{
                        bgcolor: "transparent",
                        margin: "0 auto",
                        width: 60,
                        height: 60,
                      }}
                    >
                      <Icon sx={{ fontSize: 60, color: "text.primary" }}>
                        {item.data.icon}
                      </Icon>
                    </Avatar>
                    <Typography
                      variant="h3"
                      align="center"
                      color="secondary.main"
                    >
                      {item.data.title}
                    </Typography>
                    <Typography align="center">
                      {item.data.description}
                    </Typography>{" "}
                  </Grid>
                );
              })}
            </Grid>
            <AdminModal
              title="Edit Soft Skills"
              open={isEdit}
              onClose={() => setIsEdit(false)}
              component={
                <EditSoftSkills
                  setOpen={setIsEdit}
                  selectedSkill={selectedSkill}
                  dispatch={dispatch}
                />
              }
            />
          </Container>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default SoftSkills;
