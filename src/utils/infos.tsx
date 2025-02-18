import firstImage from "../../public/background1.jpg";
import secondImage from "../../public/background2.jpg";
import thirdImage from "../../public/background3.jpg";
import fourthImage from "../../public/background4.jpg";
import { MdCable } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaBoltLightning } from "react-icons/fa6";
import { BsCloudLightningRain } from "react-icons/bs";
import { FaAmbulance, FaBan, FaBolt, FaCheckCircle, FaClipboardCheck, FaExclamationTriangle, FaFileContract, FaMicrochip, FaPiggyBank, FaRecycle, FaRegClock, FaServer, FaShieldAlt, FaTools, FaUserTie } from "react-icons/fa";
import { FaLock, FaPuzzlePiece } from "react-icons/fa";



export const homeImages = [
  {
    img: firstImage,
    firstTitle: "ESPECIALIZADA EM",
    title: "Cabines primárias e serviços de manutenção",
    description: "A CTZ é especializada em cabines primárias e serviços de manutenção.",
  },
  { img: secondImage,
    firstTitle: "-- CTZ --",
    title: "Seu negócio não pode parar por falta de energia",
    description: "A CTZ trabalha 24 horas, 7 dias por semana, 365 dias por ano.",
  },
  {
    img: fourthImage,
    firstTitle: "Prazo, qualidade, tecnologia e serviços que",
    title: "Garantem a segurança das instalações em sua empresa",
    description: "A CTZ trabalha garantindo a segurança e o funcionamento adequado das instalações elétricas da sua empresa.",
  },
]

