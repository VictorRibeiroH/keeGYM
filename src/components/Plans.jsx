import React from "react";
import Section from "./Section";

export default function Plans() {
  return (
    <Section
      header={"Conheça nossos planos"}
      title={["Agora é a hora de construir a sua", " melhor versão!"]}
    >
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        {/* Primeira caixa do plano */}
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
          }}
        >
          {/* Caixa sobreposta */}
          <div
            style={{
              position: "absolute",
              top: "-20px", // Posição acima da caixa azul
              left: "50%", // Alinhar ao centro
              transform: "translateX(-50%)", // Centralizar
              width: "70%", // Largura ocupando 70% da caixa azul
              backgroundColor: "#fff", // Cor branca com transparência
              borderRadius: "10px", // Raio da borda
              padding: "10px", // Preenchimento interno
              textAlign: "center",
              color: "#000000",
            }}
          >
            <h3 className="text-xl">Combo Mensal</h3>
          </div>

          <h2 className="text-2xl md:text-2xl">
            Plano <span className="mt-4 font-semibold">Mensal</span>
          </h2>
          <br />
          <p className="text-sm md:text-lg">
            de <span className="text-gray-500 cross-out">R$ 519,00 </span>
            por apenas <br />
            <p className="text-4xl text-black font-bold mt-3"> R$287,00</p>
          </p>
          <button className="mt-3 px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
            <p>
              Faça parte do <span className="uppercase font-bold">time</span>
            </p>
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
          }}
        >
          {/* Caixa sobreposta */}
          <div
            style={{
              position: "absolute",
              top: "-20px", // Posição acima da caixa azul
              left: "50%", // Alinhar ao centro
              transform: "translateX(-50%)", // Centralizar
              width: "70%", // Largura ocupando 70% da caixa azul
              backgroundColor: "#fff", // Cor branca com transparência
              borderRadius: "10px", // Raio da borda
              padding: "10px", // Preenchimento interno
              textAlign: "center",
              color: "#000000",
            }}
          >
            <h3 className="text-xl">Combo Anual + Brinde</h3>
          </div>

          <h2 className="text-2xl md:text-2xl">
            Plano <span className="mt-4 font-semibold">Anual</span>
          </h2>
          <br />
          <p className="text-sm md:text-lg">
            de <span className="text-gray-500 cross-out">R$ 6.228,00 </span>
            por apenas <br />
            <p className="text-4xl text-black font-bold mt-3"> R$ 3.400,00</p>
          </p>
          <button className="mt-3 px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
            <p>
              Faça parte do <span className="uppercase font-bold">time</span>
            </p>
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
          }}
        >
          {/* Caixa sobreposta */}
          <div
            style={{
              position: "absolute",
              top: "-20px", // Posição acima da caixa azul
              left: "50%", // Alinhar ao centro
              transform: "translateX(-50%)", // Centralizar
              width: "70%", // Largura ocupando 70% da caixa azul
              backgroundColor: "#fff", // Cor branca com transparência
              borderRadius: "10px", // Raio da borda
              padding: "10px", // Preenchimento interno
              textAlign: "center",
              color: "#000000",
            }}
          >
            <h3 className="text-xl">Combo Semestral</h3>
          </div>
          <h2 className="text-2xl md:text-2xl">
            Plano <span className="mt-4 font-semibold">Semestral</span>
          </h2>
          <br />
          <p className="text-sm md:text-lg">
            de <span className="text-gray-500 cross-out">R$ 3.114,00 </span>
            por apenas <br />
            <p className="text-4xl text-black font-bold mt-3"> R$ 1.600,00</p>
          </p>
          <button className="mt-3 px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
            <p>
              Faça parte do <span className="uppercase font-bold">time</span>
            </p>
          </button>
        </div>
      </div>
    </Section>
  );
}
