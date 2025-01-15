import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import HomePage from "./components/Homepage";
import Registration from "./components/Registration";
import PedagogistServices from "./components/PedagogistServices";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";

function App() {
  const handleLogin = (username: string, password: string) => {
    console.log("Login effettuato con", username, password);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomNavbar />}>
          <Route index element={<HomePage />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="service" element={<PedagogistServices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
