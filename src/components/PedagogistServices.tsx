import { useState } from "react";
import "./PedagogistServices.css"; // Importa gli stili per il componente

// Dati sui servizi offerti da un pedagogista
const services = [
  {
    title: "Consulenza Educativa",
    description:
      "Supporto per orientamento scolastico, consulenza per genitori e educazione affettiva e relazionale.",
  },
  {
    title: "Interventi Psicopedagogici",
    description:
      "Diagnosi e supporto per disturbi dell'apprendimento, difficoltà emotive e comportamentali.",
  },
  {
    title: "Progetti di Inclusione Scolastica",
    description:
      "Progetti per l'integrazione di studenti con bisogni speciali e disabilità.",
  },
  {
    title: "Formazione e Aggiornamento Professionale",
    description:
      "Corsi e seminari per insegnanti, educatori e genitori su temi educativi e psicopedagogici.",
  },
  {
    title: "Sostegno alla Genitorialità",
    description:
      "Supporto nella gestione della genitorialità e nella cura dei figli con difficoltà educative.",
  },
  {
    title: "Interventi Psicoeducativi",
    description:
      "Psicoeducazione per il benessere psicologico e l'autoregolazione emotiva.",
  },
  {
    title: "Laboratori Didattici e Creativi",
    description:
      "Laboratori pratici per lo sviluppo cognitivo, emotivo e sociale dei bambini.",
  },
  {
    title: "Mediazione Familiare e Scolastica",
    description:
      "Mediazione nei conflitti familiari e scolastici per migliorare la comunicazione e risolvere le problematiche.",
  },
  {
    title: "Progetti di Sostegno all’Autonomia",
    description:
      "Percorsi educativi per sviluppare l’autonomia di persone con disabilità o adolescenti.",
  },
  {
    title: "Supporto a Situazioni di Disagio Sociale",
    description:
      "Supporto per minori o giovani adulti in situazioni di disagio sociale o familiare.",
  },
  {
    title: "Orientamento Scolastico e Universitario",
    description:
      "Consulenza per la scelta del percorso scolastico o universitario più adatto.",
  },
];

// Componente principale per visualizzare i servizi
const PedagogistServices = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  // Funzione per gestire l'espansione dei servizi
  const toggleService = (index: any) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="services-container">
      <strong className="services-title">
        Servizi <span className="text-style">Offerti:</span>{" "}
      </strong>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div
              className="service-title"
              onClick={() => toggleService(index)} // Passiamo l'index qui
            >
              <h3>{service.title}</h3>
            </div>
            <div
              className={`service-description ${
                expandedService === index ? "expanded" : ""
              }`}
            >
              {expandedService === index && <p>{service.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PedagogistServices;
