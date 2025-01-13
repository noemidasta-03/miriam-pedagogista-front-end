import "./Service.css";
interface ServiceProps {
  titolo: string;
  descrizione: string;
  index: number;
  primaryColor: string;
  secondaryColor: string | null;
}
const Service: React.FC<ServiceProps> = ({
  titolo,
  descrizione,
  index,
  primaryColor,
  secondaryColor,
}) => {
  return (
    <div className="background" style={{ backgroundColor: primaryColor }}>
      <div className="info">
        <h3 className="title">{titolo}</h3>
        <div className="description">{descrizione}</div>
      </div>
      <div
        className="bottom-cut"
        style={{ backgroundColor: secondaryColor ?? "" }}
      ></div>
    </div>
  );
};

export default Service;
