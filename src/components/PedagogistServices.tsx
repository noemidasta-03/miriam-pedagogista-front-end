import React from "react";
import "./PedagogistServices.css";
import Service from "./Service";

const PedagogistServices: React.FC = () => {
  return (
    <div className="services-container">
      <h2 className="title-service">
        <strong>Servizi</strong>
        <span className="text-style">Offerti:</span>
      </h2>
      <Service />
    </div>
  );
};

export default PedagogistServices;
