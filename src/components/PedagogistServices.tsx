import "./PedagogistServices.css";
import Service from "./Service";
import { listServices } from "../data/services";

const PedagogistServices = () => {
  return (
    <div className="home-services-container">
      <strong>
        Servizi <span className="text-style">Educativi:</span>
      </strong>
      <div className="home-services-list">
        {listServices.map((listService, index) => {
          return (
            <Service
              titolo={listService.titolo}
              descrizione={listService.descrizione}
              value={listService.value}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};
export default PedagogistServices;
