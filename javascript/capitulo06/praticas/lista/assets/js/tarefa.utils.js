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
function removeTarefaComClique(li) {
    // li.classList.toggle('remove-tarefa');

    var confirmacao = window.confirm('Deseja remover a tarefa: ' + li.textContent + ' ?');

    if (confirmacao) {
        var parentNode = li.parentNode;

        if (parentNode) {
            parentNode.removeChild(li);
        }
    }
}

/*
 * evento - click
 * elemento - <li></li>
 * descrição - verifica se um item da lista foi clicado e chama o método removeTarefaComClique
 */
function verificaItemDaListaClicado(evento) {
    evento.stopPropagation();

    if (evento.target.localName === 'li') {
        removeTarefaComClique(evento.target);
    }
}