export const servicesList2 = [
  {
    id: 1,
    "titulo": "Cabeamento estruturado",
    "descricao": "Seus dados trafegando com sigilo e confiabilidade!",
    icon: <MdCable size={40} />,
    img: firstImage,
    subtitle: "A CTZ está preparada para projetar, especificar, instalar e customizar soluções completas que integram Tecnologia da Informação, Engenharia Elétrica, Equipamentos, Materiais e Serviços a fim de implementar a topologia adequada às necessidades da sua empresa.",
    steps: [
      "Execução de Projetos em áreas de Missão Crítica",
      "Infraestrutura física integrada que contempla dados, voz, imagem, automação e segurança",
      "Cabeamento Horizontal e Backbone por: Cabos metálicos UTP, STP ou Crossover, Cabos óticos/Fibras Óticas",
      "Certificação de cabeamento estruturado conforme normas vigentes",
    ],
    icons: [
      { description: "Garantia de Segurança para seus Dados, Informações e Comunicação", icon: <FaLock size={40} /> },
      { description: "Projetos e Soluções sob Medida", icon: <FaPuzzlePiece size={40} /> },
      { description: "Sinergia perfeita entre Tecnologia da Informação e Engenharia Elétrica", icon: <MdCable size={40} /> },
      {  description: "Eficiência e Eficácia na Execução", icon: <FaBolt size={40} /> },
    ],
    icons2: [
      { description: "Confiabilidade em Serviços, Equipamentos e Sistemas", icon: <FaCheckCircle size={40} /> },
      { description: "Segurança e Qualidade", icon: <FaShieldAlt size={40} /> },
      { description: "Disponibilidade e Operacionalidade do Sistema Garantida", icon: <FaServer size={40} /> },
      {  description: "Experiência e Competência Técnica a serviço dos Clientes", icon: <FaUserTie size={40} /> },
    ],
    faq: [
      {
        question: "O que é Cabeamento Estruturado?",
        answer: `- Padronização de toda a rede da empresa com o mesmo tipo de cabo e conectores.
        - Agora você já sabe que a solução de cabeamento estruturado padroniza toda a rede da empresa, permitindo a transmissão de sinais de dados, voz e multimídia na mesma infraestrutura de forma simples e organizada.`
      },
      {
        question: "Quais os benefícios de uma rede bem estruturada?",
        answer: `- Melhora do desempenho do tráfego de dados
          - Manutenção mais rápida
          - Facilidade na instalação de novas conexões
          - Melhor forma de identificar os cabos
          - Melhora o ambiente visual da sua empresa
          - Flexibilidade na aplicação do ponto de rede, pode ser utilizado como ramal telefônico, como ponto de rede para computador, conectar câmeras ou equipamentos.`
      },
    ]
  },
  {
    id: 2,
    "titulo": "Instalação de cabine primária",
    "descricao": "Seu negócio não pode parar por falta de energia!",
    icon: <LiaIndustrySolid size={45} />,
    img: secondImage,
    subtitle: "A CTZ é Especializada em Cabines Primárias e Serviços de Manutenção Escopo dos Serviços",
    steps: [
      "Manutenção preventiva e corretiva em cabines primárias",
      "Laudos de SPDA",
      "Gestão de energia via internet",
      "Análise termográfica em quadros elétricos e cabines",
      "Laudos de instalações elétricas",
      "Análise de Energia"
    ],
    icons: [
      { description: "Economia de Tempo e Benefícios com BAIXO CUSTO", icon: <FaPiggyBank size={40} /> },
      { description: "Atendimento Emergencial", icon: <FaAmbulance size={40} /> },
      { description: "Manutenção Preventiva e Preditiva", icon: <FaTools size={40} /> },
      { description: "Manutenção e Intervenção Programada", icon: <FaClipboardCheck size={40} /> }
    ],
    faq: [
      {
        question: "Qual a importância de realizar a manutenção periódica da cabine primária?",
        answer: `Para manter a segurança e operacionalidade do equipamento e das instalações da empresa pois a Cabine está interligada à rede de distribuição da Concessionária, além de prevenir a ocorrência de curtos circuitos e a paralização das atividades da empresa.`
      },
      {
        question: "Quando e por que devo instalar uma Cabine Primária?",
        answer: `A Cabine Primária deve ser instalada em empreendimentos com alto consumo de energia elétrica e permitem uma série de benefícios, dentre eles:
        - O controle da potência de energia fornecida pela Concessionária
        - A redução de custo na conta de energia
        - A distribuição de energia nas instalações
        - O gerenciamento da energia elétrica`
      }
    ]
  },
  {
    id: 3,
    "titulo": "Instalação de SPDA",
    "descricao": "Para-Raios, para proteção de Vidas e do seu Patrimônio",
    icon: <BsCloudLightningRain size={40} />,
    img: thirdImage,
    subtitle: "A CTZ oferece as melhores soluções e serviços para implantação e adequação dos Sistemas de Proteção contra Descargas Atmosféricas (SPDA) de sua empresa.",
    steps: [
      "Execução de Projetos em áreas de Missão Crítica",
      "Infraestrutura física integrada que contempla dados, voz, imagem, automação e segurança",
      "Cabeamento Horizontal e Backbone por: Cabos metálicos UTP, STP ou Crossover, Cabos óticos/Fibras Óticas",
      "Certificação de cabeamento estruturado conforme normas vigentes",
    ],
    icons: [
      { description: "Garantia de Segurança para seus Dados, Informações e Comunicação", icon: <FaLock size={40} /> },
      { description: "Projetos e Soluções sob Medida", icon: <FaPuzzlePiece size={40} /> },
      { description: "Sinergia perfeita entre Tecnologia da Informação e Engenharia Elétrica", icon: <MdCable size={40} /> },
      {  description: "Eficiência e Eficácia na Execução", icon: <FaBolt size={40} /> },
    ],
    icons2: [
      { description: "Confiabilidade em Serviços, Equipamentos e Sistemas", icon: <FaCheckCircle size={40} /> },
      { description: "Segurança e Qualidade", icon: <FaShieldAlt size={40} /> },
      { description: "Disponibilidade e Operacionalidade do Sistema Garantida", icon: <FaServer size={40} /> },
      {  description: "Experiência e Competência Técnica a serviço dos Clientes", icon: <FaUserTie size={40} /> },
    ],
    faq: [
      {
        question: "O que é um Sistema de Proteção contra Descargas Atmosféricas - SPDA?",
        answer: `Consiste num sistema de equipamentos e componentes que fazem a captação(para raios), descida e aterramento de descargas atmosféricas (raios).`
      },
      {
        question: "Quem pode Projetar um Sistema de SPDA?",
        answer: `Somente profissionais capacitados e devidamente credenciados no CREA (Conselho Regional de Engenharia e Agronomia) podem realizar Projetos de SPDA.`
      },
      {
        question: "Tenho obrigação de instalar um sistema de SPDA?",
        answer: `O Corpo de Bombeiros exige que, Instalações industriais, Galpões, Igrejas, Hospitais, Aeroportos e uma série de Edificações estejam devidamente equipadas com um Sistema de Proteção contra Descargas Atmosféricas.`
      },
    ]
  },
  {
    id: 4,
    "titulo": "Instalações elétricas",
    "descricao": "Soluções completas para proteger sua rede.",
    icon: <FaBoltLightning size={40} />,
    img: fourthImage,
    subtitle: "A CTZ oferece soluções em instalações de redes elétricas residenciais, comerciais e industriais da entrada de energia aos pontos de consumo.",
    steps: [
      "Projetos de Instalações de Redes Elétricas em BT (Baixa Tensão) comum e estabilizada",
      "Entrada de energia e Cabine de medição de Baixa e Média Tensão",
      "Alimentadores e Transformadores de Média e Baixa Tensão",
      "Sistemas de Missão Crítica e Data Centers",
      "Execução de Projetos de Aterramento Padrão e Especiais para Data Centers",
      "Laudos das Instalações Elétricas",
      "Projetos junto às Concessionárias de Energia",
      "Cubículos em Média Tensão para Subestações",
      "Fornecimento e Instalação de QGBT´s, Quadros de Iluminação e Tomadas",
      "Avaliação técnica e medição de resistência de malhas de aterramento",
      "Dimensionamento e instalação de estabilizadores e Nobreaks",
      "Infraestrutura para distribuição de rede elétrica de Iluminação e Tomadas",

    ],
    icons: [
      { description: "Garantia de Segurança para seus Dados, Informações e Comunicação", icon: <FaLock size={40} /> },
      { description: "Projetos e Soluções sob Medida", icon: <FaPuzzlePiece size={40} /> },
      { description: "Sinergia perfeita entre Tecnologia da Informação e Engenharia Elétrica", icon: <MdCable size={40} /> },
      {  description: "Eficiência e Eficácia na Execução", icon: <FaBolt size={40} /> },
    ],
    icons2: [
      { description: "Confiabilidade em Serviços, Equipamentos e Sistemas", icon: <FaCheckCircle size={40} /> },
      { description: "Segurança e Qualidade", icon: <FaShieldAlt size={40} /> },
      { description: "Disponibilidade e Operacionalidade do Sistema Garantida", icon: <FaServer size={40} /> },
      {  description: "Experiência e Competência Técnica a serviço dos Clientes", icon: <FaUserTie size={40} /> },
    ],
    faq: [
      {
        question: "Sou obrigado a fazer laudos de instalações elétricas anualmente?",
        answer: `Sim, para atender a Legislação e Regras do Corpo de Bombeiros para manutenção do Auto de Vistoria do Corpo de Bombeiros e do Alvará de Funcionamento da Empresa.`
      },
      {
        question: "Sou obrigado a fazer Termografia?",
        answer: `Sim, para atender a Legislação e Regras do Corpo de Bombeiros para manutenção do Auto de Vistoria do Corpo de Bombeiros e do Alvará de Funcionamento da Empresa.`
      },
      {
        question: "Você sabe o que é “Cliente Sobrevida” e se você se enquadra nesta condição quanto ao fornecimento de Energia pela Concessionária?",
        answer: `- Os clientes que utilizam/dependem de equipamentos de autonomia limitada, vitais à preservação da vida humana e que necessitam do fornecimento de energia elétrica para o seu pleno funcionamento.

- De acordo com o artigo 27 da Resolução Normativa nº 414/10 da Agência Nacional de Energia Elétrica – ANEEL, o cliente cadastrado na condição em referência, é aquele que utiliza equipamentos elétricos essenciais à sobrevivência humana.

- Se enquadram nesta condição os clientes que utilizam/dependem de equipamentos de autonomia limitada, vitais à preservação da vida humana e que necessitam do fornecimento de energia elétrica para o seu pleno funcionamento.
Fonte: ENEL – https://www.enel.com.br/pt-saopaulo/cliente-sobrevida.html`
      }
    ]
  },
//   {
//     id: 5,
//     "titulo": "Recuperação do ICMS",
//     "descricao": "Utilize o crédito do ICMS das suas contas de energia elétrica!",
//     icon: <MdOutlineAccountBalanceWallet size={40} />,
//     img: firstImage,
//     subtitle: "A Eta Engenharia está preparada para assessorar o cliente em todas as etapas do processo de obtenção da Recuperação do ICMS das contas de energia.",
//     icons_title: "A partir do ano 2000, as empresas comerciais e industriais passaram a utilizar o crédito do ICMS das faturas de energia elétrica nas seguintes situações:",
//     icons_comment: "Restrições: Permitido somente às empresas que operam no Lucro Presumido e Lucro Real, uma vez que as empresas que operam no Simples Nacional não fazem aproveitamento do crédito do ICMS, conforme o artigo 57 da Resolução CGSN 140/2018 e o artigo 23 da Lei Complementar n° 123/2006.",
//     steps: [
//       "Avaliação da documentação do cliente para enquadramento nas regras",
//       "Levantamento de energia consumida em cada setor da empresa, produtivos e não produtivos",
//       "Cumprir as normas e regulamentos do Estado onde estiver o estabelecimento",
//       "Avaliação quanto ao período de retroatividade possível (máximo de 5 anos)",
//       "Emissão de laudo técnico certificando os % de energia consumidas em cada setor",
//       "Emissão de ART (Anotação de Responsabilidade Técnica)",
//       "Protocolo junto à concessionária de energia elétrica",
//       "Assessoria na recuperação do crédito junto ao Fisco",

//     ],icons: [
//       { description: "Quando seu consumo resultar em operação de saída ou prestação para o exterior, na proporção destas sobre as saídas ou prestações totais", icon: <FaGlobeAmericas size={40} /> },
//       { description: "Quando for objeto de operação de saída de energia elétrica", icon: <FaBolt size={40} /> },
//       { description: "Quando consumida no processo de industrialização", icon: <FaIndustry size={40} /> },
//     ],
    
//     icons2: [
//       { description: "Economias que podem chegar a quase 30% do valor da fatura de energia elétrica", icon: <FaPiggyBank size={40} /> },
//       { description: "Avaliação quanto ao enquadramento nos requisitos para solicitar o crédito de ICMS", icon: <FaClipboardCheck size={40} /> },
//       { description: "Engenheiros especializados para que a sua empresa obtenha os melhores resultados", icon: <FaHardHat size={40} /> },
//       { description: "Assessoria Jurídica para que você tenha segurança e tranquilidade", icon: <FaBalanceScale size={40} /> },
//     ],
    
//     faq: [
//       {
//         question: "Quem pode obter a Restituição de ICMS da Energia Consumida?",
//         answer: `Empresas que utilizam a Energia Elétrica em seus processos de Industrialização de produtos e que estejam enquadradas no lucro presumido ou lucro real, pois as empresas do Simples Nacional não fazem aproveitamento do crédito do ICMS.`
//       },
//       {
//         question: "Quais os percentuais de recuperação possíveis?",
//         answer: `Os percentuais variam conforme a legislação e critérios da Secretária da Fazenda de cada Estado e do processo produtivo da empresa pois só é aplicável a restituição sobre a parcela de energia envolvida diretamente na fabricação do produto. Há casos de percentuais de restituição superiores a 30%.`
//       },
//       {
//         question: "Como separar o consumo dos setores produtivos e não produtivos?",
//         answer: `Através da identificação das cargas de energias consumidas nas áreas da empresa, classificando-as entre processo produtivo e administrativo. Para isso contrata-se um Laudo Técnico de uma Empresa Especializada que oferece segurança e idoneidade ao processo a ser enviado aos Órgãos competentes que farão as análises e aprovação.`
//       },
//       {
//         question: "Supermercados têm direito ao crédito de ICMS?",
//         answer: `- Na maioria dos Estados não é possível, exceto alguns Estados que permitem o Crédito do ICMS da Energia consumida em determinados setores do Supermercado
// - É o caso do estado de São Paulo, através da CAT nº 01 de 2007.  `
//       }
//     ]
//   },
  {
    id: 6,
    "titulo": "Retrofit de Cabines",
    "descricao": "Como está a saúde da sua Cabine Primária?",
    icon: <FaRecycle size={40} />,
    img: secondImage,
    subtitle: "A Eta Engenharia está preparada para projetar, especificar, customizar e implementar a melhor solução de RETROFIT DE CABINE.",
    icons_title: "As normas das concessionárias de energia para a aprovação do fornecimento de energia elétrica em Média Tensão foram atualizadas três vezes nos últimos 10 anos",
    icons_comment: "Restrições: Permitido somente às empresas que operam no Lucro Presumido e Lucro Real, uma vez que as empresas que operam no Simples Nacional não fazem aproveitamento do crédito do ICMS, conforme o artigo 57 da Resolução CGSN 140/2018 e o artigo 23 da Lei Complementar n° 123/2006.",
    steps: [
      "Avaliação da Energia disponível da Concessionária",
      "Estudo das Cargas Instaladas X Futuras ampliações e necessidades",
      "Projetos revisados das instalações elétricas - As Built",
      "Homologação junto a Concessionária",
      "Realizar estudo técnico de redimensionamento da Cabine",
      "Elaborar Projeto de Reforma Elétrico conforme alterações",
      "Fornecimento de Equipamentos, Infraestrutura, Cabos, Disjuntores, Componentes",
      "Start up",
    ],icons: [
      { description: "Atualização Tecnológica, Modernização, Conformidade com a Legislação", icon: <FaMicrochip size={40} /> },
      { description: "Aumento da Vida útil da Cabine", icon: <FaRegClock size={40} /> },
      { description: "Mitigar falhas, paradas indesejadas e curtos-circuitos nas instalações", icon: <FaExclamationTriangle size={40} /> },
    ],
    
    icons2: [
      { description: "Preservar vidas e o Patrimônio da empresa", icon: <FaShieldAlt size={40} /> },
      { description: "Evitar multas, danos e mitigar perdas irreversíveis", icon: <FaBan size={40} /> },
      { description: "Gerar economia e elevar a eficiência energética da empresa", icon: <FaPiggyBank size={40} /> },
      { description: "Revisar e atualizar os projetos de instalações elétricas originais para atender normas vigentes", icon: <FaFileContract size={40} /> },
    ],
    
    
    faq: [
      {
        question: "O que é um Retrofit de Cabine Primária?",
        answer: `É a reforma para revitalizar, modernizar e substituir componentes obsoletos e defeituosos numa Cabine Primária, permitindo a extensão da vida útil do equipamento e a manutenção da segurança das instalações.`
      },
      {
        question: "Quando é necessário realizar um Retrofit da Cabine Primária?",
        answer: `Toda expansão das instalações de uma empresa e/ou aquisição de novos equipamentos ou maquinários que aumentem a demanda de energia elétrica se faz necessária a revisão do subsistema de energia. Este processo consiste em fazer novos projetos elétricos, levantar todos os equipamentos e componentes obsoletos, com vida útil esgotada ou confiabilidade comprometida e fazer a substituição.`
      },
    ]
  }
]

