import React from "react";
import { useSearchParams } from "react-router-dom";
import { Paper, Card, Container, Button, Box, Divider } from "@mui/material";

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
function Receipt() {
  const [searchParams] = useSearchParams();
  const plantName = searchParams.get("plantName");
  const date = searchParams.get("date");

  function plantListQuery(plantList, plantName, date) {
    for (const plant of plantList) {
      if (plant.name === plantName) {
        for (const bill of plant.bills) {
          if (bill.Date === date) {
            return bill;
          }
        }
        break; // Exit the loop if the plant is found
      }
    }
  }

  const theBill = plantListQuery(plantList, plantName, date);

  return (
    <>
      <Paper>
        <Container sx={{ padding: "2%" }}>
          <h1>Payment Receipt</h1>
          <Divider />
          <h2>{plantName}</h2>
          <p>
            <strong>Date:</strong> {theBill.Date}
          </p>
          <p>
            <strong>Status:</strong> {theBill.status}
          </p>
          <p>
            <strong>kWh Usage:</strong> {theBill.kWhUsage + " kWh"}
          </p>
          <p>
            <strong>Amount:</strong> {"Rp " + theBill.Bill.toLocaleString()}
          </p>
          <Box>
            <Button variant="contained" color="success">
              Pay Now
            </Button>
          </Box>
        </Container>
      </Paper>
    </>
  );
}

export default Receipt;
