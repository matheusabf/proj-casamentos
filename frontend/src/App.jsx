import { useState } from "react";
import floralCerimonia from "./assets/floral-cerimonia.jpg";
import "./App.css";

import giftsData from "./data/gifts";
import PixModal from "./components/PixModal";

const PIX_KEY = "+5511975507168";
const PIX_NAME = "MATHEUS ALVES BENTO FER";
const PIX_CITY = "SAO PAULO";

export default function WeddingPage() {
  const [pixModal, setPixModal] = useState(null);
  const [pixCopied, setPixCopied] = useState(false);

  function formatPixField(id, value) {
    return id + value.length.toString().padStart(2, "0") + value;
  }

  function crc16(payload) {
    let crc = 0xffff;

    for (let i = 0; i < payload.length; i++) {
      crc ^= payload.charCodeAt(i) << 8;

      for (let j = 0; j < 8; j++) {
        crc = crc & 0x8000
          ? (crc << 1) ^ 0x1021
          : crc << 1;
      }
    }

    return (crc & 0xffff)
      .toString(16)
      .toUpperCase()
      .padStart(4, "0");
  }

  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function generatePix(gift) {
    const description = `${removeAccents(gift.name)} - Larissa e Victor`;

    const merchantAccount =
      formatPixField("00", "BR.GOV.BCB.PIX") +
      formatPixField("01", PIX_KEY) +
      formatPixField("02", description);

    let payload =
      formatPixField("00", "01") +
      formatPixField("26", merchantAccount) +
      formatPixField("52", "0000") +
      formatPixField("53", "986") +
      formatPixField("54", gift.price) +
      formatPixField("58", "BR") +
      formatPixField("59", PIX_NAME) +
      formatPixField("60", PIX_CITY) +
      formatPixField("62", formatPixField("05", "***"));

    payload += "6304";

    return payload + crc16(payload);
  }

  function handlePix(gift) {
    setPixModal({
      gift,
      pix: generatePix(gift)
    });
  }

  function copyPix() {
    navigator.clipboard.writeText(pixModal.pix);
    setPixCopied(true);

    setTimeout(() => setPixCopied(false), 3000);
  }

  return (
    <div className="wedding-page">

      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552"
        className="hero-image"
      />

      <div className="container">

        <header className="header">
          <h1 className="title">Larissa & Victor</h1>
          <span className="date">XX.10.2026</span>
        </header>

        <section className="description">
          Montamos nossa lista de presentes com muito carinho 💛
          <br />
          Para nos presentear, basta escolher algum presente por aqui mesmo :)
          <br />
          É fácil, prático e seguro!
          <br /><br />
          Como vamos morar juntos, são presentes que ficaremos muito gratos em receber.
          <br />
          Agradecemos muito pelo carinho ❤️
        </section>

        <div className="gifts-grid">
          {giftsData.map(g => (
            <div key={g.id} className="gift-card">
              <div className="gift-icon">🎁</div>
              <p>{g.name}</p>
              <strong>R$ {g.price}</strong>

              <button
                className="primary-button"
                onClick={() => handlePix(g)}
              >
                Presentear
              </button>
            </div>
          ))}
        </div>

        <section className="section">
          <h2>Confirmar Presença</h2>
          <p>Clique abaixo para confirmar sua presença</p>

          <a
            className="primary-button"
            href="https://forms.gle/334rbHEoBa69PieRA"
            target="_blank"
          >
            Confirmar Presença
          </a>
        </section>

        <section className="section">
          <h2>Cerimônia</h2>

          <p>
            Gostaríamos muito de contar com a presença de todos vocês para a celebração da nossa união.
            <br />
            XX de XXXXX de 2026 às XXh.
            <br />
            Dress Code: Esporte Fino
          </p>

          <img
            src={floralCerimonia}
            className="location-image"
          />

          <p>
            Rua nove de julho, 948
            <br />
            08505-000
          </p>

          <iframe
            className="map"
            src="https://www.google.com/maps?q=Rua+Nove+de+Julho%2C+948%2C+Jardim+Nove+de+Julho%2C+Ferraz+de+Vasconcelos%2C+SP%2C+08505000&output=embed"
          />
        </section>

        <section className="section">
          <h2>Festa</h2>

          <p>
            Rua Guarani,157
            <br />
            08534-140
          </p>

          <iframe
            className="map"
            src="https://www.google.com/maps?q=Rua+Guarani%2C+157%2C+Vila+Zita%2C+Ferraz+de+Vasconcelos%2C+SP%2C+08534140&output=embed"
          />
        </section>

      </div>

      {pixModal && (
        <PixModal
          pixModal={pixModal}
          pixCopied={pixCopied}
          copyPix={copyPix}
          closeModal={() => {
            setPixModal(null);
            setPixCopied(false);
          }}
        />
      )}

    </div>
  );
}