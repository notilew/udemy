/*
* evento - click
* elemento - <button id="button-adicionar"></button>
* descricao - adiciona uma tarefa na lista de tarefas
*/
function adicionaTarefaComBotaoAdicionar(evento) {
	evento.stopPropagation();

	var tarefa = new window.tarefa();

	tarefa.nome = document.getElementById('input-nome');
	tarefa.descricao = document.getElementById('input-descricao');

	if (tarefa.nome.value && tarefa.descricao.value) {
		var ul = document.querySelector('div ul');
		var li = document.createElement('li');
		var texto = tarefa.nome.value + ' | ' + tarefa.descricao.value;
		var conteudo = document.createTextNode(texto);

		li.appendChild(conteudo);
		ul.appendChild(li);

		adicionaEventoDeCliqueNoItemDaLista(li);

		tarefa.nome.focus();
		tarefa.nome.value = '';
		tarefa.descricao.value = '';
	} else {
		window.alert('É necessário informar o nome e a descrição da tarefa!');
	}
}

/*
* evento - keyup
* elemento - <input type="text" id="input-descricao">
* descrição - verifica se a tecla enter foi pressionada e adiciona uma tarefa na lista de tarefas
*/
function adicionaTarefaComTeclaEnter(evento) {
	evento.stopPropagation();

	if (evento.keyCode === 13) {
		adicionaTarefaComBotaoAdicionar(evento);
	}
}

/*
* evento - click
* elemento - <li></li>
* descriçao - adiciona a classe remove-tarefa no item da lista
*/
function removeTarefaComClique(evento) {
	evento.stopPropagation();

	if (evento.currentTarget.localName === 'li') {
		evento.currentTarget.classList.toggle('remove-tarefa');
	}
}

/*
* evento - click
* elemento - <li></li>
* descrição - adiciona um ouvinte de evento na li passada como parâmetro
*/
function adicionaEventoDeCliqueNoItemDaLista(li) {
	if (li) {
		li.addEventListener('click', removeTarefaComClique);
	}
}
