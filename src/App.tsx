import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import BookAppointment from "./pages/BookAppointment/BookAppointment";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="bookAppointment" element={<BookAppointment />} />
    </Routes>
  );
};

export default App;
