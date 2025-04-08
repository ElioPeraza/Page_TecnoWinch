import React from 'react';
import ContactForm from '../components/ContactForm';



const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contáctanos</h2>
      <p>Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>
      <ContactForm />
    </div>
  );
};

export default Contact;
