import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import HomePage from "./components/Homepage";
import Registration from "./components/Registration";
import PedagogistServices from "./components/PedagogistServices";

function App() {
  return (
    <>
      <CustomNavbar />
      <Registration />
      <HomePage />
      <PedagogistServices />
    </>
  );
}

export default App;
