import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Login from "./pages/Login/Login";
import Staff from "./pages/Staff/Staff";
import Settings from "./pages/Settings/Settings";
import BookAppointment from "./pages/BookAppointment/BookAppointment";
import { User, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import StaffEdit from "./pages/StaffEdit/StaffEdit";

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
          {/* Additional routes can be uncommented as needed */}
          {/* <Route path="/resources" element={<Resources />} /> */}
          {/* <Route path="/resources/edit" element={<EditResources />} /> */}
          {/* <Route path="/resources/:resourceId" element={<ResourceItem />} /> */}
          {/* <Route path="/clients" element={<Clients />} /> */}
          {/* <Route path="/clients/create" element={<CreateClient />} /> */}
          {/* <Route path="/clients/edit" element={<EditClient />} /> */}
          {/* <Route path="/clients/:clientId" element={<ClientProfile />} /> */}
          <Route path="/staff" element={<Staff variant={theme} />} />
          <Route path="/staff/client/edit" element={<StaffEdit variant={theme}/>} />
          <Route path="/settings" element={<Settings variant={theme} setTheme={toggleTheme} font={font} setFont={changeFont} />} />
        </Routes>
      )}
    </div>
  </>
  );
};

export default App;