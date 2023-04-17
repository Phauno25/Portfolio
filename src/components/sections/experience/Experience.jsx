import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { Box, Button, Grid, Icon, Paper, Typography } from "@mui/material";
import AdminButton from "../../shared/AdminButton";
import { ContextData } from "../../../context/contextData";
import AdminModal from "../../shared/AdminModal";
import EditExperience from "./edit/EditExperience";
import portfolioService from "../../../services/portfolioService";
import experienceReducer from "./hooks/experienceReducer";

const initialExperience = null;

const Experience = () => {
  const { user } = useContext(ContextData);
  const [isEdit, setIsEdit] = useState(false);
  const [editRequest, setEditRequest] = useState();
  const [selectedExperience, setSelectedExperience] = useState();
  const [experience, dispatch] = useReducer(
    experienceReducer,
    initialExperience
  );

  useEffect(() => {
    portfolioService.getCollection("experience").then((res) => {
      dispatch({ type: "setExperience", payload: res });
    });
  }, []);

  const openModal = (item, request) => {
    setEditRequest(request);
    setSelectedExperience(item);
    setIsEdit(true);
  };

  return (
    <>
      {experience ? (
        <Box component={"div"}>
          <Typography
            variant="h4"
            color="secondary"
            align="center"
            sx={{ position: "relative" }}
          >
            Experience
          </Typography>
          <Typography align="center">
            From where I started to where I am now
          </Typography>
          <Timeline position="alternate">
            {experience.map((item, index) => {
              return (
                <TimelineItem key={item.id} id={item.id}>
                  <TimelineOppositeContent
                    align={index % 2 === 0 ? "right" : "left"}
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.data.dateFrom} - {item.data.dateTo}
                    {user ? (
                      <AdminButton
                        icon="edit"
                        callback={() => openModal(item, "edit")}
                      />
                    ) : (
                      ""
                    )}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      color="secondary"
                      variant={
                        index < experience.length - 1 ? "outlined" : "filled"
                      }
                    >
                      <Icon>{item.data.icon}</Icon>
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      {item.data.workplace}
                    </Typography>
                    <Typography color="grey.400">
                      {item.data.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
          {user ? (
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  onClick={() => openModal("", "add")}
                  startIcon={<Icon>add_circle</Icon>}
                  variant="contained"
                  color="primary"
                >
                  ADD EXPERIENCE
                </Button>
              </Grid>
            </Grid>
          ) : (
            ""
          )}
          <AdminModal
            title="Edit Experience"
            open={isEdit}
            onClose={() => setIsEdit(false)}
            component={
              <EditExperience
                setOpen={setIsEdit}
                dispatch={dispatch}
                selectedExperience={selectedExperience}
                request={editRequest}
              />
            }
          />
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default Experience;
