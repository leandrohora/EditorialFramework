
# EditorialFramework
## Framework de front-end para desenvolvimento rápido e intuitivo de sites editoriais
Veja como utilizar o Editorial Framework em seu projeto:  https://leandrohora.github.io/EditorialFramework/


Universidade Federal do Espírito Santo
Departamento de Desenho Industrial








Editorial Framework: Uma ferramenta para
desenvolvimento de websites editoriais








Leandro Siqueira da Hora Gonzaga









Vitória, 2018
Leandro Siqueira da Hora Gonzaga








Editorial Framework: uma ferramenta para
desenvolvimento de websites editoriais






Projeto de Graduação apresentado ao Departamento de Desenho Industrial da Universidade Federal do Espírito Santo como requisito parcial para obtenção do grau de Bacharelado em Desenho Industrial. Orientador: Prof. Me. Ricardo Esteves Gomes






Vitória, 2018
Monografia de Projeto de graduação sob o título “Editorial Framework: uma ferramenta para desenvolvimento de websites editoriais”, defendida por Leandro Siqueira da Hora Gonzaga e aprovado em Junho de 2018, pela banca examinadora constituída pelos professores:




Profº. Me. Ricardo Esteves Gomes
Orientador



Profº. 
Universidade Federal do Espírito Santo




Profº. 
Universidade Federal do Espírito Santo
Resumo

Sumário
Introdução	6
Objetivo	8
Justificativa	8
Capítulo 1 – Desenvolvimento	11
1.1. Ambiente de desenvolvimento	11
1.2. Tecnologias utilizadas	11
1.3. Código-fonte	12
1.4. Automatizando tarefas	12
1.4.1. Implementação da automatização de tarefas	12
1.4.2. Pacotes do NPM utilizados	13
1.5 Estruturas de arquivos	13
Capítulo 2 – Componentes do Editorial Framework	18
2.1. Sistema de grid	18
2.2. Tipografia	22
2.3. Elementos gráficos	22
2.3.1. Títulos	22
 2.3.2 Parágrafo	23
2.3.6. Alinhamento de texto	24
2.3.7. Peso	25
2.3.8. Tabelas	25
2.4. Elementos de interface gráfica do usuário	28
2.4.1. Botões	28
2.4.2. Formulários	29
Capítulo 3 – Documentação	30
Considerações finais	31
Referências bibliográficas	32

Figuras

Figura 1 	Estrutura de arquivos
Figura 2 	Arquivo gulpfile.js
Figura 3 	Arquivo package.json
Figura 4 	Grid com 12 colunas
Figura 5 	Sistema de Grid Large
Figura 6 	Sistema de Grid Medium
Figura 7 	Sistema de Grid Small
Figura 8 	Marcação HTML de grid padrão
Figura 9 	Marcação HTML de grid large
Figura 10 	Marcação HTML de grid medium
Figura 11 	Marcação HTML de grid small
Figura 12 	Marcação HTML para títulos
Figura 13 	Marcação HTML para indenteção de parágrafo
Figura 14 	Marcação HTML para capitular
Figura 15 	Marcação HTML para olho
Figura 16	Marcação HTML para alinhamento de texto
Figura 17 	Marcação HTML para peso de texto
Figura 18 	Tabela padrão
Figura 19 	Tabela listrada
Figura 20 	Tabela hover
Figura 21 	Tabela com borda
Figura 22 	Tabala condensada
Figura 23 	Marcação HTML para tabela padrão
Figura 24 	Marcação HTML para tabela listrada
Figura 25 	Marcação HTML para tabela com hover
Figura 26 	Marcação HTML para tabela com borda
Figura 27 	Marcação HTML para tabela condensada
Figura 28 	Marcação HTML para tabela botões
Figura 29	Marcação HTML para formulário

Siglas

