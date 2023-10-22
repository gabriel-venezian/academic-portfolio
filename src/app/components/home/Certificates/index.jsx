import React from 'react';
import { SectionTitle, ViewOnline } from '../../global';
import { CertificatesWrapper, Certificate, CertificateInfo } from './styled';
import Image from 'next/image';
import ai from '../../../../../public/home/certificates/ai-assisted.jpg';
import grid from '../../../../../public/home/certificates/css-grid.jpg';
import flexbox from '../../../../../public/home/certificates/css-flexbox.jpg';
import testing from '../../../../../public/home/certificates/unit-testing.jpg';
import graphql from '../../../../../public/home/certificates/graph-ql.jpg';
import git from '../../../../../public/home/certificates/git.jpg';

export default function Certificates() {
  const certificates = [
    {
      title: 'AI-Assisted',
      img: ai,
      link: 'https://drive.google.com/file/d/1IJLfbJvGuJaJxOq2xkrs4R4i4DuiL1mw/view?usp=share_link',
    },
    {
      title: 'CSS Grid',
      img: grid,
      link: 'https://www.origamid.com/certificate/014fa19b',
    },
    {
      title: 'CSS Flexbox',
      img: flexbox,
      link: 'https://www.origamid.com/certificate/aab8e155',
    },
    {
      title: 'Testes Unitários',
      img: testing,
      link: 'https://udemy.com/certificate/UC-c28404ca-2f9d-48c2-8959-116efac23299/',
    },
    {
      title: 'GraphQL',
      img: graphql,
      link: 'https://www.udemy.com/certificate/UC-4a1ec9ce-5bcd-4adb-a8ee-c93efcdcc937/',
    },
    {
      title: 'Git',
      img: git,
      link: 'https://www.udemy.com/certificate/UC-e3c5c423-2f36-4e31-b6ed-32c0602c31f5/',
    },
  ];

  return (
    <>
      <SectionTitle id="certificados" title={'Certificados'} />
      <CertificatesWrapper>
        {certificates.map((certificate, certificateIndex) => (
          <Certificate key={`certificate-${certificateIndex + 1}`}>
            <Image
              src={certificate.img}
              height={280}
              width={360}
              alt={certificate.title}
            />
            <CertificateInfo>
              <p>{certificate.title}</p>
              <ViewOnline link={certificate.link} size="medium" />
            </CertificateInfo>
          </Certificate>
        ))}
      </CertificatesWrapper>
    </>
  );
}
