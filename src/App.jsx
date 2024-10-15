import { Route, Routes } from "react-router-dom";
import "./App.css";
import RightSidebar from "./Components/RightSidebar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";

import "@fontsource/poppins";
import Navbar from "./Components/Navbar";

const WithNavigations = ({ children }) => {
  return (
    <>
      <Sidebar />

      {children}
      <RightSidebar />
    </>
  );
};

function App() {
  return (
    <div className="w-screen h-screen relative">
      <Routes>
        <Route
          path="/"
          element={
            <WithNavigations>
              {" "}
              <Home />
            </WithNavigations>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
