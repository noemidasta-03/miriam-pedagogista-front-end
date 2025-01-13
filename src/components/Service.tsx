import React from "react";

interface ServiceType {
  title: string;
  description: string;
}

const Service: React.FC = () => {
  const services: ServiceType[] = [
    {
      title: "Consulenza Educativa",
      description: "Supporto per orientamento scolastico...",
    },
    {
      title: "Interventi Psicopedagogici",
      description: "Diagnosi e supporto per disturbi...",
    },
    {
      title: "Progetti di Inclusione Scolastica",
      description: "Progetti per l'integrazione...",
    },
    {
      title: "Formazione e Aggiornamento Professionale",
      description: "Corsi e seminari per insegnanti...",
    },
    {
      title: "Sostegno alla Genitorialità",
      description: "Supporto nella gestione della genitorialità...",
    },
    {
      title: "Interventi Psicoeducativi",
      description: "Psicoeducazione per il benessere psicologico...",
    },
    {
      title: "Laboratori Didattici e Creativi",
      description: "Laboratori per lo sviluppo cognitivo...",
    },
    {
      title: "Mediazione Familiare e Scolastica",
      description: "Mediazione nei conflitti...",
    },
    {
      title: "Progetti di Sostegno all’Autonomia",
      description: "Percorsi per sviluppare l’autonomia...",
    },
    {
      title: "Supporto a Situazioni di Disagio Sociale",
      description: "Supporto per minori e giovani adulti...",
    },
    {
      title: "Orientamento Scolastico e Universitario",
      description: "Consulenza per la scelta del percorso scolastico...",
    },
    {
      title: "Sostegno Psicopedagogico per Adolescenti",
      description: "Supporto per affrontare le sfide scolastiche...",
    },
  ];

  return (
    <div>
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Service;
