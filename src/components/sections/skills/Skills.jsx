import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Icon,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { ContextData } from "../../../context/contextData";
import AdminButton from "../../shared/AdminButton";
import AdminModal from "../../shared/AdminModal";
import EditSkills from "./edit/EditSkills";
import portfolioService from "../../../services/portfolioService";
import skillsReducer from "./hooks/skillsReducer";

const initialSkills = null;

const Skills = () => {
  const { user } = useContext(ContextData);
  const [isEdit, setIsEdit] = useState(false);
  const [editRequest, setEditRequest] = useState();
  const [selectedSkill, setSelectedSkill] = useState();
  const [skills, dispatch] = useReducer(skillsReducer, initialSkills);

  useEffect(() => {
    portfolioService.getCollection("skills").then((res) => {
      dispatch({ type: "setSkills", payload: res });
    });
  }, []);

  const openModal = (item,request) => {
    setEditRequest(request);
    setSelectedSkill(item);
    setIsEdit(true);
  };

  return (
    <>
      {skills ? (
        <Box component={"div"} id="skills" sx={{ py: 8 }}>
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
                  <Grid key={item.id} item xs={4} sm={2} sx={{ position: "relative" }}>
                    {user ? (
                      <AdminButton
                        icon="edit"
                        callback={() => openModal(item,"edit")}
                      />
                    ) : (
                      ""
                    )}
                    <Avatar
                      sx={{
                        bgcolor: "transparent",
                        margin: "0 auto",
                        width: 40,
                        height: 40,
                      }}
                      src={item.data.image}
                    />

                    <Typography variant="h6" align="center" color="secondary">
                      {item.data.title}
                    </Typography>
                    <Typography variant="body2" align="center" color="white">
                      {item.data.description}
                    </Typography>
                  </Grid>
                );
              })}
              {user ? (
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    startIcon={<Icon>add_circle</Icon>}
                    variant="contained"
                    color="primary"
                    onClick={()=>openModal("","add")}
                  >
                    ADD SKILL
                  </Button>
                </Grid>
              ) : (
                ""
              )}
            </Grid>
          </Container>
          <AdminModal
            title="Edit Soft Skills"
            open={isEdit}
            onClose={() => setIsEdit(false)}
            component={
              <EditSkills setOpen={setIsEdit} dispatch={dispatch} request={editRequest} selectedSkill={selectedSkill} />
            }
          />
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default Skills;
