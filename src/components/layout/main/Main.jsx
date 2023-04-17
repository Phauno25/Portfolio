import React, { useState, useEffect, useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import BodyContent from "../body/BodyContent";
import { Alert, Button, Icon, Tooltip, colors } from "@mui/material";
import { Auth } from "../../../config/firebase";
import { ContextData } from "../../../context/contextData";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const scrollToTarget = (id) => {
  const target = document.getElementById(id);
  target.scrollIntoView({ behavior: "smooth" });
};

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { user, setUser,establishTheme } = useContext(ContextData);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    if (user) {
      Auth.signOut();
      setUser(null);
    } else {
      window.location.href = process.env.PUBLIC_URL + "/#/signin";
    }
  };

  useEffect(() => {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
      }
    });
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            color="primary"
            variant="contained"
            startIcon={<Icon>person</Icon>}
            onClick={() => handleLogin()}
          >
            {user ? "Sign Out" : "Sign In"}
          </Button>
          <Tooltip title="Pink Theme">
          <IconButton onClick={()=>establishTheme("pinkTheme")}>
            <Icon sx={{ color: colors.pink[400] }}>circle</Icon>
          </IconButton>
          </Tooltip>
          <Tooltip title="Blue Theme">
          <IconButton onClick={()=>establishTheme("blueTheme")}>
            <Icon sx={{ color: colors.blue[400] }}>circle</Icon>
          </IconButton>
          </Tooltip>
          <Tooltip title="Orange Theme">
          <IconButton onClick={()=>establishTheme("orangeTheme")}>
            <Icon sx={{ color: colors.orange[400] }}>circle</Icon>
          </IconButton>
          </Tooltip>
          <Tooltip title="Yellow Theme">
          <IconButton onClick={()=>establishTheme("yellowTheme")}>
            <Icon sx={{ color: colors.yellow[400] }}>circle</Icon>
          </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem key={"aboutMe"} disablePadding>
            <ListItemButton onClick={() => scrollToTarget("aboutMe")}>
              <ListItemIcon>
                <Icon>face</Icon>
              </ListItemIcon>
              <ListItemText primary="About Me" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem key={"softskills"} disablePadding>
            <ListItemButton onClick={() => scrollToTarget("softSkills")}>
              <ListItemIcon>
                <Icon>diamond</Icon>
              </ListItemIcon>
              <ListItemText primary="Soft Skills" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem key={"edex"} disablePadding>
            <ListItemButton onClick={() => scrollToTarget("edex")}>
              <ListItemIcon>
                <Icon>school</Icon>
              </ListItemIcon>
              <ListItemText primary="Education & Exp" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem key={"skills"} disablePadding>
            <ListItemButton onClick={() => scrollToTarget("skills")}>
              <ListItemIcon>
                <Icon>code</Icon>
              </ListItemIcon>
              <ListItemText primary="Skills" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem key={"works"} disablePadding>
            <ListItemButton onClick={() => scrollToTarget("products")}>
              <ListItemIcon>
                <Icon>web</Icon>
              </ListItemIcon>
              <ListItemText primary="Works" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <BodyContent></BodyContent>
      </Main>
    </Box>
  );
}
