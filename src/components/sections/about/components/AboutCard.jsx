import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ContextData } from "../../../../context/contextData";
import AdminButton from "../../../shared/AdminButton";
import EditCard from "./edit/EditCard";
import AdminModal from "../../../shared/AdminModal";

const AboutCard = (props) => {
  const { name, profile, email, city, image } = props.about;
  const [isEdit, setIsEdit] = useState(false);
  const { user } = useContext(ContextData);
  return (
    <>
      <Grid container sx={{ flexDirection: "column" }}>
        <Grid item xs={12}>
          <Box
            component="img"
            src={image}
            sx={{
              width: "100%",
              objectFit: "cover",
              height: "300px",
            }}
          />
        </Grid>
        <Grid item xs={12} sx={{ py: 2, position: "relative" }}>
          <List dense={true}>
            <ListItem>
              <ListItemIcon>
                <Icon color="secondary">person</Icon>
              </ListItemIcon>
              <ListItemText primary="Name" secondary={name} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Icon color="secondary">code</Icon>
              </ListItemIcon>
              <ListItemText primary="Profile" secondary={profile} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Icon color="secondary">email</Icon>
              </ListItemIcon>

              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Icon color="secondary">place</Icon>
              </ListItemIcon>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
          </List>
          {user ? <AdminButton icon="edit" callback={()=> setIsEdit(true)} /> : ""}
        </Grid>
      </Grid>

      <AdminModal title="Edit Profile" open={isEdit} onClose={()=>setIsEdit(false)} component={<EditCard />} />

    </>
  );
};

export default AboutCard;
