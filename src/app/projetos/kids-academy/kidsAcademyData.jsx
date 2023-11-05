import {
  IconCss,
  IconFigma,
  IconHtml,
  IconJavaScript,
  IconPhp,
} from '../../components/global/Icons';
import home from '../../../../public/projects/kids-academy/home.jpg';
import plans from '../../../../public/projects/kids-academy/plans.jpg';
import myBusiness from '../../../../public/home/projects/my-business.jpg';
import portfolio from '../../../../public/home/projects/portfolio.jpg';

export const kidsAcademyData = {
  title: 'Kids Academy',
  links: {
    github: 'https://github.com/gabriel-venezian/kids-academy',
    prototype:
      'https://www.figma.com/proto/l32CTfcmVHZsbeyPAOBFvY/Kids-Academy?type=design&node-id=233-459&t=QTOfpQ23SMViEAKn-0&scaling=min-zoom&page-id=233%3A109',
  },
  context: [
    'O uso da tecnologia tem se tornado cada vez mais necessário em nosso cotidiano, sendo esta considerada um dos pilares da inovação e melhoria da qualidade de vida.',
    'A infância é uma das melhores fases de aprendizado de nossas vidas, e em uma era digital as crianças estão tendo contato com o mundo da tecnologia cada vez mais cedo.',
    'Pensando nisso foi criado o Kids Academy, uma plataforma online de educação voltada exclusivamente ao público infantil. Seu principal objetivo é promover o ensino de programação e tecnologia para crianças, através de atividades lúdicas, desenvolvimento de projetos e gamificação.',
  ],
  functionalities: [
    {
      title: 'Responsável Legal',
      list: [
        'Cadastro e inscrição do aluno',
        'Escolha entre os planos de assinatura disponíveis',
        'Recebimento de mensagens e/ou e-mails com o histórico de desempenho do aluno',
        'Emissão de certificados',
      ],
    },
    {
      title: 'Aluno',
      list: [
        'Acompanhamento das aulas particulares e gravadas disponíveis na plataforma',
        'Gerenciamento de perfil',
        'Acompanhamento do nível da conta (conceito de gamificação, onde as recompensas são baseadas nos cursos que o aluno concluiu dentro da plataforma)',
        'Suporte e ajuda',
      ],
    },
  ],
  stackIcons: [
    <IconFigma key="kidsAcademy-figma" withLabel={true} />,
    <IconHtml key="kidsAcademy-html" withLabel={true} />,
    <IconCss key="kidsAcademy-css" withLabel={true} />,
    <IconJavaScript key="kidsAcademy-js" withLabel={true} />,
    <IconPhp key="kidsAcademy-php" withLabel={true} />,
  ],
  previewImgs: [home, plans],
  seeAlso: [
    {
      title: 'Meu Negócio',
      img: myBusiness,
      url: '/projetos/meu-negocio',
    },
    {
      title: 'Portfólio Acadêmico',
      img: portfolio,
      url: '/projetos/portfolio-academico',
    },
  ],
};
