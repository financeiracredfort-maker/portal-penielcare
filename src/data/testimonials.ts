export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  location: string;
  relationship: string;
  story: string;
  situation: string;
  result: string;
  timeClean: string;
  date: string;
  rating: number;
  featured?: boolean;
  videoUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria S.",
    initials: "M.S.",
    location: "Belo Horizonte, MG",
    relationship: "Mãe",
    story: "Graças à PENIEL, meu filho está há 8 meses limpo. A equipe foi incrível do início ao fim, sempre com muito carinho e profissalismo. Quando liguei pela primeira vez, estava desesperada. Meu filho tinha 23 anos e estava completamente perdido nas drogas. A equipe me acolheu, orientou sobre cada passo e me deu esperança quando eu já não tinha mais.",
    situation: "Dependência de cocaína e álcool há 4 anos. Já tinha tentado 2 internações anteriores sem sucesso. Relacionamento familiar destruído.",
    result: "Hoje ele trabalha, voltou a estudar e está reconstruindo a relação com a família. Participa de grupos de apoio semanalmente e tem planos para o futuro.",
    timeClean: "8 meses",
    date: "Janeiro de 2025",
    rating: 5,
    featured: true
  },
  {
    id: "2",
    name: "João P.",
    initials: "J.P.",
    location: "São Paulo, SP",
    relationship: "Irmão",
    story: "A orientação que recebi foi fundamental para tomar a decisão certa. Senti confiança em cada etapa do processo. Recomendo de coração. Minha irmã estava usando crack há 3 anos. Já havíamos perdido as esperanças. A PENIEL nos ajudou a entender que ainda havia solução e nos guiou para uma clínica incrível em Sorocaba.",
    situation: "Uso de crack, situação de rua, prostituição. Família sem saber como agir, com medo de piorar a situação.",
    result: "Ela completou o programa de 6 meses, está morando em uma residência terapêutica e trabalhando em uma padaria. Voltou a ter contato com o filho de 7 anos.",
    timeClean: "1 ano e 2 meses",
    date: "Dezembro de 2024",
    rating: 5,
    featured: true
  },
  {
    id: "3",
    name: "Ana Clara R.",
    initials: "A.R.",
    location: "Rio de Janeiro, RJ",
    relationship: "Irmã",
    story: "Atendimento humanizado e respeitoso. A PENIEL nos deu esperança quando mais precisávamos. Minha irmã hoje está se recuperando maravilhosamente. O acompanhamento foi essencial, especialmente nos primeiros meses após a alta. Eles realmente se importam com cada pessoa.",
    situation: "Alcoolismo grave há 15 anos. Três internações anteriores com recaída imediata. Cirrose inicial diagnosticada.",
    result: "Está sóbria, em tratamento médico regular, faz terapia semanal e voltou a ter uma vida social saudável. Conseguiu um emprego após 5 anos desempregada.",
    timeClean: "10 meses",
    date: "Novembro de 2024",
    rating: 5,
    featured: true
  },
  {
    id: "4",
    name: "Roberto M.",
    initials: "R.M.",
    location: "Curitiba, PR",
    relationship: "Pai",
    story: "Minha filha estava internada havia 2 meses e não víamos melhora. A PENIEL nos orientou a trocar de clínica e foi a melhor decisão. Na nova clínica indicada, ela encontrou um tratamento que realmente funcionou para ela. Hoje, 5 meses depois, é outra pessoa.",
    situation: "Dependência de benzodiazepínicos e álcool. Depressão severa. Primeira clínica não estava adequada ao perfil dela.",
    result: "Completou 4 meses de tratamento em clínica especializada. Faz acompanhamento psiquiátrico, está medicada corretamente e retomou a faculdade.",
    timeClean: "5 meses",
    date: "Outubro de 2024",
    rating: 5
  },
  {
    id: "5",
    name: "Fernanda L.",
    initials: "F.L.",
    location: "Salvador, BA",
    relationship: "Esposa",
    story: "Eu não sabia por onde começar. A PENIEL me orientou em cada passo, me deu suporte emocional e psicológico. Meu marido estava em negação total, mas com a abordagem certa da equipe, ele aceitou o tratamento. Hoje ele me agradece. Diz que salvei a vida dele. Todo o processo foi feito com muito respeito e cuidado.",
    situation: "Alcoolismo grave com agressividade. Resistência ao tratamento. Família com medo. Situação financeira comprometida.",
    result: "Após 6 meses de tratamento, voltou para casa. Está sóbrio há 7 meses, voltou a trabalhar como engenheiro e participa ativamente do AA.",
    timeClean: "7 meses",
    date: "Setembro de 2024",
    rating: 5
  },
  {
    id: "6",
    name: "Carlos Eduardo T.",
    initials: "C.T.",
    location: "Brasília, DF",
    relationship: "Filho",
    story: "Meu pai tinha 58 anos quando internou. Achávamos que era tarde demais. A PENIEL nos mostrou que nunca é tarde. Ele está com 62 agora, sóbrio há 3 anos e é nosso maior exemplo de superação. A clínica soube lidar com as questões específicas da idade dele.",
    situation: "Alcoolismo há 35 anos. Problemas cardíacos. Família achava que não tinha mais jeito. Aposentado e isolado socialmente.",
    result: "Recuperou a saúde, voltou a fazer atividades físicas, tem vida social ativa em grupos de apoio para idosos e se reconciliou com toda a família.",
    timeClean: "3 anos",
    date: "Agosto de 2024",
    rating: 5
  },
  {
    id: "7",
    name: "Juliana K.",
    initials: "J.K.",
    location: "Porto Alegre, RS",
    relationship: "Mãe",
    story: "Minha filha tinha 16 anos. Eu tinha vergonha de contar para as pessoas, achava que era culpa minha. A PENIEL me acolheu sem julgamentos e me ensinou que dependência é doença. Hoje entendo que buscar ajuda foi a maior prova de amor que dei a ela. Participei de todas as terapias familiares e isso transformou nossa relação.",
    situation: "Adolescente usando maconha e ecstasy. Problemas escolares graves. Automutilação. Mãe com muita culpa e vergonha.",
    result: "Completou o tratamento, voltou para a escola, está fazendo cursinho pré-vestibular e tem planos de estudar psicologia para ajudar outros jovens.",
    timeClean: "1 ano e 4 meses",
    date: "Julho de 2024",
    rating: 5
  },
  {
    id: "8",
    name: "Anderson F.",
    initials: "A.F.",
    location: "Recife, PE",
    relationship: "Irmão",
    story: "Meu irmão teve uma recaída depois de 2 anos limpo. Achamos que tudo estava perdido novamente. A PENIEL nos explicou que recaída faz parte do processo e que não devíamos desistir. Ele fez um reforço de 45 dias e hoje está firme novamente há 8 meses. O acompanhamento pós-tratamento fez toda diferença.",
    situation: "Havia se recuperado mas teve recaída após perder o emprego. Família desanimada. Ele com muita vergonha e culpa.",
    result: "Entendeu melhor seus gatilhos, desenvolveu ferramentas de enfrentamento mais sólidas. Está empregado novamente e é padrinho de outros membros do NA.",
    timeClean: "8 meses (após recaída)",
    date: "Junho de 2024",
    rating: 5
  },
  {
    id: "9",
    name: "Patrícia M.",
    initials: "P.M.",
    location: "Fortaleza, CE",
    relationship: "Esposa",
    story: "Meu marido é médico. A vergonha e o medo de perder o CRM faziam com que escondêssemos o problema. A PENIEL conhecia casos assim e nos orientou sobre tratamento sigiloso. Ele se tratou e voltou a exercer a medicina com segurança. Hoje ajuda outros profissionais de saúde que passam pelo mesmo.",
    situation: "Médico com dependência de opioides (automedicação). Risco de perder registro profissional. Família mantendo segredo.",
    result: "Tratamento discreto e eficaz. Manteve o CRM, fez acompanhamento especializado e retornou ao trabalho após 4 meses. Participa de grupo de apoio para profissionais de saúde.",
    timeClean: "1 ano e 1 mês",
    date: "Maio de 2024",
    rating: 5
  },
  {
    id: "10",
    name: "Rodrigo S.",
    initials: "R.S.",
    location: "Campinas, SP",
    relationship: "Pai",
    story: "Meu filho tinha tudo: faculdade, emprego bom, noiva. Perdeu tudo em 2 anos de dependência. Quando a PENIEL nos ajudou, eu já não acreditava que ele voltaria a ser quem era. Mas ele não voltou a ser quem era - ele se tornou alguém melhor, mais forte e consciente. Hoje ele ajuda outros na recuperação e estou muito orgulhoso dele.",
    situation: "Jovem executivo usando cocaína socialmente que evoluiu para dependência grave. Perdeu emprego, noiva e apartamento. Dívidas altas.",
    result: "Recuperou a carreira (em outra empresa), está noivo novamente, quitou as dívidas e faz trabalho voluntário em prevenção às drogas em escolas.",
    timeClean: "2 anos",
    date: "Abril de 2024",
    rating: 5
  },
  {
    id: "11",
    name: "Luciana B.",
    initials: "L.B.",
    location: "Goiânia, GO",
    relationship: "Filha",
    story: "Minha mãe sempre foi forte, mas o luto pela morte do meu pai a levou ao alcoolismo. Foi difícil ver minha mãe naquela situação. A PENIEL entendeu que ela precisava de um tratamento que abordasse também o luto. A clínica indicada tinha essa especialização. Hoje ela está bem, faz terapia e voltou a sorrir.",
    situation: "Alcoolismo reativo (após perda). Depressão profunda. Tentativa de suicídio. Filha sem saber como ajudar.",
    result: "Tratou simultaneamente o luto e a dependência. Está sóbria, faz acompanhamento psicológico, participa de grupo de viúvas e reconstruiu sua vida social.",
    timeClean: "9 meses",
    date: "Março de 2024",
    rating: 5
  },
  {
    id: "12",
    name: "Marcelo A.",
    initials: "M.A.",
    location: "Manaus, AM",
    relationship: "Tio",
    story: "Meu sobrinho mora em uma cidade pequena do interior do Amazonas. Achávamos impossível conseguir tratamento adequado. A PENIEL organizou toda a logística: passagem, transporte seguro desde a cidade dele, documentação, tudo. Ele está internado em uma excelente clínica em Manaus há 3 meses e a evolução é visível. Sem a PENIEL, não teríamos conseguido.",
    situation: "Dependência de crack em cidade pequena sem recursos. Família sem condições de organizar transferência e tratamento. Urgência alta.",
    result: "Tratamento adequado em clínica de qualidade. Família pode visitá-lo regularmente. Previsão de alta em 2 meses com plano de reinserção na cidade de origem.",
    timeClean: "3 meses",
    date: "Fevereiro de 2025",
    rating: 5
  }
];
