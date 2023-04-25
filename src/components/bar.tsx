import MenuIcon from "@mui/icons-material/Menu";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext, useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { LoginContext } from "../context/loginContext";
import React from "react";

const Assets = styled.div`
  display: flex;
  & div {
    position: relative;
    margin: 0 40px;
    & p {
      position: "absolute";
      font-size: 8px;
      background-color: #e23428;
      border-radius: 5px;
      font-weight: 700;
      top: -3px;
      right: -10px;
      padding: 1px 2px;
      color: white;
    }
  }
`;

const secStyle = {
  display: "flex",
  width: "100%",
  backgroundColor: "white",
  marginBottom: "20px",
  justifyContent: "space-between",
  padding: "5px 30px",
};

export const Bar: object = ({ setChecked }): JSX.Element => {
  const [state, setState] = useState(1);
  const { dispatchLogin } = useContext<any>(LoginContext);

  const handleLogout = () => {
    dispatchLogin({ type: "logout" });
  };

  const handleShow = () => {
    if (state === 1) {
      setChecked({ check: false, marleft: "" });
      setState(0);
    } else {
      setChecked({ check: true, marleft: "20%" });
      setState(1);
    }
  };

  return (
    <section style={secStyle}>
      <Box>
        <MenuIcon onClick={() => handleShow()} />
      </Box>
      <Assets>
        <div>
          <EmailOutlinedIcon />
          <p>000</p>
        </div>
        <div>
          <ChatOutlinedIcon />
          <p>000</p>
        </div>
        <LogoutIcon id="cypress-logout" onClick={() => handleLogout()} />
      </Assets>
    </section>
  );
};
