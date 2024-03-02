import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";

// Importe as imagens
import Card1 from "../assets/Card1.png";
import Card2 from "../assets/Card2.png";
import Card3 from "../assets/Card3.png";
import Card4 from "../assets/Card4.png";
import Card5 from "../assets/Card5.png";
import Card6 from "../assets/Card6.png";

export default function Generator() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardsData = [
    { image: Card1, text: "Divisão completa" },
    { image: Card2, text: "Peito" },
    { image: Card3, text: "Costas" },
    { image: Card4, text: "Pernas" },
    { image: Card5, text: "Ombros" },
    { image: Card6, text: "Braços" },
  ];

  return (
    <SectionWrapper
      id="generator-section"
      header={"Descubra seu treino"}
      title={["Chegou a", "hora da", " transformação"]}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px", // Espaçamento entre os cartões
        }}
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              width: "200px", // Largura dos cartões
              height: "300px", // Altura dos cartões
              borderRadius: "10px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              transform: index === hoveredIndex ? "scale(1.1)" : "scale(1)",
              boxShadow: "0 0 20px #60a5fa", // Efeito de neon
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={card.image}
              alt="Imagem do treino"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {index === hoveredIndex && (
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "#fff",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <p style={{ margin: 0 }}>{card.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "20px", color: "#fff" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "600" }} className="mb-2">
          O nosso plano é um projeto completo.
        </h2>
        <p style={{ fontSize: "16px", fontWeight: "600" }} className="mb-2">
          Planilhas focadas exatamente no que você está precisando para dar o
          próximo passo no seu fisico
        </p>
        <p style={{ fontSize: "16px", fontWeight: "600" }} className="mb-2">
          Você vai seguir o plano e vai utilizar as técnicas avançadas que ele
          vai indicar e ensinar. Vai ter um treinador de verdade direcionando
          seus treinos e te ajudando a ter resultados.
        </p>
        <button className="mt-8 mb-16 px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
          <a href="#contato">
            Faça parte do <span className="uppercase font-bold">time</span>
          </a>
        </button>
      </div>
    </SectionWrapper>
  );
}
