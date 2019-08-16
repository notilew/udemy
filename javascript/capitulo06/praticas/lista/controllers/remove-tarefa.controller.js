(function(window, document) {
	'use strict';

	var nodeList = document.querySelectorAll('div ul li');

	for (var i = 0; i < nodeList.length; i++) {
		adicionaEventoDeCliqueNoItemDaLista(nodeList[i]);
	}
})(window, document);
