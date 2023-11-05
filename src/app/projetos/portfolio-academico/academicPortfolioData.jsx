import {
  IconHtml,
  IconCss,
  IconJavaScript,
  IconReact,
} from '../../components/global/Icons';
import homeLight from '../../../../public/home/projects/portfolio.jpg';
import homeDark from '../../../../public/projects/academic-portfolio/home-dark.jpg';
import myBusiness from '../../../../public/home/projects/my-business.jpg';
import kidsAcademy from '../../../../public/home/projects/kids-academy.jpg';

export const academicPortfolioData = {
  title: 'Portfólio Acadêmico',
  links: {
    github: 'https://github.com/gabriel-venezian/academic-portfolio',
    prototype:
      'https://www.figma.com/proto/1G6YQQJB9V7JX6h8Z4zUE3/portfolio-academico?type=design&t=Aaeh0Z3kFB453rqX-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A4&node-id=1-4',
  },
  context: [
    'A demanda por novos talentos na área de tecnologia tem aumentado exponencialmente com o decorrer dos últimos anos. Destacar-se não é uma tarefa simples, levando em consideração a abundância e complexidade de tecnologias relacionadas a esta área.',
    'Um portfólio pode tornar-se o cartão de visita dos profissionais ligados à área de tecnologia, principalmente dos que estão envolvidos no desenvolvimento de websites, aplicativos e design.',
    'O portfólio é uma maneira de estruturar e demonstrar experiência e conhecimento, através da exibição de competências baseadas em trabalhos previamente desenvolvidos. Está diretamente relacionado à criação de identidade, agregando valor à apresentação do profissional.',
  ],
  functionalities: [
    {
      title: 'Histórico Profissional e Habilidades',
      list: [
        'Possibilita listar e categorizar as experiências profissionais, habilidades técnicas e soft skills adquiridas ao longo da carreira, destacando competências relevantes para o mercado de tecnologia',
      ],
    },
    {
      title: 'Seção de Projetos',
      list: [
        'Permite destacar projetos específicos, demonstrando expertise e resultados notáveis, com descrições detalhadas, capturas de tela e links para projetos reais.',
      ],
    },
    {
      title: 'Contato',
      list: [
        'Disponibiliza informações de contato para facilitar a comunicação e colaboração com outros profissionais e potenciais empregadores.',
      ],
    },
  ],
  stackIcons: [
    <IconHtml key="academicPortfolio-html" withLabel={true} />,
    <IconCss key="academicPortfolio-css" withLabel={true} />,
    <IconJavaScript key="academicPortfolio-js" withLabel={true} />,
    <IconReact key="academicPortfolio-react" withLabel={true} />,
  ],
  previewImgs: [homeLight, homeDark],
  seeAlso: [
    {
      title: 'Meu Negócio',
      img: myBusiness,
      url: '/projetos/meu-negocio',
    },
    {
      title: 'Kids Academy',
      img: kidsAcademy,
      url: '/projetos/kids-academy',
    },
  ],
};
