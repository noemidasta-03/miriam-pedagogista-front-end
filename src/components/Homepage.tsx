import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container-homePage">
      <div className="left-container">
        <section className="about-me">
          <h2 className="container-text-style">
            <strong>
              Chi <span className="text-style">sono?</span>
            </strong>
          </h2>

          <div className="about-me-content">
            <div id="about-me-img">
              <img
                src="https://scontent.fpmo4-1.fna.fbcdn.net/v/t39.30808-6/353049860_7238939916132625_2934624560966809619_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zbZleC2oS7kQ7kNvgEfljeV&_nc_zt=23&_nc_ht=scontent.fpmo4-1.fna&_nc_gid=AJrN_ovCcLdOAwslrj_cMiH&oh=00_AYDXe93_pnNYZrgD-BqRLztwmX2IOyZmnrVnrq3UxNtS6w&oe=67A2AFE5"
                alt="Miriam Vassallo"
                className="profile-img"
              />
            </div>

            <div className="description-about-me">
              <h4 className="name">Miriam Vassallo</h4>
              <p>
                Sono Miriam Vassallo, pedagogista con una lunga esperienza nel
                supporto educativo e nella consulenza psicopedagogica. Il mio
                approccio si fonda sull’ascolto attivo e sull’accompagnamento
                personalizzato per favorire lo sviluppo armonico di ogni bambino
                e il benessere delle famiglie
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="right-container">
        <section className="current-work">
          <h2 className="container-text-style">
            <strong>
              I miei titoli di{" "}
              <span className="text-style">studio e formazione:</span>
            </strong>
          </h2>
          <p>
            Sono laureata in educazione di comunità presso l’Università di
            Palermo, con una specializzazione in Pedagogia. Ho inoltre
            frequentato corsi avanzati in tecnico ABA. La mia continua
            formazione mi permette di utilizzare approcci innovativi e
            aggiornati per rispondere alle diverse esigenze dei miei clienti.
          </p>
        </section>

        <section className="services-offered">
          <h2>
            <strong> Cosa </strong>
            <span className="text-style">offro:</span>
          </h2>
          <p>
            Offro consulenze pedagogiche personalizzate per famiglie e
            insegnanti, supporto psicopedagogico per bambini con difficoltà di
            apprendimento o relazionali, corsi di formazione per genitori e
            workshop per professionisti del settore educativo.
          </p>
          <button className="service-button">I miei servizi</button>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
