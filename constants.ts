
import { QuizQuestionType, InfoSection } from './types';

export const INFO_TAB_CONTENT: { title: string; sections: InfoSection[] }[] = [
  {
    title: 'Transporte Passivo',
    sections: [
      {
        title: 'Definição Geral',
        description: 'Movimento de substâncias através da membrana plasmática sem gasto de energia (ATP) pela célula, ocorrendo a favor do gradiente de concentração (da área de maior para a de menor concentração).',
        image: 'https://picsum.photos/seed/passivetransport/400/250',
      },
      {
        title: 'Difusão Simples',
        description: 'Movimento de pequenas moléculas apolares (como O2, CO2) ou lipossolúveis diretamente através da bicamada lipídica da membrana.',
        image: 'https://picsum.photos/seed/simplediffusion/400/250',
        example: 'Troca de gases (oxigênio e dióxido de carbono) nos alvéolos pulmonares e nos tecidos.',
      },
      {
        title: 'Difusão Facilitada',
        description: 'Movimento de moléculas maiores, polares (como glicose, aminoácidos) ou íons através da membrana com o auxílio de proteínas transportadoras específicas (proteínas canal ou permeases/carreadoras).',
        image: 'https://picsum.photos/seed/facilitateddiffusion/400/250',
        example: 'Entrada de glicose nas células musculares e adiposas, mediada pela insulina que aumenta o número de transportadores GLUT4 na membrana.',
      },
      {
        title: 'Osmose',
        description: 'Tipo específico de difusão passiva que envolve o movimento de água (solvente) através de uma membrana semipermeável, da região de menor concentração de soluto (meio hipotônico) para a de maior concentração de soluto (meio hipertônico), buscando o equilíbrio osmótico.',
        image: 'https://picsum.photos/seed/osmosiscells/400/250',
        example: 'Absorção de água pelas raízes das plantas do solo. Células animais em meios com diferentes concentrações: hemácias murcham em solução hipertônica e incham/rompem em solução hipotônica.',
      },
    ],
  },
  {
    title: 'Transporte Ativo',
    sections: [
      {
        title: 'Definição Geral',
        description: 'Movimento de substâncias através da membrana plasmática com gasto de energia (ATP) pela célula, geralmente ocorrendo contra o gradiente de concentração (da área de menor para a de maior concentração).',
        image: 'https://picsum.photos/seed/activetransport/400/250',
      },
      {
        title: 'Transporte Ativo Primário',
        description: 'Utiliza diretamente a energia da hidrólise do ATP para bombear substâncias através da membrana. A proteína transportadora é frequentemente uma ATPase.',
        image: 'https://picsum.photos/seed/primaryactive/400/250',
        example: 'Bomba de Sódio e Potássio (Na+/K+ ATPase): bombeia 3 íons Na+ para fora da célula e 2 íons K+ para dentro, essencial para manter o potencial de membrana e o volume celular.',
      },
      {
        title: 'Transporte Ativo Secundário (Co-transporte)',
        description: 'Utiliza a energia armazenada no gradiente de concentração de um íon (geralmente Na+, estabelecido por transporte ativo primário) para transportar outra substância contra seu próprio gradiente. Não utiliza ATP diretamente.',
        image: 'https://picsum.photos/seed/secondaryactive/400/250',
        example: 'Simporte Na+/glicose: o transporte de Na+ a favor do seu gradiente para dentro da célula fornece energia para transportar glicose contra seu gradiente para dentro da célula (ocorre nas células intestinais e renais).',
        subSections: [
          {
            title: "Simporte",
            description: "Ambas as substâncias são transportadas na mesma direção através da membrana.",
            image: "https://picsum.photos/seed/symport/300/200"
          },
          {
            title: "Antiporte",
            description: "As substâncias são transportadas em direções opostas através da membrana.",
            image: "https://picsum.photos/seed/antiport/300/200"
          }
        ]
      },
      {
        title: 'Transporte em Massa (Endocitose e Exocitose)',
        description: 'Mecanismos para transportar grandes moléculas, partículas ou grandes quantidades de substâncias para dentro (endocitose) ou para fora (exocitose) da célula, envolvendo a formação e fusão de vesículas.',
        image: 'https://picsum.photos/seed/bulktransport/400/250',
        subSections: [
          {
            title: 'Endocitose',
            description: 'Processo de internalização de material pela célula. A membrana plasmática se invagina e forma uma vesícula contendo o material.',
            image: 'https://picsum.photos/seed/endocytosisprocess/350/220',
            example: 'Captura de nutrientes, defesa contra patógenos.',
            subSections: [
              {
                title: 'Fagocitose ("comer celular")',
                description: 'Englobamento de partículas grandes e sólidas, como bactérias, detritos celulares ou vírus. Formam-se fagossomos.',
                image: 'https://picsum.photos/seed/phagocytosis/300/200',
                example: 'Glóbulos brancos (macrófagos) fagocitando bactérias.',
              },
              {
                title: 'Pinocitose ("beber celular")',
                description: 'Englobamento de fluidos extracelulares e solutos dissolvidos de forma não específica. Formam-se pinossomos.',
                image: 'https://picsum.photos/seed/pinocytosis/300/200',
                example: 'Absorção de gotículas de gordura no intestino delgado.',
              },
              {
                title: 'Endocitose Mediada por Receptor',
                description: 'Forma altamente específica de endocitose onde moléculas se ligam a receptores específicos na superfície celular, desencadeando a formação de vesículas revestidas (geralmente por clatrina).',
                image: 'https://picsum.photos/seed/receptormediated/300/200',
                example: 'Captação de colesterol (LDL) pelas células.',
              },
            ],
          },
          {
            title: 'Exocitose',
            description: 'Processo de liberação de substâncias para o exterior da célula. Vesículas contendo o material se fundem com a membrana plasmática, liberando seu conteúdo no meio extracelular.',
            image: 'https://picsum.photos/seed/exocytosisprocess/350/220',
            example: 'Secreção de hormônios (insulina), neurotransmissores, enzimas digestivas, muco.',
          },
        ],
      },
    ],
  },
];