export const servicesList = [
  {
    img_url: firstImage,
    title: "Sites profissionais",
    description: "Site profissional 100% personalizado, com um design moderno e responsivos, totalmente otimizado para o Google (SEO) e com tecnologia de última geração. Criação de portais e sistemas customizados para empresas.",
    largeDescription: `Nosso serviço de sites profissionais é ideal para empresas que desejam uma presença digital marcante. 
    Trabalhamos com tecnologia de última geração, garantindo que cada site seja responsivo e adaptado para diferentes dispositivos, desde computadores até smartphones. 
    Nossa equipe altamente qualificada desenvolve portais e sistemas personalizados que atendem às necessidades exclusivas do seu negócio, 
    proporcionando uma navegação intuitiva e um design que encanta os usuários. Seja para expandir sua marca ou atrair novos clientes, 
    estamos prontos para entregar um site que combina funcionalidade e estética.`,
  },
  {
    img_url: secondImage,
    title: "Aplicações WEB",
    description: "Aplicações web modernas e eficientes, projetadas para otimizar processos internos, aumentar a produtividade e melhorar a experiência do usuário, para atender às necessidades específicas do seu negócio.",
    largeDescription: `Criamos aplicações web que vão além da eficiência: oferecemos ferramentas digitais que otimizam seus processos internos 
    e ajudam sua equipe a ser mais produtiva. Com foco total na experiência do usuário, desenvolvemos plataformas que atendem às especificidades do seu negócio, 
    garantindo funcionalidade, velocidade e escalabilidade. Nossas soluções são adaptadas para acompanhar o crescimento da sua empresa, 
    ajudando você a alcançar novos patamares de eficiência e inovação.`,
  },
  {
    img_url: thirdImage,
    title: "Aplicativos android",
    description: "Aplicativos android sob medida para dar vida a sua ideia. Apps projetados para oferecer uma experiência fluida, e com foco na usabilidade e funcionalidades que fazem a diferença.",
    largeDescription: `Nossos aplicativos Android são desenvolvidos com foco em entregar qualidade, usabilidade e um desempenho superior. 
    Trabalhamos com soluções personalizadas que dão vida às suas ideias e necessidades, criando aplicativos que conectam você ao seu público-alvo de forma única. 
    Além de uma experiência fluida e intuitiva, nossos apps oferecem funcionalidades inovadoras, projetadas para se destacar no mercado e fidelizar os usuários. 
    Seja para expandir seu alcance ou otimizar processos, entregamos soluções móveis que fazem a diferença.`,
  },
  {
    img_url: fourthImage,
    title: "API's para integração",
    description: "API's personalizadas e escaláveis, projetadas para para melhorar a eficiência operacional e otimizar processos. Facilitando a comunicação entre plataformas, garantindo segurança, alta performance e simplicidade na integração.",
    largeDescription: `Nossas APIs são projetadas para integrar suas plataformas de maneira eficaz e segura, permitindo uma comunicação perfeita entre sistemas e dispositivos. 
    Oferecemos soluções escaláveis e personalizadas, que atendem desde pequenas empresas até grandes corporações, sempre com foco em eficiência operacional. 
    Garantimos alta performance e simplicidade na integração, reduzindo custos e otimizando processos. Com nossa expertise, ajudamos a criar um ecossistema digital 
    conectado, confiável e pronto para o futuro.`,
  },
];

