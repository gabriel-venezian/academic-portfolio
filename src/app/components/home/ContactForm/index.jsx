import React, { useState } from 'react';
import { CTA, SectionTitle, SocialMedia } from '../../global';
import { ContactWrapper, ContactInfo, ContactFormStyles } from './styled';
import { IconLocation, IconEmail, IconPhone } from '../../global/Icons';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { message, name, phone, email } = formData;

    let whatsAppMessage = `${message.replaceAll(' ', '%20')}%0A%0A`;
    whatsAppMessage += `${name.replaceAll(' ', '%20')}%0A`;
    whatsAppMessage += `${phone.replaceAll(' ', '%20')}%0A`;
    whatsAppMessage += `${email.replaceAll(' ', '%20')}%0A`;

    const url = `https://api.whatsapp.com/send?phone=5519996618086&text=${whatsAppMessage}`;

    window.open(url, '_blank').focus();
  };

  return (
    <>
      <SectionTitle id={'contato'} title={'Contato'} />
      <ContactWrapper>
        <ContactInfo>
          <p>Gabriel Alexandre Venezian</p>
          <ul>
            <li>
              <IconLocation />
              <a
                href="https://www.google.com/maps/place/Araras+-+State+of+S%C3%A3o+Paulo/data=!4m2!3m1!1s0x94c87057a4792fa3:0x2bf2ad63b481c2fe?sa=X&ved=2ahUKEwinx_aXkIWCAxXvBLkGHeQwCXgQ8gF6BAgMEAA&ved=2ahUKEwinx_aXkIWCAxXvBLkGHeQwCXgQ8gF6BAgNEAI"
                target="_blank"
              >
                Araras, São Paulo
              </a>
            </li>
            <li>
              <IconEmail />
              <a href="mailto:gabriel.venezian@hotmail.com">
                gabriel.venezian@hotmail.com
              </a>
            </li>
            <li>
              <IconPhone />
              <a href="tel:+5519996618086">+55 19 9 9661-8086</a>
            </li>
          </ul>
          <SocialMedia />
        </ContactInfo>
        <ContactFormStyles>
          <div className="inline-group">
            <div className="input-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Nome completo"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                id="phone"
                placeholder="+55 19 9 9999-9999"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="nome@exemplo.com"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              rows="6"
              placeholder="Como posso ajudá-lo?"
              onChange={handleChange}
            />
          </div>

          <CTA action="Enviar Mensagem" handleClick={handleSubmit} />
        </ContactFormStyles>
      </ContactWrapper>
    </>
  );
}
