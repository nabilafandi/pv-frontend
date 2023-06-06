import React from "react";
import { useState } from "react";

import {
  Paper,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Avatar,
  Typography,
  Divider,
  ListItemAvatar,
  ListSubheader,
  Alert,
  // ListItemIcon,
  // Box,
  // Button,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const plantList = [
  {
    name: "Demo Plant 1",
    bills: [
      {
        Date: "April 2023",
        Bill: 78432,
        status: "unpaid",
        kWhUsage: 105,
      },
      {
        Date: "March 2023",
        Bill: 51236,
        status: "paid",
        kWhUsage: 98,
      },
      {
        Date: "February 2023",
        Bill: 92541,
        status: "paid",
        kWhUsage: 112,
      },
      {
        Date: "January 2023",
        Bill: 45671,
        status: "paid",
        kWhUsage: 101,
      },
    ],
  },
  {
    name: "Demo Plant 2",
    bills: [
      {
        Date: "April 2023",
        Bill: 65271,
        status: "unpaid",
        kWhUsage: 115,
      },
      {
        Date: "March 2023",
        Bill: 32412,
        status: "unpaid",
        kWhUsage: 87,
      },
      {
        Date: "February 2023",
        Bill: 85421,
        status: "paid",
        kWhUsage: 103,
      },
      {
        Date: "January 2023",
        Bill: 63482,
        status: "paid",
        kWhUsage: 92,
      },
    ],
  },
  {
    name: "Demo Plant 3",
    bills: [
      {
        Date: "April 2023",
        Bill: 48231,
        status: "unpaid",
        kWhUsage: 99,
      },
      {
        Date: "March 2023",
        Bill: 57293,
        status: "unpaid",
        kWhUsage: 101,
      },
      {
        Date: "February 2023",
        Bill: 36482,
        status: "unpaid",
        kWhUsage: 104,
      },
      {
        Date: "January 2023",
        Bill: 93251,
        status: "paid",
        kWhUsage: 96,
      },
    ],
  },
];
function Payment() {
  return (
    <Paper>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Your Plants
          </ListSubheader>
        }
      >
        {plantList.map((plant, key) => (
          <PlantList
            plantName={plant.name}
            plantBills={plant.bills}
            key={key}
          />
        ))}
      </List>
    </Paper>
  );
}
function PlantList({ plantName, plantBills }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  var theBill = 0;
  var thekWh = 0;
  plantBills.forEach((month) => {
    month.status === "unpaid" ? (theBill += month.Bill) : (theBill += 0);
    thekWh += month.kWhUsage;
  });
  return (
    <>
      <ListItemButton onClick={handleClick} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={plantName} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={plantName}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Unpaid bill: Rp {theBill.toLocaleString()}
                <br />
                Total kWh usage: {thekWh} kWh
              </Typography>
            </React.Fragment>
          }
        />

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {plantBills.map((month, key) => (
            <MonthlyBill
              date={month.Date}
              bill={month.Bill}
              status={month.status}
              kWhUsage={month.kWhUsage}
              key={key}
            />
          ))}
        </List>
      </Collapse>
      <Divider variant="inset" component="li" />
    </>
  );
}

function MonthlyBill(date) {
  return (
    <>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemText
          primary={date.date}
          secondary={"Rp" + date.bill.toLocaleString()}
        />
        {date.status === "paid" ? (
          <Alert severity="success"> Paid </Alert>
        ) : (
          <Alert severity="warning">Unpaid</Alert>
        )}
      </ListItemButton>
      {/* <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <div className="ms-2 me-auto">
          <div>
            <b>{date.date}</b>
          </div>
          <p>Rp {date.bill.toLocaleString()}</p>
        </div>
        {date.status === "paid" ? (
          <Button href="#" style={{ width: "123px" }} variant="success">
            Paid
          </Button>
        ) : (
          <Button href="#" style={{ width: "123px" }} variant="danger">
            Unpaid
          </Button>
        )}
      </ListGroup.Item> */}
    </>
  );
}
export default Payment;
