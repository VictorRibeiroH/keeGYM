import React from "react";

export default function Section(props) {
  const { children, header, title } = props;
  return (
    <section className="min-h-screen flex flex-col gap-10">
      <div className="bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center">
        <p className="uppercase font-medium">{header}</p>
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
