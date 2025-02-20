import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import HomePage from "./components/Homepage";
import Registration from "./components/Registration";
import PedagogistServices from "./components/PedagogistServices";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import FormBackground from "./components/FormBackground";

import Footer from "./components/Footer";
import ContactAndBooking from "./components/ContactAndBooking";

function App() {
  const handleLogin = (username: string, password: string) => {
    console.log("Login effettuato con", username, password);
  };

  return (
    <BrowserRouter>
      <CustomNavbar />
      <div className="page-content-container">
        <Routes>
          <Route index element={<HomePage />} />
          <Route element={<FormBackground />}>
            <Route path="registration" element={<Registration />} />
            <Route path="login" element={<LoginForm onLogin={handleLogin} />} />
          </Route>

          <Route path="service" element={<PedagogistServices />} />
          <Route path="/contattami" element={<ContactAndBooking />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
