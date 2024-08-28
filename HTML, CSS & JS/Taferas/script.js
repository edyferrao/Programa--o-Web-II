window.onload = carregarTarefas;

function adicionarTarefa() {
    const tarefaTexto = document.getElementById('texto').value;

    if (tarefaTexto.trim() === '') return;
    
    const tarefa = {
        texto: tarefaTexto,
        concluida: false
    };

    criarTarefa(tarefa);
    salvarTarefaNoLocalStorage(tarefa);
    document.getElementById('texto').value = '';
}


function criarTarefa(tarefa){
    const taskList = document.getElementById('listaDeTarefas');
    const li = document.createElement('li');
    li.textContent = tarefa.texto;

    const span = document.createElement('span');
    span.textContent = tarefa.texto;
    span.className = 'tarefa-texto';

    if (tarefa.concluida) {
        li.classList.add('completed');
    }

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Concluído';
    completeButton.className = 'complete-button';
    completeButton.disabled = tarefa.concluida;
    completeButton.addEventListener('click', function() {
        li.classList.add('completed');
        completeButton.disabled = true;
        tarefa.concluida = true;
        atualizarTarefaNoLocalStorage(tarefa);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remover';
    deleteButton.className = 'remove-button';
    deleteButton.addEventListener('click', function() {
        removerTarefa(tarefa, li);
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

function salvarTarefaNoLocalStorage(tarefa) {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function carregarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.forEach(tarefa => criarTarefa(tarefa));
}

function removerTarefa(tarefaRemovida, li) {
    li.remove();
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas = tarefas.filter(tarefa => tarefa.texto !== tarefaRemovida.texto);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function atualizarTarefaNoLocalStorage(tarefaAtualizada) {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas = tarefas.map(tarefa => 
        tarefa.texto === tarefaAtualizada.texto ? tarefaAtualizada : tarefa
    );
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}