HTML 	Hyper Text Markup Language
CSS 		Cascading Style Sheets
Sass 		Syntactically Awesome Style Sheets
NPM		 Node Package Manager
Introdução
O crescimento acelerado do uso da internet e a popularização dos novos meios de acesso a web proporcionam um novo cenário para designers e desenvolvedores, mais especificamente para o desenvolvimento da interface gráfica do usuário de websites e aplicações baseadas na web. A interface gráfica do usuário agora deixa de ser exclusiva para apenas um meio de acesso e passa a atender diferentes meios.
Acompanhando o crescimento da internet também observamos o crescimento do uso de dispositivos móveis que passam a permitir o acesso a web, bem como o surgimento de novos dispositivos desenvolvidos para permitir a navegação. O computador baseado na metáfora do desktop deixa de ser o principal meio de acesso com a popularização desses novos e mais diversos dispositivos. Esses se tornaram os novos meios de acesso.
Neste novo cenário o desenvolvedor web encontra um grande problema na construção da interface gráfica do usuário que agora deve utilizar tecnologias específicas para cada tipo de dispositivo e criar várias versões de um mesmo layout para possibilitar sua exibição em dispositivos diferentes. Um outro problema se dá na diferença física entre dispositivos, sendo mais específico na diferença de tamanho de tela, que proporcionam uma experiência do usuário totalmente diferente. É neste âmbito onde se dá a interação entre o dispositivo e o usuário ao visualizar e interagir com o conteúdo.
Os códigos computacionais responsáveis por criar e formatar a forma visual mais básica do conteúdo em navegadores ou web browsers – que são os softwares utilizados para navegação pela web e consequentemente para exibição de websites – são as linguagens de marcação HTML (Hyper Text Markup Language) e CSS (Cascading Style Sheets). Para atender este novo cenário e lidar com os problemas gerados estas linguagens evoluíram, novas técnicas e tecnologias foram implementadas.
Focamos nossos estudos justamente na implementação dessas linguagens, novas técnicas e tecnologias que são responsáveis pela formatação visual do conteúdo e dos elementos da interface gráfica do usuário, utilizando a análise do comportamento destes elementos nos mais diversos tipos de dispositivos que permitem acesso a web através de navegadores. 

Objetivo
O objetivo geral deste projeto consiste na criação de um framework como ferramenta para o desenvolvimento da interface gráfica do usuário de websites editoriais baseados no conceito do web design responsivo, descrevendo mais especificamente as tecnologias empregadas e as etapas de desenvolvimento e implementação dos códigos computacionais que geram a interface, que são, as linguagens de marcação HTML (Hyper Text Markup Language), CSS (Cascading Style Sheets) e Javascript.
Justificativa
Em uma pesquisa global iniciada em 2011 e finalizada no ano de 2013 feita em 48 países pelo Ipsos Media CT1 para o Google, fatos e estatísticas demonstram o comportamento dos usuários de internet via smartphones. A difusão do smartphone passou a atingir grande parte da população dos Estados Unidos, houve um aumento no número de proprietários smartphones de 44% em 2012 para 56% em 2013 e uso diário desses dispositivos chega à 67%. No Brasil houve um aumento de 14% em 2012 para 26% em 2013 e o uso diário foi de 46%. 
Esses dispositivos se tornaram indispensáveis no cotidiano por serem um ponto de acesso importante para pesquisas, podendo ser utilizados em qualquer lugar, além de serem um portal para várias atividades como acessar redes sociais; ler e enviar e-mail; ler notícias em portais de jornais ou revistas; analisar websites, blogs ou fóruns; navegar na internet; ouvir música; assistir vídeos. Durante o ano de 2015, o acesso à internet via smartphones ou tablets ultrapassou o acesso via desktop.
Com esse novo cenário, um website ou aplicação web devem conter uma interface gráfica do usuário que também seja adequada em dispositivos móveis. É pensando nesses fatores que se definiu a criação de um framework a partir dos conceitos do web design responsivo que garanta a consistência da interface em desktops e nos mais diversos dispositivos móveis. 
Um website com web design responsivo contém um layout fluído e pode ser acessado através de smartphones, tablets, televisões, videogames, netbooks, notebooks, desktops. Em suma, pode ser acessado em qualquer dispositivo conectado à rede, independente de sua resolução de tela e quantidade de cores.
Desenvolver sites com layouts fluídos (fluent layout, também chamado de grids flexíveis), ou seja, desde a concepção do projeto, primar pela não especificação de medidas fixas no layout do projeto, torna possível que haja uma adaptação “natural” e automática do que se apresenta na tela. (ZEMEL, 2012, p. 19).
Colocando em extremos, existe uma grande diferença entre o tamanho de tela um smartphone e uma TV. E para lidar com essa diferença, mantendo uma boa apresentação do conteúdo em ambos dispositivos, o web design responsivo possibilita uma apresentação mais apropriada, reorganizando a ordem em que os conteúdos aparecem e determinando como os conteúdos serão mostrados, independente do tamanho da tela.
O termo web design responsivo surgiu em um artigo, intitulado Resposive Web Design, escrito por Ethan Marcotte em 2010 para o famoso site A List Apart. Utilizando a tecnologia existente na época Ethan desenvolve o artigo explicando seus conceitos e sugestões para que as páginas fossem projetadas utilizando a técnica que ele chamou de web design responsivo. 
Ao invés de criar projetos desconexos, cada um adaptado para um determinado dispositivo ou navegador, devemos tratá-los em vez como facetas de uma mesma experiência. Em outras palavras, podemos criar sites que são não só mais flexível, mas que podem se adaptar à mídia que os torna.  “Texto traduzido” (MARCOTTE, 2011, p. 8)2
Este trabalho é o desenvolvimento de um framework como ferramenta de projeto para a criação da interface gráfica do usuário de websites editoriais baseados nos conceitos do web design responsivo.


