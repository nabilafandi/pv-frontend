import { Routes, Route, Link, NavLink, useParams } from "react-router-dom";
import {
  React,
  // useState
} from "react";

import {
  Paper,
  List,
  ListItemButton,
  ListItem,
  ListSubheader,
  // Box,
  // ListItemIcon,
  ListItemText,
  // Collapse,
  // Avatar,
  // Typography,
  // Divider,
  // ListItemAvatar,
  // Button,
  // Alert,
} from "@mui/material";

const post = [
  {
    title: "How to Reset Your Dashboard Password",
    content: `If you've forgotten your dashboard password or need to reset it for any reason, follow these steps:
    1.  On the dashboard login page, click on the "Forgot Password" link.
    2. Enter the email address associated with your dashboard account.
    3. Check your email inbox for a password reset link.
    4. Click on the link provided in the email.
    5. You will be redirected to a page where you can enter a new password.
    6. Choose a strong, secure password and enter it in the designated fields.
    7. Click on "Reset Password" to save your new password.
    8. You can now log in to your dashboard using your updated credentials.
    If you encounter any issues during this process, please reach out to our support team for further assistance.`,
  },
  {
    title: "Troubleshooting Dashboard Connectivity Issues",
    content: `If you've forgotten your dashboard password or need to reset it for any reason, follow these steps:
    1.  On the dashboard login page, click on the "Forgot Password" link.
    2. Enter the email address associated with your dashboard account.
    3. Check your email inbox for a password reset link.
    4. Click on the link provided in the email.
    5. You will be redirected to a page where you can enter a new password.
    6. Choose a strong, secure password and enter it in the designated fields.
    7. Click on "Reset Password" to save your new password.
    8. You can now log in to your dashboard using your updated credentials.
    If you encounter any issues during this process, please reach out to our support team for further assistance.`,
  },
  {
    title: "Understanding Dashboard Permissions",
    content: `If you've forgotten your dashboard password or need to reset it for any reason, follow these steps:
    1.  On the dashboard login page, click on the "Forgot Password" link.
    2. Enter the email address associated with your dashboard account.
    3. Check your email inbox for a password reset link.
    4. Click on the link provided in the email.
    5. You will be redirected to a page where you can enter a new password.
    6. Choose a strong, secure password and enter it in the designated fields.
    7. Click on "Reset Password" to save your new password.
    8. You can now log in to your dashboard using your updated credentials.
    If you encounter any issues during this process, please reach out to our support team for further assistance.`,
  },
];

function Support() {
  return (
    <>
      <Paper>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Frequently Asked Questions
            </ListSubheader>
          }
        >
          {post.map((post, key) => (
            <PostList
              title={post.title}
              content={post.content}
              postid={(key + 1).toString()}
            />
          ))}
        </List>
      </Paper>
    </>
  );
}

function PostList({ title, content, postid }) {
  return (
    <ListItem>
      <p>
        <NavLink to={postid}>{title}</NavLink>
      </p>
    </ListItem>
  );
}

export default Support;
