import { Outlet } from "react-router-dom";
import "./FormBackground.css";
const FormBackground = () => {
  return (
    <div className="container-form">
      <div className="container-img-wonderful">
        <div className="image-background" />
      </div>
      <Outlet />
    </div>
  );
};
export default FormBackground;
