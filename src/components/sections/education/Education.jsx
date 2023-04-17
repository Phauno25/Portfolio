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
import EditEducation from "./edit/EditEducation";
import AdminModal from "../../shared/AdminModal";
import portfolioService from "../../../services/portfolioService";
import educationReducer from "./hooks/educationReducer";

const initialEducation = null;

const Education = () => {
  const { user } = useContext(ContextData);
  const [isEdit, setIsEdit] = useState(false);
  const [editRequest, setEditRequest] = useState();
  const [selectedEducation, setSelectedEducation] = useState();
  const [education, dispatch] = useReducer(educationReducer, initialEducation);

  useEffect(() => {
    portfolioService.getCollection("education").then((res) => {
      dispatch({ type: "setEducation", payload: res });
    });
  }, []);

  const openModal = (item, request) => {
    setEditRequest(request);
    setSelectedEducation(item);
    setIsEdit(true);
  };

  return (
    <>
      {education ? (
        <Box component={"div"}>
          <Typography
            variant="h4"
            color="secondary"
            align="center"
            sx={{ position: "relative" }}
          >
            Education
          </Typography>
          <Typography align="center">Places where I was formed</Typography>
          <Timeline position="alternate">
            {education.map((item, index) => {
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
                        index < education.length - 1 ? "outlined" : "filled"
                      }
                    >
                      <Icon>{item.data.icon}</Icon>
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      {item.data.title}
                    </Typography>
                    <Typography color="grey.400">{item.data.place}</Typography>
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
                  startIcon={<Icon>add_circle</Icon>}
                  variant="contained"
                  color="primary"
                  onClick={() => openModal("", "add")}
                >
                  ADD EDUCATION
                </Button>
              </Grid>
            </Grid>
          ) : (
            ""
          )}
          <AdminModal
            title="Edit Education"
            open={isEdit}
            onClose={() => setIsEdit(false)}
            component={
              <EditEducation
                setOpen={setIsEdit}
                selectedEducation={selectedEducation}
                dispatch={dispatch}
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

export default Education;