export const areasAtuacao = [
  {
    "nome": "Bradesco",
    "categoria": "Agências Bancárias",
    img: "https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/1z6cuarw3dvok.jpg",
    redirect: "comerciais"
  },
  {
    "nome": "Wtorre",
    "categoria": "Edifícios Comerciais",
    img: "https://images.adsttc.com/media/images/62f0/73e1/dcc0/3319/6a8b/74f7/medium_jpg/oficinas-entegra-battleiroig_4.jpg?1659925487",
    redirect: "comerciais"

  },
  {
    "nome": "Colégio Dom Bosco",
    "categoria": "Escolas e Estabelecimentos de Ensino",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDH0gTJSWvel3vWo3NT-0TdDqIuiw9hJQDSA&s",
    redirect: "escolas"

  },
  {
    "nome": "Galpão Andorinha",
    "categoria": "Galpões Industriais e Comerciais",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5EyubMyUspiGZOTW0KS2Fbf47YWhih495sA&s",
    redirect: "industriais"
  },
  {
    "nome": "Hospital São Luiz",
    "categoria": "Hospitais, Clínicas e Laboratórios",
    img: "https://planosintermedicasaude.com.br/wp-content/uploads/2021/07/07-A.png",
    redirect: "hospitais"
  },
  {
    "nome": "Indústria",
    "categoria": "Indústrias",
    img: "https://img.freepik.com/fotos-premium/vista-aerea-de-um-armazem-ou-planta-industrial-ou-centro-de-logistica-de-cima-vista-de-cima_131301-490.jpg",
    redirect: "industriais"
  },
  {
    "nome": "Condomínio Valle",
    "categoria": "Residenciais",
    img: "https://www.campinasnaplanta.com.br/wp-content/uploads/alto-cambui-feat.jpg",
    redirect: "residenciais"

    // img: "https://www.campinasnaplanta.com.br/wp-content/uploads/alto-cambui-feat.jpg"
  },
  {
    "nome": "Shopping Bourbon",
    "categoria": "Shopping Centers",
    img: "https://s2-oglobo.glbimg.com/1jWBDB_2MT-8r65AeLrVX-NxdYQ=/0x0:977x651/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/f/t/VSiTg6Q6eJbi3njhiMog/101229995-ri-rio-de-janeiro-rj-03-11-2022-marcas-cariocas-2022-shopping-center-barra-shoppin.jpg",
    redirect: "shoppings"
  },
  {
    "nome": "CTZ instalações elétricas",
    "categoria": "Supermercados e Padarias",
    img: "https://static.wixstatic.com/media/136a6f_8534b83b17274478a59693a1e3be8b32~mv2.jpg/v1/fill/w_568,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/136a6f_8534b83b17274478a59693a1e3be8b32~mv2.jpg",
    redirect: "comerciais"
  },
  {
    "nome": "Teatro Bradesco",
    "categoria": "Teatros e Casas de Espetáculo",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/BBC_Proms_31.jpg/1200px-BBC_Proms_31.jpg",
    redirect: "comerciais"

  }
];

