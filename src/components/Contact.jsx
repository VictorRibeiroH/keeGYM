import React, { useState } from "react";
import Section from "./Section";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailButtonClick = () => {
    const { name, message } = formData;
    const emailSubject = `Dúvida de ${name}`;
    const emailBody = `Olá, meu nome é ${name} e quero tirar uma dúvida sobre: ${message}`;
    window.location.href = `mailto:contato.victoribeiro@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;
  };

  const handleWhatsAppButtonClick = () => {
    const { name, message } = formData;
    const whatsappMessage = `Olá, meu nome é ${name} e quero tirar uma dúvida sobre: ${message}`;
    window.open(
      `https://wa.me/5541984613554?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <Section
      id="contato"
      header={"Entre em contato"}
      title={"Tire suas dúvidas e entre hoje mesmo para o time!"}
    >
      <div className="flex flex-col items-center">
        <form className="max-w-md w-full">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-semibold mb-1">
              Número de telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-1">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 resize-none text-black"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-blue-500 bg-opacity-50 justify-center text-white font-bold py-3 px-4 rounded-md inline-flex items-center flex-grow hover:bg-white hover:text-blue-500 transition duration-300 mx-1"
              onClick={handleEmailButtonClick}
            >
              Email
            </button>
            <button
              className="bg-green-500 bg-opacity-50 justify-center text-white font-bold py-3 px-4 rounded-md inline-flex items-center flex-grow hover:bg-white hover:text-green-500 transition duration-300 mx-1"
              onClick={handleWhatsAppButtonClick}
            >
              WhatsApp
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
