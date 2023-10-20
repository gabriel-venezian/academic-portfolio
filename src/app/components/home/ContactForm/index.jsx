import React from 'react';
import { SectionTitle } from '../../global';
import { ContactWrapper, ContactInfo } from './styled';
import { IconLocation, IconEmail, IconPhone } from '../../global/Icons';

export default function ContactForm() {
  return (
    <>
      <SectionTitle title={'Contato'} />
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
        </ContactInfo>
      </ContactWrapper>
    </>
  );
}
