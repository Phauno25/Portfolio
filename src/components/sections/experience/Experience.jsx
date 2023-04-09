import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import React, { useContext } from "react";
import { Box, Icon, Paper, Typography } from "@mui/material";
import AdminButton from "../../shared/AdminButton";
import { ContextData } from "../../../context/contextData";

const Experience = (props) => {
  const { experience } = props;
  const { user } = useContext(ContextData);

  return (
    <Box component={"div"}>
      <Typography
        variant="h4"
        color="secondary"
        align="center"
        sx={{ position: "relative" }}
      >
        Experience
        {user ? (
          <>
            <AdminButton icon="edit" />
            <AdminButton icon="add_circle" />
          </>
        ) : (
          ""
        )}
      </Typography>
      <Typography align="center">
        From where I started to where I am now
      </Typography>
      <Timeline position="alternate">
        {experience.map((item, index) => {
          return (
            <TimelineItem>
              <TimelineOppositeContent
                align={index % 2 === 0 ? "right" : "left"}
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              >
                {item.dateFrom} - {item.dateTo}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined">
                  <Icon>{item.icon}</Icon>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  {item.workplace}
                </Typography>
                <Typography color="grey.400">{item.description}</Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
};

export default Experience;