export const portfólio = [
  {
    id: "comerciais",
    category: "Comerciais",
    clients: [
      {
        "name": "Agência Bradesco - Avenida Alamedas Santos",
        "local": "São Paulo – SP",
        "client": "Bradesco S.A.",
        "construct_area": "11.500M²",
        "execution_time": "2 Meses"
      },
      {
        "name": "Bradesco Avenida Paulista",
        "local": "São Paulo – SP",
        "client": "Bradesco S.A.",
        "construct_area": "10.500M²",
        "execution_time": "2 Meses"
      },
      {
        "name": "Escritório Benteler",
        "local": "Campinas – SP",
        "client": "JGTEC",
        "construct_area": "1.800M²",
        "execution_time": "6 Meses"
      },
      {
        "name": "Expo - Transamérica",
        "local": "São Paulo – SP",
        "client": "Plamon Engenharia",
        "construct_area": "35.000M²",
        "execution_time": "7 Meses"
      },
      {
        "name": "Guarde Aqui Mooca",
        "local": "São Paulo – SP",
        "client": "GPE Engenharia",
        "construct_area": "15.500M²",
        "execution_time": "8 Meses"
      },
      {
        "name": "Kennzur",
        "local": "São Paulo – SP",
        "client": "Kennzur",
        "construct_area": "1.000M²",
        "execution_time": "6 Meses"
      },
      {
        "name": "Teatro Bradesco",
        "local": "São Paulo – SP",
        "client": "JGTEC",
        "construct_area": "4.500M²",
        "execution_time": "2 Meses"
      },
      {
        "name": "Vip Body e Hair",
        "local": "Alphaville – SP",
        "client": "Guavira Engenharia",
        "construct_area": "8.000M²",
        "execution_time": null
      },
      {
        "name": "W. Torre BW1",
        "local": "São Paulo – SP",
        "client": "W. Torre",
        "construct_area": "62.000M²",
        "execution_time": "9 Meses"
      }
    ],
    img: "https://images.adsttc.com/media/images/62f0/73e1/dcc0/3319/6a8b/74f7/medium_jpg/oficinas-entegra-battleiroig_4.jpg?1659925487",
  },
  {
    id: "industriais",
    category: "Industriais",
    clients: [
      {
        "name": "HCI / Carmar",
        "local": "São Paulo – SP",
        "client": "HCI",
        "construct_area": "27.000M²",
        "execution_time": "5 Meses"
      },
      {
        "name": "Mack Color",
        "local": "São Paulo – SP",
        "client": "Mack Color",
        "construct_area": "7.000M²",
        "execution_time": "6 Meses"
      },
      {
        "name": "Maquiplast",
        "local": "São Paulo – SP",
        "client": "Maquiplast",
        "construct_area": null,
        "execution_time": "4 Meses"
      },
      {
        "name": "Snelloog",
        "local": "São Paulo – SP",
        "client": "ACS Construtora",
        "construct_area": "25.000M²",
        "execution_time": "4 Meses"
      },
      {
        "name": "Termomecânica São Paulo S.A.",
        "local": "São Paulo – SP",
        "client": "Termomecânica",
        "construct_area": "FAB I – 88.000M², FAB II e III – 66.000M²",
        "execution_time": null
      },
      {
        "name": "Thomas Greg",
        "local": "São Paulo – SP",
        "client": "Thomas Greg",
        "construct_area": "28.000M²",
        "execution_time": null
      },
      {
        "name": "Tubex Brasil",
        "local": "Itupeva – SP",
        "client": "Tubex Brasil",
        "construct_area": "7.500M²",
        "execution_time": null
      }
    ],
    img: "https://img.freepik.com/fotos-premium/vista-aerea-de-um-armazem-ou-planta-industrial-ou-centro-de-logistica-de-cima-vista-de-cima_131301-490.jpg",
    
  },
  // {
  //   category: "Agências",
  // },
  {
    id: "escolas",
    category: "Escolas",
    clients: [
      {
        "name": "Colégio Dom Bosco",
        "local": "São Paulo – SP",
        "client": "Inovalli",
        "construct_area": "4.000M²",
        "execution_time": "8 Meses"
      },
      {
        "name": "Red House International School",
        "local": "São Paulo – SP",
        "client": "Lock Engenharia",
        "construct_area": "6.000M²",
        "execution_time": null
      }
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDH0gTJSWvel3vWo3NT-0TdDqIuiw9hJQDSA&s",
    
  },
  {
    id: "hospitais",
    category: "Hospitais",
    clients: [
      {
        "name": "Hospital Beneficência Portuguesa",
        "local": "Santo André – SP",
        "client": "Hospital Beneficência",
        "construct_area": null,
        "execution_time": "4 Meses"
      },
      {
        "name": "Hospital e Maternidade Assunção",
        "local": "São Bernardo do Campo – SP",
        "client": "Rede D’OR São Luiz",
        "construct_area": null,
        "execution_time": "7 Meses"
      },
      {
        "name": "Hospital e Maternidade Brasil",
        "local": "Santo André – SP",
        "client": "Rede D’OR São Luiz",
        "construct_area": null,
        "execution_time": "18 Meses"
      },
      {
        "name": "Hospital São Luiz",
        "local": "São Paulo – SP",
        "client": "Rede D’OR São Luiz",
        "construct_area": null,
        "execution_time": "7 Meses"
      },
      {
        "name": "Hospital Vivale",
        "local": "São Luiz – SP",
        "client": "Rede D’OR",
        "construct_area": null,
        "execution_time": "6 Meses"
      },
      {
        "name": "Nossa Senhora de Lourdes",
        "local": "Jabaquara, São Paulo – SP",
        "client": "Hospital Beneficência Portuguesa",
        "construct_area": null,
        "execution_time": "4 Meses"
      }
    ],
    img: "https://planosintermedicasaude.com.br/wp-content/uploads/2021/07/07-A.png", 
  },
  {
    id: "residenciais",
    category: "Residenciais",
    clients: [
      {
        "name": "Cobertura Duplex - Ibirapuera",
        "local": "São Paulo – SP",
        "client": "Lock Engenharia",
        "construct_area": "1.000M²",
        "execution_time": "6 Meses"
      },
      {
        "name": "Condomínio Valli 12,14 e 15",
        "local": "São Paulo – SP",
        "client": "Construtora Inovalli",
        "construct_area": "Residência Vertical",
        "execution_time": "15 Meses"
      },
      {
        "name": "Obras Residenciais Edifício Bellini",
        "local": "São Paulo – SP",
        "client": "Lock Engenharia",
        "construct_area": "1 Apartamento de 1.200M² / 2 Apartamentos de 600M²",
        "execution_time": "12 Meses"
      }
    ],
    img: "https://www.campinasnaplanta.com.br/wp-content/uploads/alto-cambui-feat.jpg",
  },
  {
    id: "shoppings",
    category: "Shoppings",
    clients: [
      {
        "name": "Hiper Bergamini - Jaçanã",
        "local": "São Paulo – SP",
        "client": "Hipermercado Bergamini",
        "construct_area": "88.000M²",
        "execution_time": "7 Meses"
      },
      {
        "name": "Hipercenter Andorinha",
        "local": "São Paulo – SP",
        "client": "Grupo Andorinha",
        "construct_area": "83.000M²",
        "execution_time": null
      },
      {
        "name": "Hipermercado Ourinhos",
        "local": "São Paulo – SP",
        "client": "Hipermercado Ourinhos",
        "construct_area": "20.000M²",
        "execution_time": "12 Meses"
      },
      {
        "name": "Roldão Atacadista",
        "local": "São Paulo – SP",
        "client": "Roldão Atacadista",
        "construct_area": "13 Lojas construídas na Grande São Paulo",
        "execution_time": "13 Meses"
      },
      {
        "name": "Shopping Bourbon - Pompéia",
        "local": "São Paulo – SP",
        "client": "Grupo Zaffari",
        "construct_area": "193.000M²",
        "execution_time": "13 Meses"
      },
      {
        "name": "Trimais Lauzane Paulista",
        "local": "São Paulo – SP",
        "client": "Trimais Lauzane Paulista",
        "construct_area": "35.000M²",
        "execution_time": null
      }
    ],
    img: "https://s2-oglobo.glbimg.com/1jWBDB_2MT-8r65AeLrVX-NxdYQ=/0x0:977x651/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/f/t/VSiTg6Q6eJbi3njhiMog/101229995-ri-rio-de-janeiro-rj-03-11-2022-marcas-cariocas-2022-shopping-center-barra-shoppin.jpg",
  },
]

export const sitePages = [
  { title: "Home", path: "/" },
  { title: "Institucional", path: "/institucional" },
  { title: "Serviços", path: "/servicos" },
  { title: "Portfólio", path: "/portfolio" },
  { title: "Contato", path: "/contato" },
]

export const infos = {
  name: "CTZ manutenção e instalações elétricas",
  simpleName: "CTZ",
  instagram: "ctz.instalacaoeletrica",
  facebook: "ctz.instalacaoeletrica",
  phone: "(11) 94754-8869",
  whatsapp: "5511947548869",
  email: "engenharia1@ctzeletrica.com.br",
  businessHours: [
    "Segunda a Sexta das 9h às 18h",
  ],
}
