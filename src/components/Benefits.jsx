import React from "react";
import Section from "./Section";

// Importe as imagens
import Image1 from "../assets/1-1.png";
import Image2 from "../assets/2-1.png.webp";
import Image3 from "../assets/4-1.png.webp";
import Image4 from "../assets/muscle.png.webp";
import Image5 from "../assets/postura.png.webp";

export default function Benefits() {
  // Dados dos mini cards
  const miniCardsData = [
    { image: Image1, description: "Treino individualizado e periodizado" },
    { image: Image2, description: "Prescrição de alongamento e mobilidade" },
    {
      image: Image3,
      description: "Ganho de força de forma segura e eficiente​",
    },
    {
      image: Image5,
      description: "Avaliação postural e correções de desvios posturais",
    },
    {
      image: Image4,
      description: "Ganho de massa eficiente, sem necessidade de anabolizantes",
    },
  ];

  // Dividindo os mini cards em duas partes
  const topCards = miniCardsData.slice(0, 2);
  const bottomCards = miniCardsData.slice(2);

  return (
    <Section id="beneficios" header={"Conheça alguns dos benefícios"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "1200px", // Definindo a largura máxima
          margin: "0 auto", // Centralizando na página
        }}
      >
        {/* Renderizando os dois cards em cima */}
        {topCards.map((card, index) => (
          <div
            key={index}
            style={{
              width: "45%", // Ajustando o tamanho das caixas
              maxWidth: "300px", // Largura máxima das caixas
              height: "300px", // Altura das caixas
              backgroundColor: "linear-gradient(to right, #374151, #1f2937)", // Gradiente de fundo
              borderRadius: "10px",
              margin: "10px",
              textAlign: "center",
              position: "relative",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              transition: "transform 0.3s ease-in-out", // Adicionando a transição de zoom
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div
              style={{
                width: "100%",
                height: "70%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={card.image}
                alt={"Imagem " + (index + 1)}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <p
              style={{
                padding: "5px",
                margin: "0",
                fontSize: "18px",
                color: "#fff",
              }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "1200px", // Definindo a largura máxima
          margin: "0 auto", // Centralizando na página
        }}
      >
        {/* Renderizando os três cards embaixo */}
        {bottomCards.map((card, index) => (
          <div
            key={index}
            style={{
              width: "45%", // Ajustando o tamanho das caixas
              maxWidth: "300px", // Largura máxima das caixas
              height: "300px", // Altura das caixas
              backgroundColor: "linear-gradient(to right, #374151, #1f2937)", // Gradiente de fundo
              borderRadius: "10px",
              margin: "10px",
              textAlign: "center",
              position: "relative",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              transition: "transform 0.3s ease-in-out", // Adicionando a transição de zoom
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div
              style={{
                width: "100%",
                height: "70%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={card.image}
                alt={"Imagem " + (index + 3)}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <p
              style={{
                padding: "5px",
                margin: "0",
                fontSize: "18px",
                color: "#fff",
              }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
