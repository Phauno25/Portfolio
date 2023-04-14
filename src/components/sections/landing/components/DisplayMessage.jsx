import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const DisplayMessage = (props) => {
  let { first, second, third } = props.landing.message;
  let [intervalId, setIntervalId] = useState(0);
  let [displayMsg,setDisplayMsg] = useState("");

  useEffect(()=> {
    clearInterval(intervalId);
    intervalMessage();
  },[props.message])

  const intervalMessage = () => {
    let mensaje = `${first}|`;
    let index = 0;
    let status = 1;
    let text = "";
    let counter = 0;


    const interval = setInterval(() => {
      switch (status) {
        case 0:
          text = text.slice(0, -1);
          if (text === "") {
            status = 1;
            index = 0;
          }
          setDisplayMsg(text);
          break;
        case 1:
          text += mensaje[index];
          index++;
          if (text === mensaje) {
            status = 2;

            switch (mensaje) {
              case `${first}|`:
                mensaje = `${second}|`;
                setDisplayMsg(text.slice(0, -1));
                break;
              case `${second}|`:
                mensaje = `${third}|`;
                setDisplayMsg(text.slice(0, -1));
                break;
              default:
                mensaje = `${first}|`;
                setDisplayMsg(text.slice(0, -1));
                break;
            }
          } else {
            setDisplayMsg(text + "|");
            break;
          }

        case 2:
          if ([0, 4, 8, 12, 16].includes(counter) && counter < 16) {
            text = text.slice(0, -1);
            setDisplayMsg(text);
          }
          if ([1, 5, 9, 13].includes(counter) && counter < 16) {
            status = 3;
          }
          counter++;
          break;
        case 3:
          if (counter < 13) {
            if ([2, 6, 10, 14].includes(counter)) {
              text = text + "|";
              setDisplayMsg(text);
            }
            if ([3, 7, 11, 15].includes(counter) && counter < 16) {
              status = 2;
            }
            counter++;
          } else {
            status = 0;
            counter = 0;
          }

          break;
      }
    }, 100);
    setIntervalId(interval);
  };

  return (
    <Typography
      id="lali"
      color="white"
      variant="h6"
      sx={{ width: "30%", display: "block", margin: "0 auto" }}
    >
      {displayMsg}
    </Typography>
  );
};

export default DisplayMessage;
