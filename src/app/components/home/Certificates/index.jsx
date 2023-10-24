import React from 'react';
import { SectionTitle, ViewOnline } from '../../global';
import { CertificatesWrapper, Certificate, CertificateInfo } from './styled';
import { certificatesData } from './certificatesData';
import Image from 'next/image';

export default function Certificates() {
  const certificates = certificatesData;

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
