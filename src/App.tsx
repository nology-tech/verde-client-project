import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Login from "./pages/Login/Login";
import Settings from "./pages/Settings/Settings";
import { useState } from "react";
import BookAppointment from "./pages/BookAppointment/BookAppointment";

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  /**
   * Toggles the app's theme between light and dark modes.
   * It updates the 'theme' state to either 'light' or 'dark',
   * depending on its current value. The updated theme is then applied
   * to the entire app.
   */
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home variant={theme} />} />
      <Route path="/book-appointment" element={<BookAppointment />} />

      {/* <Route path="/resources" element={<Resources />} /> */}
      {/* <Route path="/resources/edit" element={<EditResources />} /> */}
      {/* <Route path="/resources/:resourceId" element={<ResourceItem />} /> */}

      {/* <Route path="/clients" element={<Clients />} /> */}
      {/* <Route path="/clients/create" element={<CreateClient />} /> */}
      {/* <Route path="/clients/edit" element={<EditClient />} /> */}
      {/* <Route path="/clients/:clientId" element={<ClientProfile />} /> */}

      {/* <Route path="/staff" element={<Staff />} /> */}
      <Route
        path="/settings"
        element={<Settings variant={theme} setTheme={toggleTheme} />}
      />
    </Routes>
  );
};

export default App;
