import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home variant="light" />} />
      {/* <Route path="/resources" element={<Resources />} /> */}
    </Routes>
  );
};

export default App;
