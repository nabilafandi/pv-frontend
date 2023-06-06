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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/Payment" element={<Payment />} />
      <Route path="/User" element={<User />} />
      <Route path="/Support" element={<Support />} />
    </Route>
  ) 
);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