Capítulo 1 – Desenvolvimento
1.1.	Ambiente de desenvolvimento
Antes de se dar início a um projeto web é necessário preparar um ambiente para o seu desenvolvimento. O termo se refere a todas as ferramentas necessárias para o projeto ser implementado. Além das ferramentas básicas como um computador e um editor de texto, o projeto aqui proposto utiliza principalmente um conjunto de ferramentas para automatização de tarefas tais como a escrita e compilação do código-fonte3. 
1.2.	Tecnologias utilizadas
De acordo com as necessidades do projeto, as seguintes tecnologias são utilizadas  em seu desenvolvimento: 
HTML (Hyper Text Markup Language) – Utilizada para construir a estrutura dos elementos da interface gráfica do usuário.
CSS3 (Cascading Style Sheets) – Utilizado para estilizar os elementos da interface gráfica do usuário como, por exemplo, cores, espaçamentos, tamanho de fontes entre outros. 
Sass (Syntactically Awesome Style Sheets) – Utilizado como pré-processador de CSS, viabilizando sua escrita e manutenção. 
Javascript – Utilizado para criar funções que auxiliam o desenvolvimento do projeto.
Sublime Text 3 – Programa utilizado para administrar a programação e construção dos elementos da interface gráfica do usuário.
1.3.   Código-fonte
O Sass foi definido como método de estruturação do código fonte para o projeto. Esta é uma linguagem pré-processador de alta produtividade baseada em CSS que pode ser compilada, resultando no CSS que será interpretado pelos navegadores web.
1.4.   Automatizando tarefas
O desenvolvimento do projeto aqui proposto é baseado na automatização de tarefas, possibilitando um desenvolvimento ágil e viabilizando a manutenção do código para futuros ajustes ou atualizações. As tarefas automatizadas são: codificação, compilação e compressão de CSS; remoção das marcações de comentários no código fonte quando compilado; criação de arquivos em versões minificadas4 do código fonte quando compilado; e sincronização de navegadores em diversos dispositivos para testes em tempo real.
1.4.1.   Implementação da automatização de tarefas
Em princípio é utilizado o Javascript para implementar o Node Package Manager (NPM) a fim de automatizar todo o processo de desenvolvimento. O NPM é um gerenciador de pacotes e utilitário de linha de comando que consiste em um repositório online para publicação de projetos de código aberto para Node.js.
NPM é composta por três partes distintas: o site, o registro e a CLI. O site serve como a ferramenta principal para que os usuários descubram pacotes, o registro é um grande banco de dados de informações sobre pacotes e a CLI é como os desenvolvedores publicam seus pacotes no registro ou baixam pacotes que desejam instalar. “Texto traduzido” Disponível em <https://goo.gl/gNrUdy>. Acessado em 23 Outubro 20175
Esses pacotes são um conjunto de códigos reutilizáveis que resolvem problemas específicos em diferentes tipos aplicação para web. Dentre todos os pacotes disponíveis existem os que podem ser utilizados no front-end6. No desenvolvimento do projeto aqui proposto são utilizados os seguintes pacotes: Gulp, Gulp sass, Gulp rename e Gulp strip css comments.
1.4.2.   Pacotes do NPM utilizados 
Gulp: O Gulp é um conjunto de ferramentas que auxiliam a automatização de tarefas que são recorrentes ou demoradas no fluxo de trabalho do desenvolvimento. Neste projeto é utilizado em sua versão 3.9.1.
Gulp sass: O Gulp sass é o pacote do Gulp responsável pela compilação do Sass e compressão do CSS. Neste projeto é utilizado em sua versão 3.1.0.
Gulp rename: É o pacote responsável por renomear arquivos. Neste projeto é utilizado em sua versão 1.2.2.
Gulp strip css comments: É o pacote do Gulp responsável por remover as marcações de comentários dos arquivos de CSS. Neste projeto é utilizado em sua versão 1.2.0
1.5   Estruturas de arquivos 
Ao obter ferramenta aqui proposta através de download em https://goo.gl/brhyfn, teremos como pasta principal Editorial Framework 1.0.0 que comporta os arquivos de configuração, os arquivos Sass e, por fim, o arquivo de CSS compilado e pronto para ser utilizado em novos projetos, como segue na figura 1.


 
Na pasta css temos o arquivo editorial-framework.css, esse é o resultado final que é compilado e o arquivo que deve ser utilizado no desenvolvimento de novos
websites, a pasta ainda contém o arquivo em sua versão minificada, editorial-framework.min.css.
Em resources se encontram os recursos necessários que o projeto utiliza para compilar o arquivo editorial-framework.css, os recursos estão organizados nas pastas scss, build e os arquivos de configuração gulpfile.js e package.json. 
Em gulpfile.js são criadas as tarefas de automatização a serem executadas e a partir desse arquivo é feito a compilação do código fonte. Abaixo segue as tarefas criadas para atender as necessidades desse projeto.


