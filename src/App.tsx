import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Login from "./pages/Login/Login";
import Staff from "./pages/Staff/Staff";
import Settings from "./pages/Settings/Settings";
import BookAppointment from "./pages/BookAppointment/BookAppointment";
import Resources from "./pages/Resources/Resources";
import { User, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import StaffListBooking from "./pages/StaffListBooking/StaffListBooking";
import { ClientProfileList } from "./data/ClientProfileList";



import StaffEdit from "./pages/StaffEdit/StaffEdit";
import { Clients } from "./pages/Clients/Clients";
import ClientActive from "./pages/ClientActive/ClientActive";
import ResourceItem from "./pages/ResourceItem/ResourceItem";
import RequestResources from "./pages/RequestResource/RequestResource";
import StaffMobile from "./pages/StaffMobile/StaffMobile";

const App = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser: User | null) => {
      if (authUser) {
        setUser(authUser);
      }
      else{
        setUser(null)
        navigate("/")
      }
    });
    
    return () => unsubscribe();
  }, [navigate]);
  
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [font, setFont] = useState<"modern" | "tech">("modern");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const changeFont = () => {
    setFont(font === "modern" ? "tech" : "modern")
  }

  return (
    <>
    <div className={font}>
    <Routes>
      <Route path="/" element={<Login />} />
      </Routes>

      {user && (
        <Routes>
          <Route path="/home" element={<Home variant={theme} />} />
          <Route path="/book-appointment" element={<BookAppointment variant={theme}/>} />
          <Route path={`/bookings/:bookingsId`} element={<StaffListBooking variant={theme}/> }   />  
          {/* Additional routes can be uncommented as needed */}
          <Route path="/resources" element={<Resources variant={theme} />} />
          <Route path="/resources/create" element={<RequestResources variant={theme} />} />
          <Route path="/resources/:resourceId" element={<ResourceItem variant={theme} />} />
          {<Route path="/clients" element={<Clients variant={theme}/>} />}
          <Route path="/staff/:staffId" element={<StaffMobile variant={theme}/>}/>
          {/* <Route path="/clients/create" element={<CreateClient />} /> */}
          {/* <Route path="/clients/edit" element={<EditClient />} /> */}
          <Route path="/clients/:clientId" element={<ClientActive variant={theme} clientInfoList={ClientProfileList} />} />
          <Route path="/staff" element={<Staff variant={theme} />} />
          <Route path={`/bookings/:bookingsId/:clientId`} element={<StaffEdit variant={theme}/>} />
          <Route path="/settings" element={<Settings variant={theme} setTheme={toggleTheme} font={font} setFont={changeFont} />} />
        </Routes>
      )}
    </div>
  </>
  );
};

export default App;