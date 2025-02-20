import { Link } from "react-router-dom";
import "./Service.css";
interface ServiceProps {
  titolo: string;
  descrizione: string;
  value: string;
  index: number;
}
const Service: React.FC<ServiceProps> = ({
  titolo,
  descrizione,
  value,
  index,
}) => {
  return (
    <div key={index} className="service-card">
      <h3>{titolo}</h3>
      <p>{descrizione}</p>
      <Link to={"/contattami?servizio=" + value}>
        <button className="service-button">Scopri di più</button>
      </Link>
    </div>
  );
};

export default Service;