No arquivo package.json temos uma listagem dos pacotes do NPM necessário para a execução de cada tarefa. Também contém informações do projeto como nome, descrição, versão, autor e indicação do arquivo gulpfile.scss.

Na pasta scss se encontram os arquivos referentes a cada tipo de elemento disponível pelo framework: 
graphic-elements.scss: contém os estilos de css para os elementos gráficos como títulos, parágrafo, indentação de parágrafo, capitular, olho, alinhamento de texto, corpo e tabelas.
grid.scss: contém os estilos de configuração do sistema de grid como sua largura máxima, quantidade de colunas e espaço entre colunas.
typography.scss: contém os estilos que definem as configurações padrão da tipografia como corpo, peso, entrelinha e cor.
ui-elements.scss: contém os estilos referentes aos elementos de interface do usuário como botão, área de texto, seletor, rótulo, legenda, caixa de seleção, input de e-mail, número, pesquisa, texto, telefone, url, senha.
variables.scss: neste arquivo se concentram as variáveis com os valores padrões utilizados para cada tipo de elemento. Essas variáveis são utilizadas pelos arquivos  graphic-elements.scss, grid.scss, typography.scss, ui-elements.scss. Desta forma a manutenção do código é viabilizada.
reset.scss: este arquivo contém os estilos que garantem a consistência e compatibilidade dos elementos do framework com todos os navegadores. 
A pasta build contém um único arquivo, o editorial-framework.scss, sua função é reunir todos os arquivos contidos na pasta scss para a partir dele ocorrer a compilação final, resultando no arquivo editorial-framework.css e editorial framework.min.css.

Capítulo 2 – Componentes do Editorial Framework
O projeto aqui proposto disponibiliza um conjunto de componentes úteis para estruturação de layouts de sites editoriais, contando com um sistema de grid responsivo, tipografia, elementos gráficos e elementos de interface gráfica do usuário.
2.1.   Sistema de grid
O grid é formado por 12 colunas com largura máxima padrão de 960px que será reajustado de acordo com o tamanho do navegador em desktops ou dispositivos menores. A largura máxima pode ser reajustada com as necessidades de cada projeto. As colunas são combinadas para gerar blocos, possibilitando as mais variadas composições de blocos. A combinação de blocos devem conter sempre 12 colunas. Seus estilos de configuração como calha e margens, se encontram no arquivo grid.scss.

