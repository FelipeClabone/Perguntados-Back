'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      INSERT INTO perguntas (pergunta, gabarito, resposta2, resposta3, resposta4, categoria, dificuldade) VALUES 
      ("Você foi chamado pela nossa empresa para participar desta reunião em queum sistema de computação em operação está sendo apresentado. O motivo pelo qual você está aqui é que a nossa empresa acredita na sua capacidade para tentar desvendar os segredos que existem por trás desse sistema computacional. Tudo que se sabe até agora sobre esse sistema é que ele é composto por um computador, um braço robótico, um sistema operacional e dois programas de usuário, sendo que cada programa de usuário leva dez minutos para terminar a sua execução por completo. Após presenciar ofuncionamento desse sistema, a empresa espera que você seja capaz desolucionar os problemas que serão levantados por ela nas questões que serão apresentadas a você durante esta reunião. Por exemplo, o Problema: você precisa descrever resumidamente cada uma das atividades que acontecem no computador da nossa empresa imediatamente após o computador ser ligado;você precisa saber quem é o principal responsável por essas atividades; e você deve deduzir onde o responsável por essas atividades fica armazenado." ,
      "Verifica o setup, faz o POST, descompacta dados, lê dispositivos de armazenamentoe carrega o sistema operacional; BIOS; ROM.",
      "Verifica o HD, faz o BUST, descompacta links, carrega o sistema operacional everifica a USB; Chipset; Placa mãe" ,
      "Atualiza o setup, faz o DUST, correlaciona links, verifica terminais e carrega osistema operacional; FPGA; Placa controladora de Boot" ,
      "Reseta o sistema, faz o START, correlaciona dados, verifica o sistema operacional ecarrega os terminais; Chipset; Controladora do HD.",
      0,
      2),
      ("Problema: apesar de não ver todo hardware que compõe o sistema, você deve ser capaz de deduzir quais são os quatro principais dispositivos ou recursos (emhardware) que estão à disposição do sistema." ,
      "Processador, RAM, HD, braço robótico.",
      "CPU, braço robótico, culer e porta USB." ,
      "ROM, memória cachê, braço Robótico e porta USB." ,
      "Gabinete, unidade de CD-ROM, porta USB e filtro de linha.",
      1,
      0),
      ("Problema: use o seu ponto de vista como desenvolvedor de Arquiteturas de Computadores para classificar o braço robótico quanto ao tipo de hardware queele é, de acordo com a função que ele exerce dentro do sistema computacional apresentado pela nossa empresa." ,
      "Dispositivo periférico.",
      "Dispositivo alternativo." ,
      "Dispositivo de auxílio." ,
      "Dispositivo alternador.",
      1,
      0),
      ("O sistema computacional em questão é composto por um computador, um braço robótico, um sistema operacional e dois programasde usuário. Problema: a nossa empresa espera que você seja capaz de reconhecer pelo menos quantos e quais programas estão envolvidos nesse sistema." ,
      "Três: o sistema operacional e os dois programas de usuário.",
      "Quatro: linguagem C, compilador, assembler e linkeditor." ,
      "Dois: editor de texto e planilha eletrônica." ,
      "Quatro: o sistema operacional, os dois programas de usuário e o Quartus II paracontrolar o braço robótico.",
      2,
      1),
      ("Você já sabe que o sistema computacional em questão é composto, dentr eoutras coisas, por dois programas de usuário. Problema: você precisa deduzir oque cada programa de usuário faz nesse sistema computacional." ,
      "Um move o braço para cima e para baixo, e o outro move o braço para os lados.",
      "Um controla o sistema e o outro controla o braço." ,
      "Um controla a arquitetura de computador e o outro controla o braço." ,
      "Um controla o sistema operacional e o outro controla o braço.",
      1,
      0),
      ("Problema: você deve classificar o sistema quanto ao número de programasexecutados “ao mesmo tempo”." ,
      "Multiprogramado.",
      "Monoprogramado." ,
      "Bi-executado." ,
      "Bi-executável.",
      3,
      1),
      ("Um colega de trabalho da sua equipe perguntou se é possível que programas sejam realmente executados “ao mesmo tempo” por uma arquitetura decomputador. Problema: tendo sempre o projeto FCTarc em mente, você deve ajudar o seu colega a sanar a sua dúvida." ,
      "Nenhuma das alternativas anteriores.",
      "Só quando há cache." ,
      "Só quando há seleção involuntária" ,
      "Sempre",
      3,
      1),
      ("Considere que o sistema computacional apresentado pela nossa empresapossui um só processador dotado de um só núcleo sem pipeline. Problema:explique como é possível executar três programas diferentes (o sistemaoperacional e os dois programas de usuário) em um só processador dotado deum só núcleo sem pipeline, porém dando ao usuário a impressão de que todoseles são executados ao mesmo tempo." ,
      "Escalonamento.",
      "Confinamento." ,
      "Sobreposição." ,
      "Cooperação.",
      3,
      0),
      ("Anteriormente foi dito que o sistema computacional em questão é composto, dentre outras coisas por um sistema operacional e dois programas de usuário.Problema: tendo os conceitos de Arquitetura de Computadores em mente, vocêprecisa estabelecer uma relação entre o disco rígido e, o sistema operacional eos dois programas de usuário." ,
      "O disco rígido armazena o sistema operacional e os dois programas de usuário.",
      "O disco rígido permite a alternância entre o sistema operacional e os doisprogramas de usuário." ,
      "O disco rígido permite a interação do sistema operacional com os dois programasde usuário." ,
      "O disco rígido permite a reorganização do sistema operacional e dos doisprogramas de usuário.",
      4,
      0),
      ("Problema: tendo os conceitos de Arquitetura de Computadores em mente,você precisa explicar para os membros da sua equipe qual é a importância dosistema operacional e dos dois programas de usuário serem armazenados nodisco rígido ou em outra memória secundária qualquer" ,
      "O disco rígido armazena o sistema operacional e os dois programas de usuáriopermanentemente.",
      "O disco rígido armazena o sistema operacional e os dois programas de usuáriosomente para a compilação dos mesmos." ,
      "O disco rígido armazena o sistema operacional e os dois programas de usuáriosomente para interação entre eles" ,
      "O disco rígido armazena o sistema operacional e os dois programas de usuáriosomente enquanto o computador está ligado.",
      4,
      0),
      ("Já foi dito que o sistema computacional em questão é composto, dentreoutras coisas por um sistema operacional e dois programas de usuário.Problema: tendo sempre o projeto FCTarc em mente, você precisa estabeleceruma relação entre a memória RAM e, o sistema operacional e os dois programasde usuário." ,
      "A RAM armazena o sistema operacional e os dois programas de usuário enquantoo computador está ligado.",
      "A RAM armazena o sistema operacional e os dois programas de usuário paraconvolução entre eles." ,
      "A RAM armazena o sistema operacional e os dois programas de usuário para acompilação de todos eles juntos." ,
      "A RAM armazena o sistema operacional e os dois programas de usuáriopermanentemente.",
      4,
      1),
      ("Problema: tendo sempre o projeto FCTarc em mente, você precisa explicarpara os membros da sua equipe qual é a importância do sistema operacional edos dois programas de usuário serem armazenados na RAM." ,
      "A RAM é a memória a partir da qual o sistema operacional e os dois programas deusuário são buscados.",
      "A RAM é a memória a partir da qual o sistema operacional e os dois programas deusuário são compilados todos juntos." ,
      "A RAM é a memória que armazena o sistema operacional e os dois programas deusuário permanentemente." ,
      "A RAM é a memória a partir da qual o sistema operacional e os dois programas deusuário são convolucionados.",
      4,
      1),
      ("Durante a operação do sistema computacional apresentado pela nossaempresa, o sistema operacional e dois programas de usuário desse sistema sãoarmazenados na RAM. Problema: proponha uma maneira de organizar oarmazenamento do sistema operacional e dos dois programas de usuário naRAM." ,
      "Particionamento",
      "Encaixamento" ,
      "Acondicionamento" ,
      "Adicionamento",
      4,
      0),
      ("A sua equipe concluiu que a memória RAM deve ser particionada (repartida)entre o sistema operacional e os dois programas de usuário. Problema: vocêprecisa reconhecer se há algum problema relacionado a tamanho e, emseguida, você precisa propor uma maneira de particionar a RAM entre o sistemaoperacional e os dois programas de usuário levando esse problema emconsideração." ,
      "Programas possuem tamanhos diferentes; particionamento em tamanhosdiferentes.",
      "Códigos executáveis possuem tamanhos iguais; particionamento em tamanhosiguais." ,
      "A memória não pode ser fisicamente particionada; particionamento existencial." ,
      "A memória não pode ser fisicamente particionada; particionamento unilateral.",
      4,
      0),
      ("Você já sabe que a memória RAM deve ser particionada (repartida) entre osistema operacional e os dois programas de usuário. Problema: a nossaempresa precisa saber em que momento (quando) e como a memória RAMdeve ser particionada (repartida) entre o sistema operacional e os doisprogramas de usuário." ,
      "Particionamento lógico fixo (no início das atividades do SO) ou variável (duranteas atividades do SO) de tamanhos diferentes.",
      "Particionamento lógico fixo (durante as atividades do SO) de tamanhos diferentes." ,
      "Particionamento lógico fixo (durante as atividades do SO) ou variável (no iníciodas atividades do SO) de tamanhos diferentes." ,
      "Particionamento lógico variável (no início das atividades do SO) de tamanhosdiferentes.",
      4,
      2),
      ("A nossa equipe de trabalho concluiu que divisão de memória paraarmazenamento de informações parece ser uma prática comum e necessária.Problema: proponha que, além da RAM, o mesmo sistema operacional usadopela nossa empresa divida e controle a divisão de outro tipo de memória paraarmazenamento de informações." ,
      "Divisão do HD em blocos.",
      "Divisão dos registradores em mapas de bits." ,
      "Divisão da memória cache em conjuntos associativos." ,
      "Divisão da ROM em instâncias.",
      4,
      2),
      ("Um dos membros da nossa equipe não sabe o que é um processo. Problema:você deve usar um exemplo do seu cotidiano para exemplificar o que éprocesso." ,
      "Processo de produção em uma empresa: conjunto de etapas e elementosenvolvidos para a geração de um produto.",
      "Movimentos ondulatórios do mar." ,
      "Força centrípeta." ,
      "Força centrífuga.",
      0,
      0),
      ("Você usou um exemplo do seu cotidiano para exemplificar o que é processopara um dos seus colegas de trabalho. Problema: o mesmo colega precisasaber a relação que existe entre o sistema operacional e os dois programas deusuário, e processo." ,
      "Processo de execução do sistema operacional e dos dois programas de usuário:atividades e elementos necessários para a execução desses programas.",
      "Processo de fragmentação do sistema operacional e dos dois programas deusuário: atividades e elementos necessários para a fragmentação desses programas." ,
      "Processo de reconstrução do sistema operacional e dos dois programas deusuário: atividades e elementos necessários para a reconstrução desses programas." ,
      "Processo de análise do sistema operacional e dos dois programas de usuário:atividades e elementos necessários para a análise desses programas.",
      0,
      1),
      ("Um dos membros da nossa equipe não sabe o que é escalonamento.Problema: você deve usar um exemplo do seu cotidiano para exemplificar o queé escalonamento." ,
      "Turnos de trabalho em uma empresa.",
      "Andar em montanha russa." ,
      "Confinamento de gado." ,
      "Dormir de barriga para cima.",
      3,
      0),
      ("Você usou um exemplo do seu cotidiano para exemplificar o que é escalonamento para um dos seus colegas de trabalho. Problema: o mesmocolega precisa saber a relação que existe entre o sistema operacional e os doisprogramas de usuário, e escalonamento." ,
      "O sistema operacional e os dois programas de usuário são escalonados para usaro processador.",
      "Antecipação dos dois programas de usuário para uso no sistema operacional." ,
      "O sistema operacional e os dois programas de usuário são submetidos a umamultiplicação escalar." ,
      "Os dois programas de usuário são alocados para execução dentro do sistemaoperacional.",
      3,
      0),
      ("Você pôde observar o comportamento do braço robótico enquanto osistema estava em operação. Problema: com base, exclusivamente, nocomportamento do braço robótico, caracterize o algoritmo de escalonamentoem relação aos dois programas de usuário." ,
      "Justo.",
      "Injusto." ,
      "Passivo." ,
      "Atípico.",
      3,
      0),
      ("Você pôde observar o comportamento do braço robótico enquanto osistema estava em operação. Problema: considerando o comportamento dobraço robótico, caracterize o algoritmo de escalonamento em relação aos doisprogramas de usuário e ao tempo que cada um deles tem para realizar os seustrabalhos." ,
      "Justo",
      "Injusto" ,
      "Igualitário" ,
      "Inercial",
      3,
      0),
      ("Um membro da nossa equipe questionou sobre como deveria ser ocomportamento do algoritmo de escalonamento, caso um dos programas deusuário tivesse que ser executado por mais tempo que o outro por ser maisimportante. Problema: todos os membros da equipe estão sentados olhandopara a sua cara, enquanto aguardam que você responda algo sobre essequestionamento (pois é... sobrou para você)." ,
      "Prioritário.",
      "Estabilizado." ,
      "Momentâneo." ,
      "Aprazível.",
      3,
      1),
      ("Tendo sempre o projeto FCTarc em mente, você deve lembrar que todos os registradores da FCTarc detêm algum tipo de informação, enquanto a FCTarcexecuta um programa qualquer. Problema: precisamos saber como se chamaesse conjunto de informações que a FCTarc tem armazenado em seusregistradores a cada instante." ,
      "Contexto",
      "Dados de análise." ,
      "Vertente." ,
      "Conjunto registrado.",
      4,
      1),
      ("A sua equipe chegou à conclusão de que ocorre escalonamento entre osdois processos de usuário responsáveis pelos dois tipos de movimentosdistintos efetuados pelo braço robótico. Problema: você precisa explicar comocada processo consegue voltar a ser executado exatamente a partir do pontoem que ele foi interrompido quando o seu quantum expirou." ,
      "Salvamento e recuperação de contexto.",
      "Aprimoramento de contexto." ,
      "Detecção e correção de contexto." ,
      "Análise e reconstrução de contexto.",
      5,
      0),
      ("A nossa equipe já sabe que o contexto de um processo precisa ser salvo erecuperado durante o ciclo de vida de um processo. Problema: precisamosdeduzir onde e em que estrutura de dados o armazenamento do contexto dosprocessos é feito." ,
      "RAM; tabela de processos",
      "HD; mapa de bits." ,
      "ROM; arvore rubro-negra." ,
      "Memória cache; lista ligada.",
      4,
      1),
      ("Considere o braço robótico como um recurso compartilhado entreprocessos de usuários. Problema: proponha uma forma de controlar essecompartilhamento." ,
      "Uso do mecanismo de sincronização: mutex.",
      "Uso de fatorial incompleto" ,
      "Uso de negação antecipada de vertente." ,
      "Uso de correlação quadrimodal.",
      4,
      0),
      ("Mais uma vez, considere o braço robótico como um recurso compartilhadoentre processos de usuários. Problema: tente reconhecer se há algum problemaem deixar processos de usuários responsáveis pelo controle docompartilhamento do braço robótico." ,
      "Monopólio.",
      "Incapacidade de ajustamento de motores." ,
      "Falta de adequação." ,
      "Falta de calibração do braço robótico",
      5,
      0),
      ("Você já sabe muito bem que, para o sistema apresentado pela nossaempresa, o braço robótico é um recurso compartilhado entre processos deusuários. Problema: proponha uma forma de controlar esse compartilhamento,sem que os processos de usuários sejam responsáveis por ele. Em outraspalavras, explique como seria esse controle." ,
      "Por chamada de sistema.",
      "Por ajustamento." ,
      "Por controle unilateral." ,
      "Por acolhimento de processo.",
      5,
      2),
      ("Observe mais uma vez o comportamento do braço robótico enquanto osistema está em operação. Problema: deduza em que momentos (quando)ocorrem chamadas de sistema, enquanto o sistema apresentado pela nossaempresa está em operação." ,
      "Para envios de comandos ao robô e finalização dos processos.",
      "No começo e no fim das atividades do sistema operacional." ,
      "A cada dez minutos (tempo de execução de cada programa)." ,
      "Sempre que o sistema computacional é inicializado.",
      5,
      0),
      ("Por questões de segurança, em qualquer sistema computacional, osdispositivos periféricos são acessados pelos processos de usuáriosexclusivamente via chamadas de sistema. Você é um usuário programador eestá acostumado a escrever programas que acessam dispositivos periféricos,por exemplo, para escrever uma mensagem na tela do computador ou parareceber uma informação via teclado. Problema: você precisa entender de queforma você indica no código fonte do seu programa, que você precisa fazeruma chamada de sistema para usar um dispositivo periférico qualquer." ,
      "Chamada a procedimento.",
      "Chamada direta." ,
      "Alocação de procedimento." ,
      "Alocação direta.",
      1,
      0),
      ("O sistema de computação apresentado pela nossa empresa é dotado dosistema operacional Windows. Problema: nossa empresa precisa saber sequalquer sistema operacional já é comercializado pronto para trabalhar comesse tipo específico de braço robótico ou se é necessário instalar algo nosistema." ,
      "Não; driver.",
      "Sim; o sistema reconhece o braço automaticamente." ,
      "Sim; basta executar o Windows no modo de seguraça." ,
      "Não; programa adaptador robótico.",
      1,
      1),
      ("Você foi escolhido para ser o supervisor da nossa equipe trabalho.Problema: você precisa explicar o que é um driver de forma resumida e clarapara os membros da sua equipe. Sugestão: você pode usar um exemplo do seucotidiano." ,
      "Tradutor",
      "Construtor" ,
      "Linkeditor" ,
      "Gerador de pulsos",
      1,
      0),
      ("Um dos membros da nossa equipe não sabe o que é uma interrupção.Problema: você deve usar um exemplo do seu cotidiano para exemplificar o queé interrupção." ,
      "Campainha do telefone.",
      "Pegadas de sapato." ,
      "Rastros de insetos." ,
      "Luz visível.",
      3,
      1),
      ("Observe mais uma vez o comportamento do braço robótico enquanto osistema está em operação. Problema: procure deduzir em que momentos(quando) ocorrem interrupções, enquanto o sistema apresentado pela nossaempresa está em operação." ,
      "Para envios de comandos ao robô e finalização dos processos.",
      "No começo e no fim das atividades do sistema operacional." ,
      "A cada dez minutos (tempo de execução de cada programa)." ,
      "Sempre que o sistema computacional é inicializado.",
      3,
      2),
      ("Você usou um exemplo do seu cotidiano para exemplificar o que éinterrupção para um dos seus colegas de trabalho. Problema: o mesmo colegaprecisa saber como o sistema operacional lida com interrupções durante o seufuncionamento." ,
      "Rotina de tratamento de interrupção (rotina de serviço).",
      "Uso de interrupção pró-ativa." ,
      "Aplicação de parcialidade de interrupção." ,
      "Aplicação do Método de Índice Sistólico.",
      3,
      2),
      ("Após iniciar um tipo de movimento (para cima e para baixo ou para oslados), o braço robótico não é interrompido até que o movimento sejaconcluído por completo. Em outras palavras, o seu tempo ou o seu movimentonão foram divididos, apesar disso ser facilmente realizável. Problema: você deveusar uma única palavra para descrever com objetividade esse comportamento." ,
      "Atomicidade",
      "Preempção." ,
      "Conjuntividade." ,
      "Convolução.",
      1,
      1),
      ("Observe mais uma vez o comportamento do braço robótico enquanto osistema está em operação. Problema: nossa empresa espera que você sejacapaz de descrever o ciclo de vida completo de qualquer dos dois processos deexecução dos programas de usuário." ,
      "Rodando, bloqueado, pronto e concluído.",
      "Para cima, para baixo, para a direita e para a esquerda." ,
      "Ausente, intermitente e fechado." ,
      "Alocado, transmutado, particionado e escalonado.",
      1,
      0),
      ("Reflita sobre todos os problemas que foram apresentados para o sistemacomputacional mostrado pela nossa empresa. Problema: com base nessareflexão, identifique quantos e quais são os principais componentes dequalquer sistema operacional." ,
      "Quatro; Escalonador de processos e threads; Gerente de memória; Sistema dearquivo; Software de entrada e saída.",
      "Três; BIOS, Controlador de DMA e controlador de IRQ." ,
      "Três; Inicializador do sistema, Escalonador e Finalizador do sistema" ,
      "Quatro; Processador, RAM, HD, braço robótico.",
      0,
      1),
      ("Mais uma vez, reflita sobre todos os problemas que foram apresentadospara o sistema computacional mostrado pela nossa empresa. Problema: combase nessa reflexão, identifique quais são as duas principais funções dequalquer sistema operacional." ,
      "Máquina virtual ou máquina estendida (base para a programação), e Gerente deRecursos (possibilita o uso adequado de recursos).",
      "Carregador de programas e manipulador de braços robóticos." ,
      "Máquina conceitual e gerente de atividades implícitas." ,
      "Intermediador para braços robóticos e executor de programas.",
      0,
      2);
    `);
  },

  down: async (queryInterface, Sequelize) => {
    // Se você precisar reverter a inserção dos dados, pode usar um DELETE baseado em condições
    await queryInterface.sequelize.query(`
      DELETE FROM perguntas
      WHERE categoria IN (0, 1, 2, 3, 4, 5) AND dificuldade IN (0, 1, 2);
    `);
  }
};
