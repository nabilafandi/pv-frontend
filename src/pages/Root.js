import React from "react";

import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import SideMenu from "../components/Sidemenu";
import Topmenu from "../components/Topmenu";
import Payment from "../pages/Payment";
import User from "../pages/User";
import Support from "../pages/Support";

function Root() {
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
              {/* <Routes>
                <Route path="payment" element={<Payment />} />
                <Route path="user" element={<User />} />
                <Route path="Support" element={<Support />} />
              </Routes> */}
            </Container>
          </main>
        </div>
      </div>
    </>
  );
}

export default Root;
