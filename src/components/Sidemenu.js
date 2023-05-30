import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/Assessment";
import PaymentOutlinedIcon from "@mui/icons-material/Payment";
import PersonIcon from "@mui/icons-material/Person";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Typography, Toolbar } from "@mui/material";
import Logo from "./logo1.png";
function SideMenu() {
  return (
    <>
      <Sidebar
        style={{
          height: "100vh",
          // background: "background",
          color: "#A3AED0",
          border: "none",
          top: "0",
          // position: "fixed",
        }}
      >
        <Toolbar
          sx={{
            height: 100,
            justifyContent: "center",
            color: "#EB5765",
          }}
        >
          <img src={Logo} alt="logo" />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <p
              style={{
                lineHeight: "90%",
              }}
            >
              <b>
                Mega Power <br /> Tekindo
              </b>
              <br /> DASHBOARD
            </p>
          </Typography>
        </Toolbar>
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <div>
            <MenuItem icon={<HomeOutlinedIcon />}>Plants</MenuItem>
            <MenuItem icon={<AssessmentOutlinedIcon />}>Reports</MenuItem>
            <MenuItem
              component={<Link to="payment" className="link" />}
              icon={<PaymentOutlinedIcon />}
            >
              Payments
            </MenuItem>
          </div>
          <br />
          <div
            style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
            }}
          >
            <MenuItem
              component={<Link to="user" className="link" />}
              icon={<PersonIcon />}
            >
              User
            </MenuItem>
            <MenuItem icon={<SettingsOutlinedIcon />}>Settings</MenuItem>
            <MenuItem
              component={<Link to="support" className="link" />}
              icon={<LocalPhoneOutlinedIcon />}
            >
              Support
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
}

export default SideMenu;
