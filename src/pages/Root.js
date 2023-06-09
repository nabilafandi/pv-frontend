import { React, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import SideMenu from "../components/Sidemenu";
import Topmenu from "../components/Topmenu";
import Login from "../pages/Login";

function Root() {
  const [LoggedIn, setLoggedin] = useState(false);
  function handleLogin() {
    setLoggedin(true);
  }
  if (LoggedIn) {
    return (
      <>
        <Topmenu />

        <div style={{ display: "flex", width: "100%" }}>
          <SideMenu />
          <div style={{ width: "100%" }}>
            <div
              style={{
                height: "100px",
              }}
            ></div>

            <main>
              <Container sx={{}}>
                <Outlet></Outlet>
              </Container>
            </main>
          </div>
        </div>
      </>
    );
  }
  return <Login login={handleLogin} />;
}

export default Root;