O sistema é composto por três grids que reajustam a largura e a quantidade de blocos de acordo com medidas específicas definidas pelo Framework. O reajuste posiciona os blocos em sobreposição e define largura de 100% para todos os blocos independentes de sua quantidade de colunas. Os sistemas foram definidos como: Large, Medium, Small.
O reajuste do grid é feito apenas quando a largura máxima do navegador for menor que 768px. Caso contrário a forma do grid se mantém, independente do sistema de utilizado.
No sistema Large o reajuste do grid é feito quando a largura máxima do navegador for menor que 768px, como segue na figura 5.






No sistema Medium o reajuste do grid é feito quando a largura máxima do navegador for menor que 640px.








No sistema Small o reajuste do grid é feito quando a largura máxima do navegador for menor que 480px.




























A estrutura básica para a criação e combinação dos sistemas de grid pode ser obtida com as seguintes marcações de texto HTML.













2.2.   Tipografia
Como padrão assumimos estilos com valores genéricos para a fonte que se aplicam em todos elementos de texto contidos na página, os estilos definem o corpo de texto, a entrelinha, o peso e a cor. Esses valores podem ser alterados no arquivo typography.scss de acordo com a necessidade da fonte escolhida para o projeto que utiliza a ferramenta aqui proposta. 
2.3.   Elementos gráficos
Os elementos gráficos são componentes disponíveis para estruturar layout, organizar e estilizar conteúdos na página.
2.3.1.   Títulos
Os estilos de CSS para os títulos são aplicados nas tags7 h1 a h6, podendo ser aplicados também com as classes .h1 a .h2 em qualquer tag que comporte conteúdo
 de texto. Os valores da estilização podem ser alterados em graphic-elements.scss. Abaixo seguem exemplos de sua aplicação em marcação HTML.







2.3.2   Parágrafo
Os estilos de margem superior e inferior dos elementos de paragrafo foram redefinidos facilitar o espaçamento e construção de layout.
2.3.3   Indentação de parágrafo
A indentação é aplicada nos elementos que comportam conteúdo de texto, utilizando a classe .rec, referente ao recuo do texto em relação à margem. Seus estilos se encontram no arquivo graphic-elements.scss.

2.3.4   Capitular
O capitular também é aplicado nos elementos que comportam conteúdo de texto, utilizando a classe .cap. Seus estilos se encontram no arquivo graphic-elements.scss. Abaixo, na figura 14, segue sua aplicação no elemento de parágrafo.

2.3.5.   Olho
O olho é aplicado especificamente no elemento de parágrafo, utilizando a classe .eye. Seus estilos se encontram no arquivo graphic-elements.scss. Abaixo, na figura 15, segue sua aplicação.

2.3.6.   Alinhamento de texto
O alinhamento de texto pode ser aplicado em qualquer elemento que comporta conteúdo de texto com a classe .text-left alinha o texto à esquerda; a classe .text-right alinha o texto à direita; a classe text-center centraliza o texto e a classe .text-justfy mantém o texto justificado. Na figura que segue temos exemplos de sua aplicação.




2.3.7.   Peso
O peso é utilizado em qualquer elemento que comporta conteúdo de texto com a classe .bolder, aplicando o peso bold; a classe .normal, aplicando o peso padrão e a classe .lighter, aplicando o peso light. Abaixo, na figura 17, segue sua aplicação.



2.3.8.   Tabelas
A tabela, além do estilo padrão, apresenta quatro variações de estilo que podem ser aplicadas de acordo com as necessidades de cada projeto. As variações são: tabela listrada, tabela com hover, tabela com borda e tabela condensada. O estilo padrão é aplicado no elemento de tabela com a classe .table. Abaixo segue a figura da tabela padrão.

Os estilos das variações são aplicadas adicionando suas classes. As tabelas podem conter mais de um estilo de variação. Podemos visualizar as variações a seguir.




Abaixo temos as marcações HTML com os elementos de tabela e a aplicação das classes de variação.

























