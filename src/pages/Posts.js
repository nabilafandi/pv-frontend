import {
  Paper,
  Container,
  List,
  ListItemButton,
  ListSubheader,
  Divider,
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
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const allPost = [
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
    content: `If you've forgotten your dashboard password or need to reset it for any reason, follow these steps: \n
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
    content: `If you've forgotten your dashboard password or need to reset it for any reason, follow these steps:\n
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
function Posts() {
  let { postid } = useParams();
  const post = allPost[postid - 1];
  // const pMapped = post.map((p, key) => {
  //   const postIndex = postid - 1;
  //   return p.title;
  // });

  return post ? (
    <Paper>
      <Container>
        <div style={{ whiteSpace: "pre-line" }}>
          <h3>{post.title}</h3>
          {post.content}
        </div>
      </Container>
    </Paper>
  ) : (
    <Paper>
      <Container>
        <div style={{ whiteSpace: "pre-line" }}>article not found</div>
      </Container>
    </Paper>
  );
}

export default Posts;
