import React from "react";
import Section from "./Section";

export default function Plans() {
  return (
    <Section
      id="planos"
      header={"Conheça nossos planos"}
      title={["Agora é a hora de construir a sua", " melhor versão!"]}
    >
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        {/* Primeira caixa do plano */}
        <div
          style={{
            position: "relative",
            width: "400px",
            height: "280px",
            backgroundColor: "#60a5fa",
            color: "white",
            borderRadius: "15px",
            textAlign: "center",
            padding: "30px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "40px",
            transition: "transform 0.3s ease-in-out", // Adicionando a transição de zoom
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {/* Caixa sobreposta */}
          <div
            style={{
              position: "absolute",
              top: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "70%",
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
              color: "#000000",
              border: "2px solid #60a5fa", // Adicionando o contorno
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Adicionando a sombra
            }}
          >
            <h3 className="text-xl">Combo Mensal</h3>
          </div>

          <h2 className="text-2xl md:text-2xl">
            Plano <span className="font-semibold">Mensal</span>
          </h2>
          <br />
          <p className="text-sm md:text-lg">
            de <span className="text-gray-500 cross-out">R$ 519,00 </span>
            por apenas <br />
            <p className="text-4xl text-black font-bold mt-3"> R$287,00</p>
          </p>
          <button className="mt-4 px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
            <a href="#contato">
              Faça parte do <span className="uppercase font-bold">time</span>
            </a>
          </button>
        </div>

        {/* Espaçamento entre as caixas */}
        <div style={{ width: "40px" }}></div>

        {/* Segunda caixa do plano */}
        <div
          style={{
            position: "relative", // Para posicionar a caixa sobreposta
            width: "400px", // Largura da caixa
            height: "280px", // Altura da caixa
            backgroundColor: "#60a5fa", // Cor azul
            color: "white",
            borderRadius: "15px", // Raio da borda
            textAlign: "center",
            padding: "30px", // Preenchimento interno
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)", // Sombra
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "40px", // Espaçamento entre as caixas
            marginTop: "-50px", // Mover para cima
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {/* Caixa sobreposta */}
          <div
            style={{
              position: "absolute",
              top: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "70%",
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
              color: "#000000",
              border: "2px solid #60a5fa", // Adicionando o contorno
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Adicionando a sombra
            }}
          >
            <h3 className="text-xl">Combo Anual + Brinde</h3>
          </div>

          <h2 className="text-2xl mt-6 md:text-2xl">
            Plano <span className="mt-4 font-semibold">Anual</span>
          </h2>
          <br />
          <p className="text-sm md:text-lg">
            de <span className="text-gray-500 cross-out">R$ 6.228,00 </span>
            por apenas <br />
            <p className="text-4xl text-black font-bold mt-3"> R$ 283,33</p>
          </p>
          <p className="text-sm md:text-lg">em 12x</p>
          <button className="mt-3 px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
            <a href="#contato">
              Faça parte do <span className="uppercase font-bold">time</span>
            </a>
          </button>
        </div>

        {/* Espaçamento entre as caixas */}
        <div style={{ width: "40px" }}></div>

        {/* Terceira caixa do plano */}
        <div
          style={{
            position: "relative", // Para posicionar a caixa sobreposta
            width: "400px", // Largura da caixa
            height: "280px", // Altura da caixa
            backgroundColor: "#60a5fa", // Cor azul
            color: "white",
            borderRadius: "15px", // Raio da borda
            textAlign: "center",
            padding: "30px", // Preenchimento interno
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)", // Sombra
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "40px", // Espaçamento entre as caixas
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {/* Caixa sobreposta */}
          <div
            style={{
              position: "absolute",
              top: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "70%",
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
              color: "#000000",
              border: "2px solid #60a5fa", // Adicionando o contorno
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Adicionando a sombra
            }}
          >
            <h3 className="text-xl">Combo Semestral</h3>
          </div>
          <h2 className="text-2xl mt-6 md:text-2xl">
            Plano <span className="mt-4 font-semibold">Semestral</span>
          </h2>
          <br />
          <p className="text-sm md:text-lg">
            de <span className="text-gray-500 cross-out">R$ 3.114,00 </span>
            por apenas <br />
            <p className="text-4xl text-black font-bold mt-3"> R$ 266,66</p>
          </p>
          <p className="text-sm md:text-lg">em 6x</p>
          <button className="mt-3 px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
            <a href="#contato">
              Faça parte do <span className="uppercase font-bold">time</span>
            </a>
          </button>
        </div>
      </div>
    </Section>
  );
}
