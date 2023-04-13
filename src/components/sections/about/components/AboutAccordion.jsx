import React, { useContext, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ContextData } from "../../../../context/contextData";
import AdminButton from "../../../shared/AdminButton";
import AdminModal from "../../../shared/AdminModal";
import EditAccordion from "./edit/EditAccordion";

const AboutAccordion = (props) => {
  const { user } = useContext(ContextData);
  const { description } = props.about;
  const { dispatch } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [openProf, setOpenProf] = useState(true);
  const [openPers, setOpenPers] = useState(false);
  const [openConc, setOpenConc] = useState(false);

  const handleProf = (e) => {
    openProf ? setOpenProf(false) : setOpenProf(true);
  };

  const handlePers = (e) => {
    openPers ? setOpenPers(false) : setOpenPers(true);
  };

  const handleConc = (e) => {
    openConc ? setOpenConc(false) : setOpenConc(true);
  };

  return (
    <>
      <Typography
        gutterBottom
        variant="h4"
        color={"secondary.main"}
        component="div"
        sx={{ ml: 2 }}
        position="relative"
      >
        About Me
        {user ? (
          <AdminButton icon="edit" callback={() => setIsEdit(true)} />
        ) : (
          ""
        )}
      </Typography>

      <Accordion expanded={openProf}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={(e) => handleProf(e)}
        >
          <Typography>Proffessional Context</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom sx={{ p: 3 }}>
            {description.proffessional}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          onClick={(e) => handlePers(e)}
        >
          <Typography>Personal Context</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom sx={{ p: 3 }}>
            {description.personal}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          onClick={(e) => handleConc(e)}
        >
          <Typography>Why Me?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom sx={{ p: 3 }}>
            {description.conclusion}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <AdminModal
        title="Edit Profile"
        open={isEdit}
        onClose={() => setIsEdit(false)}
        component={
          <EditAccordion
            setOpen={setIsEdit}
            description={description}
            dispatch={dispatch}
          />
        }
      />
    </>
  );
};

export default AboutAccordion;
