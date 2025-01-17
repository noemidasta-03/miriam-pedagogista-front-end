import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import HomePage from "./components/Homepage";
import Registration from "./components/Registration";
import PedagogistServices from "./components/PedagogistServices";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import FormBackground from "./components/FormBackground";

import Footer from "./components/Footer";

function App() {
  const handleLogin = (username: string, password: string) => {
    console.log("Login effettuato con", username, password);
  };

  return (
    <BrowserRouter>
      <CustomNavbar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route element={<FormBackground />}>
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<LoginForm onLogin={handleLogin} />} />
        </Route>

        <Route path="service" element={<PedagogistServices />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
