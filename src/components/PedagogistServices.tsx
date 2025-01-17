import "./PedagogistServices.css";
import Service from "./Service";

const PedagogistServices = () => {
  const listServices = [
    {
      titolo: "Consulenza educativa",
      descrizione:
        "Supporto personalizzato per genitori e famiglie, finalizzato a migliorare le dinamiche educative nei bambini e adolescenti.",
    },
    {
      titolo: "Sostegno psicopedagogico DSA",
      descrizione:
        "Interventi per supportare bambini con Disturbi Specifici dell'Apprendimento, utilizzando metodologie personalizzate.",
    },
    {
      titolo: "Formazione insegnanti",
      descrizione:
        "Corsi di aggiornamento su tematiche relative alla gestione della classe e supporto per studenti con difficoltà.",
    },
    {
      titolo: "Valutazione competenze",
      descrizione:
        "Esame delle capacità cognitive, emotive e sociali per individuare difficoltà e sviluppare interventi mirati.",
    },
    {
      titolo: "Sostegno alla genitorialità",
      descrizione:
        "Consulenza per genitori su come affrontare difficoltà educative, emotive e comportamentali dei figli.",
    },
    {
      titolo: "Supporto minori a rischio",
      descrizione:
        "Interventi educativi per bambini e ragazzi in situazioni di vulnerabilità, per prevenire fenomeni di devianza.",
    },
    {
      titolo: "Laboratori socio-emotivi",
      descrizione:
        "Attività pratiche per migliorare le competenze relazionali, l'autocontrollo e la gestione delle emozioni.",
    },
    {
      titolo: "Interventi comportamentali",
      descrizione:
        "Percorsi di sostegno per bambini e adolescenti con problematiche comportamentali, per un cambiamento positivo.",
    },
    {
      titolo: "Orientamento scolastico",
      descrizione:
        "Consulenza per adolescenti e giovani adulti nella scelta del percorso scolastico o professionale in base alle abilità.",
    },
    {
      titolo: "Mediazione familiare",
      descrizione:
        "Supporto nella gestione e risoluzione di conflitti familiari attraverso un approccio che favorisca la comunicazione reciproca.",
    },
    {
      titolo: "Supporto per ansia e stress",
      descrizione:
        "Percorsi di supporto psicologico per la gestione di ansia, stress e altri disagi emotivi legati alla vita quotidiana.",
    },
    {
      titolo: "Educazione sessuale e affettiva",
      descrizione:
        "Consulenza educativa per giovani e famiglie su temi relativi alla sessualità, le emozioni e le relazioni interpersonali.",
    },
  ];

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
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};
export default PedagogistServices;
