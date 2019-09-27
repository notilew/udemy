===================================
=== DOCUMENT OBJECT MODEL - DOM ===
===================================

- É a conexão entre o mundo JS e o mundo HTML, com ele é possível acessar, recuperar e modificar elementos HTML. Quando falamos de DOM, estamos falando mais precisamente do objeto document. O DOM é vivo, tudo que é alterado no mundo JS é alterado na página, mas o DOM não altera o documento original enviado pelo servidor.

======================
=== MÉTODOS DO DOM ===
======================

- Métodos de seleção de elementos:
    * getElementById('id') - Seleciona um elemento por id. Observação: O dado retornado é uma referência do elemento.
    * getElementsByClassName('class') - Seleciona todos os elementos que estejam adicionando a uma classe. Observação: Os dados retornados são uma coleção de objetos (nodeList).
    * getElementsByTagName('tag') - Seleciona todos os elementos com o nome da tag informada como parâmetro. Observação: Os dados retornado são uma coleção de objetos (nodeList).
    * querySelector('seletor de css') - Seleciona um elemento utilizando seletores do CSS.
    * querySelectorAll('seletor de css) - Seleciona todos os elementos utilizando seletores do CSS. Observação: Os dados retornados são uma coleção de objetos (nodeList).

===========================
=== PROPRIEDADES DO DOM ===
===========================

- Propriedades de conteúdo:
    * textContent - Recupera ou seta o conteúdo de um elemento. Observação: Altera somente o texto puro do elemento.
    * innerHTML - Recupera ou seta o código HTML no DOM.
    * value - Recupera ou seta o valor em um input de formulário.

==========================
=== FUNÇÕES JAVASCRIPT ===
==========================

- Verifica se um valor não pode ser convertido para número:
    * isNaN().

==========================
=== MÉTODOS JAVASCRIPT ===
==========================

- Chama uma função com um dado valor this e arguments providos como um array (ou um objeto parecido com um array).
    * .apply().

- Chama uma função com um dado valor this e arguments passados individualmente.
    * .call().

- Adiciona eventos em um elemento HTML.
    * addEventListener('manipulador_de_evento', função);

Observação: A propagação de eventos (capacidade dos eventos de percorrerem a estrutura do HTML, desde o elemento original até o nível mais alto (num página web é o elemento body)) possui um terceiro parâmetro, que é boleano e pode inverter direção da propagação, que seria do elemento mais alto até o elemento original. 

===============================
=== PROGRESSIVE ENHANCEMENT ===
===============================

- Pesquisar...

====================================================
=== VERIFICA SUPORTE DO JAVASCRIPT EM NAVEGAORES ===
====================================================

- https://caniuse.com

======================
=== SPRED OPERATOR ===
======================

- É utilizado para passar para o array arguments, argumentos separados, parâmetros que estejam em array [2, 3, 4] ou string '2, 3, 4'.

    * calculaMedia(...[2, 3]);

    * calculaMedia(...'2, 3');

