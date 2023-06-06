import React, { useState } from "react";
import {
  Button,
  Paper,
  Box,
  Grid,
  OutlinedInput,
  InputLabel,
  FormControl,
  // TextField,
  // Container,
  // IconButton,
  // Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const User = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Account />
      <Profile />
    </Box>
  );
};
const Account = () => {
  const username = "qwewqwe";
  const accountID = "9127419";
  return (
    <Paper
      sx={{
        padding: "3%",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <FormControl variant="standard" disabled="true" fullWidth>
            <InputLabel /> Account ID
            <OutlinedInput value={accountID} />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="standard" disabled="true" fullWidth>
            <InputLabel /> Username
            <OutlinedInput value={username} />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button aria-label="edit" variant="contained">
              Change Password
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

const Profile = () => {
  const [formState, setFormState] = useState({
    fName: "Nabil",
    lName: "Afandi",
    address:
      "Kompleks Puri Syailendra Jl. Lemah Neundeut No.Kav-30, Sukawarna, Setrasari, West Java",
    phone: "0812345678",
    email: "nabil@mail.com",
  });

  const handleChange = ({ target }) => {
    // const name = target.name;
    // const value = target.value;
    // setFormState({
    //   [name]: value,
    // });
    const { name, value } = target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
    // Save the updated profile information to the server
    // You can make an API call here to update the user's profile
  };

  return (
    <Paper
      sx={{
        padding: "3%",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <FormControl variant="standard" disabled={!editing} fullWidth>
            <InputLabel /> First Name
            <OutlinedInput
              name="fName"
              value={formState.fName}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="standard" disabled={!editing} fullWidth>
            <InputLabel /> Last Name
            <OutlinedInput
              name="lName"
              value={formState.lName}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl variant="standard" disabled={!editing} fullWidth>
            <InputLabel /> Address
            <OutlinedInput
              name="address"
              value={formState.address}
              onChange={handleChange}
              multiline
              rows={4}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="standard" disabled={!editing} fullWidth>
            <InputLabel /> Email
            <OutlinedInput
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="standard" disabled={!editing} fullWidth>
            <InputLabel /> Phone
            <OutlinedInput
              name="phone"
              value={formState.phone}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {editing ? (
              <Button
                aria-label="edit"
                variant="contained"
                onClick={handleSave}
              >
                <SaveIcon />
                Save
              </Button>
            ) : (
              <Button
                aria-label="edit"
                variant="contained"
                onClick={() => setEditing(true)}
              >
                <EditIcon /> Edit Profile
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default User;
