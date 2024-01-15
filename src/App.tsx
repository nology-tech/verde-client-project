import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Login from "./pages/Login/Login";
import BookAppointment from "./pages/BookAppointment/BookAppointment";

const App = () => {

  const navigate = useNavigate()

  const authorization = () => {
    if (window.localStorage.getItem('isAuth') === 'false') {
      navigate('/')
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home variant="light" authorization={authorization}/>} />
      <Route path="/book-appointment" element={<BookAppointment authorization={authorization} />} />
      {/* <Route path="/book-appointment" element={<BookAppointment />} /> */}

      {/* <Route path="/resources" element={<Resources />} /> */}
      {/* <Route path="/resources/edit" element={<EditResources />} /> */}
      {/* <Route path="/resources/:resourceId" element={<ResourceItem />} /> */}

      {/* <Route path="/clients" element={<Clients />} /> */}
      {/* <Route path="/clients/create" element={<CreateClient />} /> */}
      {/* <Route path="/clients/edit" element={<EditClient />} /> */}
      {/* <Route path="/clients/:clientId" element={<ClientProfile />} /> */}

      {/* <Route path="/staff" element={<Staff />} /> */}
      {/* <Route path="/settings" element={<Settings />} /> */}
      
    </Routes>
  );
};

export default App;
