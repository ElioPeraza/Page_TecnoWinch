import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../css/ContactForm.css";

// Constantes para configuración
const EMAILJS_CONFIG = {
  serviceId: 'service_of0thxo',
  templateId: 'template_mkcwyn8',
  publicKey: 'AEuNbdLsJ3WaCSi0m'
};

const ContactForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form.current,
        EMAILJS_CONFIG.publicKey
      );

      setStatus({
        type: 'success',
        message: 'Correo enviado con éxito. Nos pondremos en contacto contigo pronto.'
      });
      form.current.reset();
    } catch (error) {
      setStatus({
        type: 'error',
        message: `Error al enviar el mensaje: ${error.text || 'Por favor, inténtalo de nuevo más tarde.'}`
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form 
      ref={form} 
      onSubmit={sendEmail} 
      className="form-contacto"
      aria-label="Formulario de contacto"
    >
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Tu nombre" 
          required 
          aria-required="true"
          minLength="2"
          maxLength="50"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Tu email" 
          required 
          aria-required="true"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea 
          id="message" 
          name="message" 
          placeholder="Tu mensaje" 
          required 
          aria-required="true"
          minLength="10"
          maxLength="500"
        />
      </div>

      {status.message && (
        <div className={`status-message ${status.type}`} role="alert">
          {status.message}
        </div>
      )}

      <button 
        type="submit" 
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
};

export default ContactForm;
