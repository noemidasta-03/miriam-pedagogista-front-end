import React, { useState } from "react";
import "./ContactAndBooking.css";
// import PedagogistServices from "./PedagogistServices";
import { listServices } from "../data/services";
import { useSearchParams } from "react-router-dom";

const ContactAndBooking: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const servizioQueryParam = searchParams.get("servizio");

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>(
    servizioQueryParam ?? ""
  );

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Prenotazione effettuata", {
      name,
      email,
      phone,
      message,
      selectedService,
    });
  };

  return (
    <div className="contact-booking-container">
      <div className="contact-info">
        <h2>Contatti</h2>
        <ul>
          <li>
            <strong>Telefono:</strong>{" "}
            <a href="tel:+123456789">+1 234 567 89</a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:pedagogista@example.com">pedagogista@example.com</a>
          </li>
          <li>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chatta su WhatsApp
            </a>
          </li>
        </ul>
      </div>

      <div className="booking-form">
        <h2>Prenota un Servizio</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="service">Servizio</label>
            <select
              id="service"
              value={selectedService}
              onChange={handleServiceChange}
              required
            >
              <option value=""></option>
              {listServices
                .filter((service) => {
                  return service.value;
                })
                .map((service) => {
                  return (
                    <option key={service.value} value={service.value}>
                      {service.titolo}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefono</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Messaggio</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button type="submit">Invia Prenotazione</button>
        </form>
      </div>
    </div>
  );
};

export default ContactAndBooking;
