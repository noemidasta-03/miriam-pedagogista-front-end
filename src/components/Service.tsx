import "./Service.css";
interface ServiceProps {
  titolo: string;
  descrizione: string;
  index: number;
}
const Service: React.FC<ServiceProps> = ({ titolo, descrizione, index }) => {
  return (
    <div key={index} className="service-card">
      <h3>{titolo}</h3>
      <p>{descrizione}</p>
      <button
        className="service-button"
        onClick={() => alert(`Dettagli su: ${titolo}`)}
      >
        Scopri di più
      </button>
    </div>
  );
};

export default Service;
