import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-fill mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>CHEGOU A HORA</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Da<span className="text-blue-400">transformação</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        Conquiste a{" "}
        <span className="text-blue-400 font-medium">
          força e o físico dos seus sonhos!
        </span>
      </p>
      <button className="px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
        <p>
          Faça parte do <span className="uppercase font-bold">time</span>
        </p>
      </button>
    </div>
  );
}
