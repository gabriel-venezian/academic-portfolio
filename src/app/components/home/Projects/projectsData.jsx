import myBusiness from '../../../../../public/home/projects/my-business.jpg';
import kidsAcademy from '../../../../../public/home/projects/kids-academy.jpg';
import portfolio from '../../../../../public/home/projects/portfolio.jpg';
import {
  IconFigma,
  IconHtml,
  IconCss,
  IconJavaScript,
  IconPhp,
  IconReact,
} from '../../global/Icons/';

export const projectsData = [
  {
    title: 'Meu Negócio',
    paragraph1:
      'Empreender não é uma tarefa simples, principalmente no Brasil. Uma das maiores dificuldades desta atividade é o gerenciamento dos recursos de um estabelecimento.',
    paragraph2:
      'Meu Negócio é uma solução para pessoas que precisam gerenciar seu pequeno empreendimento, sem custo de aquisição. Suas principais funcionalidades são registro de vendas e controle de estoque.',
    caseStudyUrl: '/projetos/meu-negocio',
    prototypeUrl:
      'https://www.figma.com/proto/dxT7VlUBSuIrWlWURZDHuD/Meu-Neg%C3%B3cio?type=design&node-id=148-1417&t=I8xdrfwhQiiz5nnc-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=148%3A1417',
    previewImg: myBusiness,
    stackIcons: [<IconFigma />],
  },
  {
    title: 'Kids Academy',
    paragraph1:
      'A tecnologia está cada vez mais presente em nosso cotidiano. Esta também é uma realidade na vida das crianças, que estão nascendo em uma era digital.',
    paragraph2:
      'Kids Academy é uma plataforma online de ensino destinada ao público infantil. Seu principal objetivo é ensinar programação e tecnologia para crianças através de atividades lúdicas e gamificação.',
    caseStudyUrl: '/projetos/kids-academy',
    prototypeUrl:
      'https://www.figma.com/proto/l32CTfcmVHZsbeyPAOBFvY/Kids-Academy?type=design&node-id=233-459&t=QTOfpQ23SMViEAKn-0&scaling=min-zoom&page-id=233%3A109',
    githubUrl: 'https://github.com/gabriel-venezian/kids-academy',
    previewImg: kidsAcademy,
    stackIcons: [<IconHtml />, <IconCss />, <IconJavaScript />, <IconPhp />],
  },
  {
    title: 'Portfólio Acadêmico',
    paragraph1:
      'Nos últimos anos a demanda na área da tecnologia têm aumentado notoriamente. Talentos nesta área são constantemente necessários e requisitados.',
    paragraph2:
      'Levando em consideração este cenário, desenvolvi o Portfólio Acadêmico, uma maneira de estruturar e demonstrar minhas experiências e conhecimentos para o mercado de trabalho.',
    caseStudyUrl: '/projetos/portfolio-academico',
    prototypeUrl:
      'https://www.figma.com/proto/1G6YQQJB9V7JX6h8Z4zUE3/portfolio-academico?node-id=1-4&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A4',
    githubUrl: 'https://github.com/gabriel-venezian/academic-portfolio',
    previewImg: portfolio,
    stackIcons: [<IconHtml />, <IconCss />, <IconJavaScript />, <IconReact />],
  },
];
