import { IconFigma } from '../../components/global/Icons';
import signUp from '../../../../public/projects/my-business/sign-up.jpg';
import menuAndConfig from '../../../../public/projects/my-business/menu-and-config.jpg';
import report from '../../../../public/projects/my-business/report.jpg';
import kidsAcademy from '../../../../public/home/projects/kids-academy.jpg';
import portfolio from '../../../../public/home/projects/portfolio.jpg';

export const myBusinessData = {
  title: 'Meu Negócio',
  links: {
    prototype:
      'https://www.figma.com/proto/dxT7VlUBSuIrWlWURZDHuD/Meu-Neg%C3%B3cio?type=design&node-id=148-1417&t=I8xdrfwhQiiz5nnc-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=148%3A1417',
  },
  context: [
    'As organizações buscam cada vez mais adquirir tecnologias que lhes permitam utilizar os dados de suas operações de forma integrada e que facilitem os processos de tomada de decisão.',
    'Os softwares de gestão estão ganhando destaque por se tratar de ferramentas que viabilizam a integração entre informações contínuas presentes em toda uma organização, buscando disponibilizá-las de maneira que promova eficácia e eficiência nos processos organizacionais.',
    'Pensando neste contexto, foi idealizada a aplicação Meu Negócio, aplicativo mobile de gestão que tem a premissa de auxiliar empreendedores com pequenos empreendimentos a organizar seus recursos de maneira inteligente, oferecido gratuitamente.',
  ],
  functionalities: [
    {
      title: 'Administrador do Sistema',
      list: [
        'Cadastro empresarial',
        'Controle financeiro',
        'Cadastro de contas a pagar',
        'Exclusão de vendas',
        'Relatórios gerenciais',
        'Cadastro de funcionários',
        'Gerenciamento de permissões',
        'Configuração e personalização do aplicativo',
        'Demais funções do vendedor',
      ],
    },
    {
      title: 'Vendedor',
      list: [
        'Realização de vendas',
        'Cadastro de produtos',
        'Controle de estoque',
        'Abertura e fechamento de caixa',
        'Histórico de vendas (referente as suas vendas)',
        'Suporte e ajuda',
      ],
    },
  ],
  stackIcons: [<IconFigma key="myBusiness-figma" withLabel={true} />],
  previewImgs: [signUp, menuAndConfig, report],
  seeAlso: [
    {
      title: 'Kids Academy',
      img: kidsAcademy,
      url: '/projetos/kids-academy',
    },
    {
      title: 'Portfólio Acadêmico',
      img: portfolio,
      url: '/projetos/portfolio-academico',
    },
  ],
};
