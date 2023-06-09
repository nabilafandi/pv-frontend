import { ThemeProvider } from "@mui/material";
import Theme from "./Theme";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Root from "./pages/Root";
// import { Container } from "@mui/material";
// import SideMenu from "./components/Sidemenu";
// import Topmenu from "./components/Topmenu";
import Payment from "./pages/Payment";
import User from "./pages/User";
import Support from "./pages/Support";
import Posts from "./pages/Posts";
import Receipt from "./pages/Receipt";
import { GoogleOAuthProvider } from "@react-oauth/google";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="Payment" element={<Payment />} />
      <Route path="Payment/receipt" element={<Receipt />} />
      <Route path="User" element={<User />} />
      <Route path="Support" element={<Support />} />
      <Route path="Support/:postid" element={<Posts />} />
    </Route>
  )
);

const clientId =
  "856780123921-r9coj8io4n7c6m0s5lt3ctrnaaksjpcb.apps.googleusercontent.com";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GoogleOAuthProvider clientId={clientId}>
          <RouterProvider router={router} />
        </GoogleOAuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
