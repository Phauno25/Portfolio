import { Container, Dialog, DialogTitle, Grid } from "@mui/material";
import React from "react";

const AdminModal = (props) => {
  const { title, component, open,onClose } = props;
  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <Container>{component}</Container>
    </Dialog>
  );
};

export default AdminModal;
