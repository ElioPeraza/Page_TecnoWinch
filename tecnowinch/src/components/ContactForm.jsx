import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../css/ContactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_of0thxo',        // ✅ ID del servicio
      'template_mkcwyn8',       // ✅ ID de la plantilla
      form.current,             // ✅ el form referenciado
      'AEuNbdLsJ3WaCSi0m'       // ✅ public key
    )
    .then((result) => {
      alert('Correo enviado con éxito');
    }, (error) => {
      alert('Error al enviar: ' + error.text);
    });

    e.target.reset(); // 🧼 Limpia el formulario
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form-contacto">
      <label htmlFor="name">Nombre</label>
      <input type="text" id="name" name="name" placeholder="Tu nombre" required />

      <label htmlFor="email">Correo electrónico</label>
      <input type="email" id="email" name="email" placeholder="Tu email" required />

      <label htmlFor="message">Mensaje</label>
      <textarea id="message" name="message" placeholder="Tu mensaje" required />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