export const BIOLOGY_QUIZ_QUESTIONS: QuizQuestionType[] = [
  {
    id: 'q1',
    question: 'Qual processo é caracterizado pelo movimento de substâncias através da membrana a favor do gradiente de concentração, sem gasto de ATP?',
    options: ['Transporte Ativo', 'Transporte Passivo', 'Endocitose', 'Exocitose'],
    correctAnswer: 'Transporte Passivo',
    explanation: 'O transporte passivo não requer energia metabólica (ATP) da célula e ocorre quando as substâncias se movem de uma área de maior concentração para uma de menor concentração.',
    image: 'https://picsum.photos/seed/gradientflow/300/200',
  },
  {
    id: 'q2',
    question: 'A passagem de oxigênio (O2) do ar nos alvéolos para o sangue nos capilares pulmonares é um exemplo de:',
    options: ['Osmose', 'Difusão Simples', 'Transporte Ativo Primário', 'Fagocitose'],
    correctAnswer: 'Difusão Simples',
    explanation: 'A difusão simples é o movimento de pequenas moléculas apolares, como o O2, diretamente através da bicamada lipídica, a favor do seu gradiente de concentração.',
    image: 'https://picsum.photos/seed/alveolioles/300/200',
  },
  {
    id: 'q3',
    question: 'A imagem ilustra uma proteína de membrana auxiliando a passagem de uma molécula específica. Qual tipo de transporte é este?',
    image: 'https://picsum.photos/seed/proteincanal/300/200',
    options: ['Difusão Simples', 'Difusão Facilitada', 'Bomba de Sódio-Potássio', 'Pinocitose'],
    correctAnswer: 'Difusão Facilitada',
    explanation: 'A difusão facilitada envolve proteínas de membrana (canais ou carreadoras) para ajudar no transporte de substâncias que não conseguem atravessar facilmente a bicamada lipídica sozinhas.',
  },
  {
    id: 'q4',
    question: 'Osmose é o movimento específico de qual substância através de uma membrana semipermeável?',
    options: ['Íons Sódio', 'Glicose', 'Água', 'Proteínas'],
    correctAnswer: 'Água',
    explanation: 'A osmose é a difusão da água através de uma membrana semipermeável, do meio menos concentrado em solutos (hipotônico) para o mais concentrado (hipertônico).',
  },
  {
    id: 'q5',
    question: 'Se uma célula animal for colocada em uma solução hipertônica (alta concentração de solutos), o que acontecerá com ela?',
    options: ['Inchará e poderá romper (hemólise)', 'Murchará (crenação)', 'Nada acontecerá', 'Aumentará de tamanho indefinidamente'],
    correctAnswer: 'Murchará (crenação)',
    explanation: 'Em um meio hipertônico, a água sai da célula por osmose, fazendo com que ela murche. Este fenômeno é chamado de crenação em células animais.',
    image: 'https://picsum.photos/seed/crenation/300/200',
  },
  {
    id: 'q6',
    question: 'Qual destes elementos é fundamental e consumido durante o transporte ativo?',
    options: ['Água', 'Glicose como fonte de energia direta', 'ATP (Trifosfato de Adenosina)', 'Oxigênio'],
    correctAnswer: 'ATP (Trifosfato de Adenosina)',
    explanation: 'O transporte ativo move substâncias contra seu gradiente de concentração e, para isso, requer energia, geralmente fornecida pela hidrólise do ATP.',
  },
  {
    id: 'q7',
    question: 'A Bomba de Sódio-Potássio (Na+/K+ ATPase) é um exemplo clássico de:',
    options: ['Transporte Passivo', 'Difusão Facilitada', 'Transporte Ativo Primário', 'Transporte Ativo Secundário'],
    correctAnswer: 'Transporte Ativo Primário',
    explanation: 'A bomba de Na+/K+ utiliza diretamente ATP para bombear íons Na+ para fora e K+ para dentro da célula, contra seus respectivos gradientes de concentração.',
    image: 'https://picsum.photos/seed/sodiumpotassiumpump/300/200',
  },
  {
    id: 'q8',
    question: 'O transporte ativo secundário (co-transporte) utiliza diretamente a energia de qual fonte?',
    options: ['Hidrólise direta de ATP', 'Um gradiente de concentração de um íon (como Na+)', 'Calor metabólico', 'Luz solar'],
    correctAnswer: 'Um gradiente de concentração de um íon (como Na+)',
    explanation: 'No transporte ativo secundário, a energia armazenada em um gradiente iônico (frequentemente Na+, mantido por transporte ativo primário) é usada para mover outra substância.',
  },
  {
    id: 'q9',
    question: 'Qual processo é utilizado por células de defesa, como macrófagos, para englobar e destruir bactérias invasoras?',
    options: ['Pinocitose', 'Exocitose', 'Fagocitose', 'Difusão Simples'],
    correctAnswer: 'Fagocitose',
    explanation: 'Fagocitose ("comer celular") é o processo pelo qual células englobam partículas grandes, como bactérias ou detritos celulares.',
    image: 'https://picsum.photos/seed/macrophage/300/200',
  },
  {
    id: 'q10',
    question: 'A liberação de neurotransmissores por um neurônio na fenda sináptica é um exemplo de:',
    options: ['Endocitose', 'Exocitose', 'Transporte Ativo Primário', 'Osmose'],
    correctAnswer: 'Exocitose',
    explanation: 'Exocitose é o processo pelo qual vesículas se fundem com a membrana plasmática para liberar seu conteúdo para fora da célula, como ocorre com neurotransmissores.',
    image: 'https://picsum.photos/seed/neurotransmitter/300/200',
  },
  {
    id: 'q11',
    question: 'Qual destes tipos de transporte geralmente NÃO requer a participação de proteínas de membrana?',
    options: ['Difusão Facilitada', 'Transporte Ativo Primário', 'Difusão Simples', 'Transporte Ativo Secundário'],
    correctAnswer: 'Difusão Simples',
    explanation: 'A difusão simples ocorre diretamente através da bicamada lipídica, sem a necessidade de proteínas transportadoras, para moléculas pequenas e lipossolúveis.',
  },
  {
    id: 'q12',
    question: 'Uma célula vegetal colocada em água destilada (meio hipotônico) torna-se:',
    options: ['Plasmolisada (murcha)', 'Flácida', 'Túrgida (inchada)', 'Lisada (rompe)'],
    correctAnswer: 'Túrgida (inchada)',
    explanation: 'Devido à parede celular, a célula vegetal em meio hipotônico absorve água e fica túrgida, mas geralmente não rompe. A pressão de turgor é importante para a sustentação da planta.',
    image: 'https://picsum.photos/seed/plantturgor/300/200',
  },
  {
    id: 'q13',
    question: 'A entrada de glicose na maioria das células do corpo, como as musculares, ocorre principalmente por:',
    options: ['Difusão Simples', 'Osmose', 'Difusão Facilitada', 'Fagocitose'],
    correctAnswer: 'Difusão Facilitada',
    explanation: 'A glicose é uma molécula relativamente grande e polar, necessitando de proteínas transportadoras (como GLUTs) para entrar nas células por difusão facilitada.',
  },
  {
    id: 'q14',
    question: 'O movimento de substâncias contra o seu gradiente de concentração é a principal característica do:',
    options: ['Transporte Passivo', 'Transporte Ativo', 'Difusão Simples', 'Osmose'],
    correctAnswer: 'Transporte Ativo',
    explanation: 'O transporte ativo é definido pela capacidade de mover solutos de uma área de baixa concentração para uma de alta concentração, o que requer energia.',
  },
  {
    id: 'q15',
    question: 'A pinocitose, também conhecida como "bebida celular", envolve o englobamento de:',
    options: ['Partículas sólidas grandes', 'Fluidos extracelulares e solutos dissolvidos', 'Apenas água pura', 'Bactérias específicas'],
    correctAnswer: 'Fluidos extracelulares e solutos dissolvidos',
    explanation: 'A pinocitose é um tipo de endocitose em que a célula ingere pequenas quantidades de fluido extracelular e as moléculas dissolvidas nele.',
    image: 'https://picsum.photos/seed/cellulardrinking/300/200',
  },
  {
    id: 'q16',
    question: 'Na bomba de Sódio-Potássio, qual íon é bombeado em maior quantidade para FORA da célula?',
    options: ['Potássio (K+)', 'Sódio (Na+)', 'Cálcio (Ca2+)', 'Cloreto (Cl-)'],
    correctAnswer: 'Sódio (Na+)',
    explanation: 'A bomba de Na+/K+ ATPase transporta três íons Sódio (Na+) para fora da célula para cada dois íons Potássio (K+) que transporta para dentro.',
  },
  {
    id: 'q17',
    question: 'O co-transporte de glicose juntamente com íons Na+ para dentro das células intestinais é um exemplo de:',
    options: ['Antiporte', 'Simporte', 'Difusão Simples', 'Transporte Ativo Primário'],
    correctAnswer: 'Simporte',
    explanation: 'No simporte, duas substâncias diferentes são transportadas através da membrana na mesma direção. O gradiente de Na+ (mantido pela bomba Na+/K+) impulsiona a entrada de glicose.',
  },
  {
    id: 'q18',
    question: 'Qual organela celular é crucial para processar e empacotar proteínas e lipídios em vesículas para exocitose?',
    options: ['Mitocôndria', 'Núcleo', 'Lisossomo', 'Complexo de Golgi'],
    correctAnswer: 'Complexo de Golgi',
    explanation: 'O Complexo de Golgi modifica, classifica e empacota proteínas e lipídios em vesículas que são então direcionadas para a exocitose ou outros destinos celulares.',
    image: 'https://picsum.photos/seed/golgiapparatus/300/200',
  },
  {
    id: 'q19',
    question: 'A imagem mostra uma célula englobando uma partícula grande. Este processo é chamado de:',
    image: 'https://picsum.photos/seed/engulfingparticle/300/200',
    options: ['Pinocitose', 'Exocitose', 'Fagocitose', 'Osmose'],
    correctAnswer: 'Fagocitose',
    explanation: 'A fagocitose é o processo de endocitose de partículas sólidas grandes, como bactérias ou detritos celulares, formando um fagossomo.',
  },
  {
    id: 'q20',
    question: 'A endocitose mediada por receptor é um processo altamente específico porque depende da ligação de:',
    options: ['Moléculas de água a canais', 'Lipídios à membrana', 'Moléculas sinalizadoras (ligantes) a proteínas receptoras específicas', 'ATP a proteínas transportadoras'],
    correctAnswer: 'Moléculas sinalizadoras (ligantes) a proteínas receptoras específicas',
    explanation: 'Este tipo de endocitose é altamente seletivo, pois só ocorre quando ligantes específicos se unem a seus receptores na superfície celular, desencadeando a internalização.',
    image: 'https://picsum.photos/seed/receptormediatedendo/300/200',
  },
  {
    id: 'q21',
    question: 'Qual o papel principal da parede celular em células vegetais durante a osmose em meio hipotônico?',
    options: ['Facilitar a entrada de solutos', 'Impedir a entrada de água', 'Limitar a expansão da célula e prevenir a lise (ruptura)', 'Bombear água para fora ativamente'],
    correctAnswer: 'Limitar a expansão da célula e prevenir a lise (ruptura)',
    explanation: 'A parede celular rígida das plantas oferece suporte estrutural, permitindo que a célula absorva água e se torne túrgida sem romper, ao contrário das células animais.',
  },
  {
    id: 'q22',
    question: 'O movimento de íons através de canais iônicos proteicos na membrana, a favor do gradiente eletroquímico, é um tipo de:',
    options: ['Difusão Simples', 'Transporte Ativo Primário', 'Difusão Facilitada', 'Pinocitose'],
    correctAnswer: 'Difusão Facilitada',
    explanation: 'Canais iônicos são proteínas que formam poros através da membrana, permitindo a passagem rápida e seletiva de íons por difusão facilitada.',
    image: 'https://picsum.photos/seed/ionchannel/300/200',
  },
  {
    id: 'q23',
    question: 'Qual das seguintes afirmações sobre o transporte ativo é VERDADEIRA?',
    options: ['Sempre move substâncias a favor do gradiente de concentração.', 'Não requer proteínas de membrana.', 'Pode criar e manter gradientes de concentração através da membrana.', 'É um processo que libera energia para a célula.'],
    correctAnswer: 'Pode criar e manter gradientes de concentração através da membrana.',
    explanation: 'Uma das funções cruciais do transporte ativo é bombear substâncias contra seus gradientes, estabelecendo diferenças de concentração que são vitais para muitas funções celulares.',
  },
   {
    id: 'q24',
    question: 'Se uma célula gasta ATP para mover cálcio (Ca2+) do citosol (baixa concentração) para o retículo endoplasmático (alta concentração), qual tipo de transporte está ocorrendo?',
    options: ['Difusão Simples de Ca2+', 'Difusão Facilitada de Ca2+', 'Transporte Ativo de Ca2+', 'Osmose de Ca2+'],
    correctAnswer: 'Transporte Ativo de Ca2+',
    explanation: 'Mover Ca2+ contra seu gradiente de concentração (de baixa para alta) e com gasto de ATP caracteriza o transporte ativo, como o realizado pela bomba de cálcio (SERCA).',
    image: 'https://picsum.photos/seed/calciumpump/300/200',
  },
  {
    id: 'q25',
    question: 'A imagem mostra vesículas se fundindo com a membrana plasmática para liberar seu conteúdo. Esse processo é:',
    image: 'https://picsum.photos/seed/vesiclefusion/300/200',
    options: ['Endocitose', 'Fagocitose', 'Pinocitose', 'Exocitose'],
    correctAnswer: 'Exocitose',
    explanation: 'A exocitose é o mecanismo pelo qual as células transportam moléculas para fora, empacotadas em vesículas que se fundem com a membrana plasmática.',
  }
];

export const AI_ASSISTANT_SYSTEM_PROMPT = `Você é um assistente de biologia especializado em transporte celular (ativo e passivo). Responda às perguntas dos usuários de forma clara, concisa e educativa. Se possível, relacione a pergunta com os conceitos de transporte ativo, passivo, difusão, osmose, endocitose ou exocitose. Use uma linguagem acessível para estudantes. Se a pergunta for muito fora do tópico de biologia celular, gentilmente redirecione para o tema principal.`;
export const GEMINI_MODEL_NAME = 'gemini-2.5-flash-preview-04-17';
    