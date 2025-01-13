import "./PedagogistServices.css";
import Service from "./Service";

const PedagogistServices = () => {
  const listServices = [
    {
      titolo: "Consulenza educativa individuale",
      descrizione:
        "Supporto personalizzato per genitori e famiglie, finalizzato a migliorare le dinamiche educative e di apprendimento nei bambini e adolescenti.",
      color: "#efc883",
    },
    {
      titolo: "Sostegno psicopedagogico per bambini con DSA",
      descrizione:
        "Interventi mirati a supportare bambini con Disturbi Specifici dell'Apprendimento, utilizzando metodologie personalizzate per favorire il loro successo scolastico.",
      color: "beige",
    },
    {
      titolo: "Formazione per insegnanti",
      descrizione:
        "Corsi di aggiornamento per insegnanti su tematiche relative alla gestione della classe, strategie educative inclusive e supporto per studenti con difficoltà.",
      color: "#efc883",
    },
    {
      titolo: "Valutazione delle competenze cognitive e relazionali",
      descrizione:
        "Esame delle capacità cognitive, emotive e sociali di bambini e adolescenti, per individuare eventuali difficoltà e sviluppare interventi mirati.",
      color: "beige",
    },
    {
      titolo: "Sostegno alla genitorialità",
      descrizione:
        "Consulenza per genitori su come affrontare le difficoltà educative, emotive e comportamentali dei figli, migliorando la comunicazione familiare.",
      color: "#efc883",
    },
    {
      titolo: "Supporto educativo per minori a rischio",
      descrizione:
        "Interventi educativi e psicologici per bambini e ragazzi in situazioni di vulnerabilità, al fine di prevenire fenomeni di devianza e promuovere il benessere psicologico e sociale.",
      color: "beige",
    },
    {
      titolo: "Laboratori di sviluppo socio-emotivo",
      descrizione:
        "Attività pratiche per bambini e adolescenti mirate a migliorare le competenze relazionali, l'autocontrollo e la gestione delle emozioni.",
      color: "#efc883",
    },
    {
      titolo: "Interventi per difficoltà comportamentali",
      descrizione:
        "Percorsi di sostegno per bambini e adolescenti con problematiche comportamentali, utilizzando strategie educative mirate a favorire un cambiamento positivo.",
      color: "beige",
    },
    {
      titolo: "Orientamento scolastico e professionale",
      descrizione:
        "Consulenza per adolescenti e giovani adulti nella scelta del percorso scolastico o professionale, in base alle attitudini, interessi e abilità personali.",
      color: "#efc883",
    },
    {
      titolo: "Mediazione familiare",
      descrizione:
        "Supporto nella gestione e risoluzione di conflitti familiari attraverso un approccio pedagogico che favorisca la comunicazione e la comprensione reciproca.",
      color: "beige",
    },
  ];

  return (
    <div>
      <h2>
        <strong>Servizi </strong>
        <span className="text-style">Offerti:</span>
      </h2>
      {listServices.map((listService, index) => {
        return (
          <Service
            titolo={listService.titolo}
            descrizione={listService.descrizione}
            index={index}
            primaryColor={listService.color}
            secondaryColor={
              listServices[index + 1] ? listServices[index + 1].color : null
            }
          />
        );
      })}
    </div>
  );
};
export default PedagogistServices;
