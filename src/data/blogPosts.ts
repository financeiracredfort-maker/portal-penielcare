export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-funciona-internacao-involuntaria",
    title: "Como funciona a internação involuntária no Brasil?",
    excerpt: "Entenda os aspectos legais, éticos e práticos da internação involuntária. Um guia completo para familiares que buscam ajuda.",
    content: `
A internação involuntária é um tema delicado que gera muitas dúvidas entre familiares de pessoas com dependência química. É importante compreender que esse tipo de internação é previsto em lei e existe para proteger tanto o dependente quanto as pessoas ao seu redor.

## Base Legal

A Lei Federal nº 10.216/2001 regulamenta a internação involuntária no Brasil. Segundo a legislação, esse tipo de internação pode ocorrer quando há risco iminente à vida do paciente ou de terceiros, e deve ser solicitada por um familiar ou responsável legal.

## Quando é Necessária?

A internação involuntária é recomendada em situações como:

- Risco de morte por overdose ou comportamento autodestrutivo
- Agressividade extrema e risco para terceiros
- Perda total de consciência sobre a própria condição
- Negação do tratamento mesmo em situação crítica
- Comorbidades psiquiátricas graves

## Procedimentos Necessários

O processo envolve algumas etapas fundamentais:

1. **Avaliação médica**: Um profissional de saúde mental deve atestar a necessidade da internação
2. **Documentação**: É necessário apresentar documentos pessoais e laudo médico
3. **Autorização familiar**: Um responsável legal deve solicitar formalmente a internação
4. **Comunicação ao Ministério Público**: A internação deve ser comunicada em até 72 horas
5. **Reavaliação periódica**: A equipe médica deve reavaliar a necessidade regularmente

## Direitos do Paciente

Mesmo em internação involuntária, o paciente mantém seus direitos fundamentais:

- Tratamento digno e respeitoso
- Comunicação com familiares
- Acesso a tratamento adequado
- Reavaliação médica regular
- Alta quando não houver mais necessidade

## O Papel da Família

A família desempenha papel crucial no processo. É fundamental:

- Manter comunicação constante com a equipe terapêutica
- Participar das sessões de orientação familiar
- Preparar o ambiente para o retorno do paciente
- Buscar apoio psicológico para si mesma

## Suporte da PENIEL

Nossa equipe oferece orientação completa sobre todo o processo, desde a avaliação inicial até o acompanhamento pós-internação. Trabalhamos com clínicas credenciadas que seguem rigorosamente todos os protocolos legais e éticos.

A internação involuntária é uma decisão difícil, mas pode salvar vidas. Entre em contato conosco para uma avaliação gratuita e confidencial.
    `,
    author: "Dr. Roberto Almeida",
    authorRole: "Psiquiatra especialista em dependência química",
    date: "15 de março de 2025",
    readTime: "8 min",
    category: "Legislação",
    image: "/placeholder.svg"
  },
  {
    slug: "sinais-dependencia-quimica",
    title: "Como identificar os primeiros sinais da dependência química",
    excerpt: "Reconhecer precocemente os sintomas pode fazer toda a diferença no tratamento. Saiba o que observar.",
    content: `
A dependência química é uma doença progressiva que afeta milhões de brasileiros. Identificar os primeiros sinais pode ser crucial para buscar ajuda antes que a situação se agrave.

## Mudanças Físicas

Os primeiros sinais podem aparecer no corpo:

- Alterações no sono (insônia ou sono excessivo)
- Mudanças bruscas de peso
- Negligência com higiene pessoal
- Olhos vermelhos ou pupilas dilatadas
- Tremores ou coordenação motora prejudicada
- Marcas ou feridas inexplicáveis

## Comportamento Emocional

A dependência afeta profundamente o estado emocional:

- Mudanças repentinas de humor
- Irritabilidade e agressividade
- Isolamento social
- Perda de interesse em atividades que antes eram prazerosas
- Ansiedade ou depressão
- Comportamento secretivo

## Impacto Social

As relações começam a deteriorar:

- Problemas no trabalho ou escola (faltas, queda de rendimento)
- Conflitos familiares frequentes
- Abandono de amizades antigas
- Novos círculos sociais suspeitos
- Mentiras recorrentes
- Problemas financeiros

## Sinais de Alerta Críticos

Algumas situações exigem atenção imediata:

- Uso da substância logo ao acordar
- Incapacidade de parar mesmo querendo
- Aumento progressivo das doses
- Tolerância (necessidade de mais para o mesmo efeito)
- Sintomas de abstinência
- Continuidade do uso apesar das consequências graves

## Negação: O Maior Obstáculo

É comum que o dependente negue o problema. Sinais de negação incluem:

- Minimizar a frequência ou quantidade do uso
- Culpar outros pelos próprios problemas
- Prometer parar, mas não conseguir
- Ficar na defensiva quando confrontado

## Como Abordar

Se você identificou esses sinais em alguém próximo:

1. **Escolha o momento certo**: Aborde quando a pessoa estiver sóbria
2. **Use "eu" ao invés de "você"**: "Estou preocupado" ao invés de "Você está errado"
3. **Seja específico**: Mencione comportamentos observáveis
4. **Ofereça apoio**: Deixe claro que quer ajudar, não julgar
5. **Busque orientação profissional**: Não enfrente sozinho

## A Importância da Intervenção Precoce

Quanto mais cedo o tratamento começar:

- Maiores as chances de recuperação completa
- Menores os danos físicos e psicológicos
- Menos prejuízos sociais e profissionais
- Melhor resposta terapêutica

## Como a PENIEL Pode Ajudar

Oferecemos avaliação gratuita e confidencial, onde profissionais especializados podem:

- Avaliar a gravidade da situação
- Orientar sobre as melhores opções de tratamento
- Indicar clínicas adequadas ao perfil
- Apoiar a família em todo o processo

Não espere a situação se tornar crítica. Entre em contato conosco hoje mesmo.
    `,
    author: "Dra. Mariana Costa",
    authorRole: "Psicóloga clínica especialista em adições",
    date: "10 de março de 2025",
    readTime: "10 min",
    category: "Prevenção",
    image: "/placeholder.svg"
  },
  {
    slug: "papel-familia-recuperacao",
    title: "O papel da família na recuperação do dependente",
    excerpt: "A participação familiar é fundamental para o sucesso do tratamento. Descubra como você pode ajudar de forma efetiva.",
    content: `
A recuperação da dependência química não é uma jornada solitária. O apoio familiar é um dos pilares mais importantes para o sucesso do tratamento e a manutenção da sobriedade a longo prazo.

## Por Que a Família É Importante?

Estudos mostram que pacientes com suporte familiar adequado têm:

- 70% mais chances de completar o tratamento
- Menor taxa de recaída no primeiro ano
- Melhor adesão às terapias complementares
- Reintegração social mais efetiva

## Codependência: O Que Evitar

Muitas famílias, sem perceber, mantêm comportamentos que perpetuam o problema:

- **Facilitação**: Resolver problemas causados pelo uso
- **Negação**: Minimizar ou ignorar a gravidade
- **Controle excessivo**: Tentar controlar cada ação do dependente
- **Proteção exagerada**: Evitar que enfrente consequências naturais

## O Que Realmente Ajuda

### Durante a Internação

- Participar das sessões de terapia familiar
- Manter visitas regulares (conforme orientação)
- Respeitar as regras da clínica
- Não levar substâncias ou objetos proibidos
- Manter comunicação aberta com a equipe

### Após a Alta

- Criar um ambiente livre de substâncias
- Estabelecer rotinas saudáveis
- Reconhecer e celebrar as conquistas
- Manter vigilância sem sufocamento
- Ter um plano de ação para situações de risco

## Cuidando de Quem Cuida

Familiares também precisam de apoio:

- **Grupos de apoio**: Como Nar-Anon e Al-Anon
- **Terapia individual**: Para processar emoções
- **Autocuidado**: Não se esqueça de si mesmo
- **Rede de suporte**: Busque outros familiares e amigos

## Comunicação Efetiva

Como se comunicar de forma saudável:

1. **Seja direto mas amoroso**: "Me preocupo com você"
2. **Evite acusações**: Use "eu sinto" ao invés de "você sempre"
3. **Estabeleça limites claros**: Com consequências consistentes
4. **Escute ativamente**: Sem interromper ou julgar
5. **Validação emocional**: Reconheça os sentimentos

## Sinais de Recaída

Fique atento a:

- Retorno a lugares ou pessoas do passado
- Isolamento social
- Negligência com compromissos
- Mudanças de humor extremas
- Mentiras ou comportamento secretivo

## Plano de Prevenção de Recaída

Trabalhe junto com o dependente para criar:

- Lista de gatilhos e como evitá-los
- Contatos de emergência
- Estratégias de enfrentamento
- Atividades alternativas
- Metas de curto e longo prazo

## Estabelecendo Limites Saudáveis

Limites são atos de amor:

- Não fornecer dinheiro sem controle
- Não aceitar comportamentos abusivos
- Não mentir para proteger o dependente
- Manter as consequências estabelecidas
- Buscar ajuda quando necessário

## Recursos e Apoio Contínuo

A PENIEL oferece:

- Grupos de apoio para familiares
- Orientação psicológica
- Material educativo
- Acompanhamento pós-tratamento
- Linha de apoio 24 horas

## Histórias Reais de Recuperação

Muitas famílias que seguem essas orientações relatam:

- Melhora significativa nas relações
- Redução do estresse familiar
- Desenvolvimento de resiliência
- Recuperação duradoura do ente querido

## Quando Buscar Ajuda Profissional

Procure orientação se:

- A situação está afetando sua saúde
- Há violência ou ameaças
- Você se sente sem esperança
- Não sabe como agir
- Suspeita de recaída

Lembre-se: você não está sozinho nessa jornada. A equipe PENIEL está pronta para apoiar toda a família, com orientação profissional e acolhimento humanizado. Entre em contato e descubra como podemos ajudar.
    `,
    author: "Terapeuta Familiar Juliana Ribeiro",
    authorRole: "Especialista em terapia familiar sistêmica",
    date: "5 de março de 2025",
    readTime: "12 min",
    category: "Família",
    image: "/placeholder.svg"
  },
  {
    slug: "clinica-recuperacao-ou-reabilitacao",
    title: "Clínica de recuperação ou reabilitação? Entenda as diferenças",
    excerpt: "Conheça as diferenças entre os tipos de tratamento e escolha a melhor opção para cada situação.",
    content: `
Quando buscamos ajuda para dependência química, deparamos com diversos termos: clínica de recuperação, reabilitação, comunidade terapêutica. Entender as diferenças é fundamental para fazer a escolha certa.

## Clínica de Recuperação

**Definição**: Estabelecimentos de saúde especializados em tratamento inicial e desintoxicação.

### Características:

- Equipe médica 24 horas
- Foco na desintoxicação supervisionada
- Tratamento de sintomas de abstinência
- Estabilização do quadro agudo
- Duração: geralmente 15 a 30 dias

### Quando é indicada:

- Casos de intoxicação grave
- Necessidade de medicação controlada
- Comorbidades psiquiátricas
- Risco de convulsões durante abstinência

## Centro de Reabilitação

**Definição**: Foco no tratamento psicossocial de longo prazo.

### Características:

- Ênfase na terapia e ressocialização
- Programas estruturados de 90 a 180 dias
- Atividades terapêuticas diárias
- Desenvolvimento de habilidades de vida
- Preparação para reinserção social

### Quando é indicado:

- Após fase de desintoxicação
- Necessidade de mudança comportamental profunda
- Histórico de recaídas
- Ambiente familiar desfavorável

## Comunidade Terapêutica

**Definição**: Ambiente residencial com foco em convivência e trabalho terapêutico.

### Características:

- Modelo de autoajuda supervisionada
- Participação ativa dos residentes
- Atividades laborais e ocupacionais
- Menor presença médica
- Custo geralmente mais acessível

### Quando é indicada:

- Casos de dependência leve a moderada
- Necessidade de isolamento social temporário
- Busca por espiritualidade
- Orçamento limitado

## Hospital Psiquiátrico

**Definição**: Para casos com transtornos mentais graves associados.

### Características:

- Estrutura hospitalar completa
- Psiquiatras e enfermagem especializada
- Tratamento de duplo diagnóstico
- Alta complexidade médica

### Quando é indicado:

- Esquizofrenia + dependência
- Transtorno bipolar grave
- Risco de suicídio
- Crises psicóticas

## Ambulatório Especializado

**Definição**: Tratamento sem internação, com consultas regulares.

### Características:

- Paciente mantém rotina normal
- Consultas periódicas
- Ideal para casos leves
- Rede de apoio familiar forte

### Quando é indicado:

- Dependência em fase inicial
- Paciente com motivação própria
- Boa estrutura familiar
- Funções sociais preservadas

## Como Escolher?

### Avalie:

1. **Gravidade da dependência**
   - Leve: ambulatório
   - Moderada: reabilitação
   - Grave: recuperação + reabilitação

2. **Condições clínicas**
   - Comorbidades exigem estrutura médica
   - Saúde estável permite comunidade terapêutica

3. **Aspecto financeiro**
   - Hospitais são mais caros
   - Comunidades terapêuticas mais acessíveis

4. **Tempo disponível**
   - Ambulatório: mantém trabalho/estudo
   - Internação: requer afastamento

5. **Histórico de tratamento**
   - Primeira vez: abordagem menos invasiva
   - Recaídas: intensificar o tratamento

## Perguntas a Fazer

Antes de escolher, questione:

- Qual a formação da equipe?
- Como é a estrutura física?
- Qual a metodologia terapêutica?
- Há acompanhamento após alta?
- A família participa do tratamento?
- Qual o índice de sucesso?
- Há credenciamento nos órgãos competentes?

## Modelos Terapêuticos

### Tradicional / Psiquiátrico
- Base médica e farmacológica
- Foco em sintomas
- Hospitalar

### Psicossocial
- Terapias de grupo
- Ressocialização
- Atividades ocupacionais

### Modelo Minnesota (12 Passos)
- Baseado em AA/NA
- Espiritualidade
- Grupos de apoio

### Redução de Danos
- Abordagem gradual
- Minimizar riscos
- Sem exigência de abstinência total

## O Papel da PENIEL

Nossa rede trabalha com diversos tipos de estabelecimentos credenciados:

- Avaliamos o perfil de cada paciente
- Indicamos o tipo de tratamento mais adequado
- Acompanhamos durante todo o processo
- Oferecemos segunda opinião gratuita

## Combinação de Tratamentos

Muitas vezes a melhor abordagem combina:

1. **Fase 1**: Desintoxicação em clínica de recuperação (15-30 dias)
2. **Fase 2**: Reabilitação intensiva (90-180 dias)
3. **Fase 3**: Acompanhamento ambulatorial + grupos de apoio

## Critérios de Qualidade

Seja qual for o tipo, verifique:

- ✓ Alvará de funcionamento
- ✓ Responsável técnico habilitado
- ✓ Instalações adequadas
- ✓ Plano terapêutico individualizado
- ✓ Respeito aos direitos do paciente
- ✓ Transparência com familiares

## Mitos Comuns

**Mito**: "Quanto mais tempo internado, melhor"
**Verdade**: O ideal é o tempo necessário para cada caso

**Mito**: "Comunidade terapêutica não tem valor"
**Verdade**: Pode ser muito eficaz dependendo do perfil

**Mito**: "Só hospital resolve"
**Verdade**: Excesso de medicalização pode ser prejudicial

## Tome a Decisão Certa

A escolha do tipo de tratamento deve ser:

- Baseada em avaliação profissional
- Adequada ao perfil do paciente
- Aceita pela família
- Viável financeiramente
- Focada em resultados de longo prazo

Entre em contato com a PENIEL para uma avaliação gratuita e receba orientação especializada sobre qual tipo de tratamento é mais adequado para o seu caso. Nossa equipe está pronta para esclarecer todas as suas dúvidas.
    `,
    author: "Dr. Fernando Oliveira",
    authorRole: "Psiquiatra coordenador de equipe multidisciplinar",
    date: "28 de fevereiro de 2025",
    readTime: "15 min",
    category: "Orientação",
    image: "/placeholder.svg"
  },
  {
    slug: "quando-procurar-ajuda-profissional",
    title: "Quando procurar ajuda profissional?",
    excerpt: "Identifique os sinais críticos que indicam necessidade urgente de intervenção profissional.",
    content: `
Reconhecer o momento certo de buscar ajuda profissional pode salvar vidas. A dependência química é uma doença progressiva e quanto antes o tratamento começar, melhores os resultados.

## Sinais de Alerta Imediato

Procure ajuda URGENTE se observar:

### Risco de Vida
- Overdose ou intoxicação grave
- Pensamentos ou tentativas de suicídio
- Agressividade extrema
- Convulsões ou tremores severos
- Confusão mental aguda
- Perda de consciência

### Deterioração Rápida
- Perda de mais de 10% do peso em poucas semanas
- Uso diário e crescente da substância
- Incapacidade total de parar
- Isolamento social completo

## Quando a Situação Está Saindo do Controle

Sinais que indicam necessidade de avaliação profissional:

### No Comportamento
- Mentiras frequentes e elaboradas
- Furtos ou venda de pertences
- Desaparecimentos por dias
- Abandono total de responsabilidades
- Relacionamentos violentos

### Na Saúde
- Infecções recorrentes
- Problemas hepáticos
- Dificuldade respiratória
- Feridas que não cicatrizam
- Desnutrição evidente

### Na Vida Social
- Perda de emprego
- Abandono de estudos
- Divórcio ou separação
- Perda de guarda de filhos
- Problemas legais

## Tentei Ajudar, Mas Não Funcionou

Se você já:

- Conversou diversas vezes
- A pessoa prometeu parar mas não conseguiu
- A situação só piora
- Você se sente impotente
- Sua saúde está sendo afetada

**É hora de buscar ajuda profissional.**

## Diferenças Entre Uso, Abuso e Dependência

### Uso Recreativo
- Ocasional
- Em contexto social
- Sem consequências
- Controlável

### Abuso
- Uso frequente
- Algumas consequências
- Começam mentiras
- Ainda há controle parcial

### Dependência
- Uso compulsivo
- Consequências graves
- Tolerância aumentada
- Abstinência quando para
- Perda total de controle

**A dependência SEMPRE requer ajuda profissional.**

## Avaliação Profissional: O Que Esperar

### Primeira Consulta

A equipe irá avaliar:

1. **Histórico de uso**
   - Substâncias utilizadas
   - Frequência e quantidade
   - Tempo de uso
   - Tentativas anteriores de parar

2. **Estado de saúde**
   - Exame físico
   - Saúde mental
   - Comorbidades
   - Medicações atuais

3. **Contexto social**
   - Situação familiar
   - Trabalho/estudos
   - Rede de apoio
   - Questões legais

4. **Motivação**
   - Reconhecimento do problema
   - Desejo de mudança
   - Expectativas
   - Medos

### Após Avaliação

O profissional irá:

- Determinar o nível de gravidade
- Recomendar tipo de tratamento
- Apresentar opções disponíveis
- Explicar o processo
- Responder dúvidas

## Tipos de Profissionais

### Quem Pode Ajudar

**Psiquiatra**: Diagnóstico, medicação, casos complexos
**Psicólogo**: Terapias, apoio emocional
**Terapeuta em dependência**: Especialista em adições
**Assistente social**: Questões sociais e familiares
**Médico clínico**: Saúde física geral

### Equipe Multidisciplinar

O ideal é tratamento com diversos profissionais trabalhando juntos.

## Opções de Tratamento

Dependendo da avaliação:

### Ambulatorial
- Consultas regulares
- Paciente em casa
- Ideal para casos leves

### Hospital-Dia
- Tratamento durante o dia
- Retorna para casa à noite
- Casos moderados

### Internação
- Residencial 24h
- Casos graves
- Necessidade de afastamento

### Grupos de Apoio
- AA, NA, grupos terapêuticos
- Complementar a outros tratamentos
- Gratuito e eficaz

## Barreiras e Como Superá-las

### "Ele não quer se tratar"
- Internação involuntária é possível
- Motivação pode ser trabalhada
- Não espere "tocar o fundo"

### "É muito caro"
- SUS oferece tratamento gratuito
- Comunidades terapêuticas acessíveis
- Planos de saúde cobrem
- PENIEL pode ajudar a encontrar opções

### "Tenho vergonha"
- Dependência é doença, não fraqueza
- Profissionais não julgam
- Sigilo é garantido
- Muitas pessoas passam por isso

### "E se não funcionar?"
- Pode ser necessário mais de uma tentativa
- Cada tratamento é aprendizado
- Ajuste de abordagem é normal
- Desistir é que não é opção

## Preparação para a Primeira Consulta

Leve:

- Lista de medicamentos atuais
- Histórico médico
- Documentos pessoais
- Perguntas anotadas
- Alguém de confiança (se quiser)

## Perguntas Para Fazer ao Profissional

- Qual o diagnóstico?
- Qual tipo de tratamento recomenda?
- Quanto tempo leva?
- Quais os custos?
- E se houver recaída?
- Como a família pode ajudar?
- Há acompanhamento após alta?

## O Papel da Família na Busca por Ajuda

A família pode:

- Buscar informações
- Agendar avaliação
- Acompanhar na primeira consulta
- Oferecer apoio emocional
- Também fazer terapia

## Situações Especiais

### Adolescentes
- Pais/responsáveis devem buscar ajuda
- Não esperar a maioridade
- Quanto antes, melhor

### Gestantes
- URGENTE: risco para mãe e bebê
- Tratamento específico disponível
- Sem julgamentos

### Idosos
- Dependência também afeta essa faixa
- Tratamento adaptado à idade
- Atenção às comorbidades

### Profissionais (médicos, enfermeiros, etc.)
- Programas específicos
- Sigilo reforçado
- Foco em retorno ao trabalho

## Não Espere a Situação Piorar

Quanto mais cedo buscar ajuda:

- ✓ Menos danos físicos
- ✓ Menos prejuízos sociais
- ✓ Melhor prognóstico
- ✓ Recuperação mais rápida
- ✓ Menos custo emocional e financeiro

## Como a PENIEL Pode Ajudar AGORA

Oferecemos:

- **Avaliação gratuita por telefone/WhatsApp**
- **Orientação 24 horas por dia**
- **Indicação da melhor opção de tratamento**
- **Suporte para remoção imediata se necessário**
- **Acompanhamento familiar**
- **Total sigilo e respeito**

## Não Está Sozinho

Milhões de brasileiros e suas famílias enfrentam a dependência química. Buscar ajuda profissional não é sinal de fraqueza, mas de coragem e amor.

A equipe PENIEL está pronta para ajudar você a dar o primeiro passo. Entre em contato agora mesmo, sem compromisso. A avaliação é gratuita e o atendimento é humanizado.

**Ligue, mande WhatsApp ou preencha nosso formulário. A ajuda que você precisa está a um clique de distância.**
    `,
    author: "Equipe Multidisciplinar PENIEL",
    authorRole: "Coordenação clínica",
    date: "20 de fevereiro de 2025",
    readTime: "14 min",
    category: "Orientação",
    image: "/placeholder.svg"
  }
];
