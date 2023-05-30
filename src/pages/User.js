import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Box,
  Grid,
  Container,
  IconButton,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const User = () => {
  return (
    <>
      <div>
        {/* <Account /> */}
        <Profile />
      </div>
    </>
  );
};
const Account = () => {
  return <Paper> Balance = ssss</Paper>;
};

const Profile = () => {
  const textFieldVariant = "outlined";
  const textFieldMargin = "dense";
  const [balance, setBalance] = useState("100222");
  const [username, setUsername] = useState("nabil");
  const [password, setPassword] = useState("123456");
  const [fName, setfName] = useState("Nabil ");
  const [lName, setlName] = useState("Afandi");
  const [address, setAddress] = useState(
    "Kompleks Puri Syailendra Jl. Lemah Neundeut No.Kav-30, Sukawarna, Setrasari, West Java"
  );
  const [phone, setPhone] = useState("08123456789");
  const [email, setEmail] = useState("nabil@mail.com");
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
    // Save the updated profile information to the server
    // You can make an API call here to update the user's profile
  };
  const handleChangePassword = () => {
    setEditing(false);
    // Save the updated profile information to the server
    // You can make an API call here to update the user's profile
  };

  return (
    <Paper>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              notched
              variant={textFieldVariant}
              margin={textFieldMargin}
              label="First Name"
              value={fName}
              onChange={(e) => setfName(e.target.value)}
              disabled={!editing}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant={textFieldVariant}
              margin={textFieldMargin}
              label="Last Name"
              value={lName}
              onChange={(e) => setlName(e.target.value)}
              disabled={!editing}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant={textFieldVariant}
              margin={textFieldMargin}
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              multiline
              rows={4}
              disabled={!editing}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant={textFieldVariant}
              margin={textFieldMargin}
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!editing}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant={textFieldVariant}
              margin={textFieldMargin}
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={!editing}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                // padding: "1%",
              }}
            >
              {editing ? (
                <Button
                  aria-label="edit"
                  size="small"
                  variant="contained"
                  onClick={handleSave}
                  fullWidth
                >
                  <SaveIcon />
                  Save
                </Button>
              ) : (
                <Button
                  aria-label="edit"
                  variant="contained"
                  margin={textFieldMargin}
                  size="small"
                  onClick={() => setEditing(true)}
                  fullWidth
                >
                  <EditIcon /> Edit Profile
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default User;
