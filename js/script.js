// Contador global para identificar os chamados
let chamadoId = 1;

document.getElementById('btn-criar-chamado').addEventListener('click', function() {
    // Capturar os dados do formulário
    const assunto = document.getElementById('assunto').value;
    const descricao = document.getElementById('descricao').value;
    const local = document.getElementById('local').value;
    const prioridade = document.getElementById('prioridade').value;
    const solicitante = document.getElementById('solicitante').value;

    // Criar uma nova linha para a tabela com o identificador exclusivo
    const tr = document.createElement('tr');
    tr.setAttribute('data-id', chamadoId);

    // Criar células para os dados do chamado
    const tdId = document.createElement('td');
    tdId.textContent = chamadoId;

    const tdAssunto = document.createElement('td');
    tdAssunto.textContent = assunto;

    const tdPrioridade = document.createElement('td');
    tdPrioridade.textContent = prioridade;

    const tdSolicitante = document.createElement('td');
    tdSolicitante.textContent = solicitante;

    // Criar uma célula com botões para ações
    const tdAcoes = document.createElement('td');

    // Botão para visualizar o chamado
    const btnVisualizar = document.createElement('button');
    btnVisualizar.innerHTML = '<i class="bi bi-eye-fill"></i> Visualizar';
    btnVisualizar.className = 'btn-visualizar';
    btnVisualizar.addEventListener('click', function() {
        document.getElementById('detalhes-chamado').innerHTML = 
        `<p class="p-2"><strong>ID:</strong> ${chamadoId}</p>
         <p class="p-2"><strong>Assunto:</strong> ${assunto}</p>
         <p class="p-2"><strong>Descrição:</strong> ${descricao}</p>
         <p class="p-2"><strong>Local:</strong> ${local}</p>
         <p class="p-2"><strong>Prioridade:</strong> ${prioridade}</p>
         <p class="p-2"><strong>Solicitante:</strong> ${solicitante}</p>`;
        document.getElementById('modal-visualizar').style.display = 'block';
    });

    // Botão para editar o chamado
    const btnEditar = document.createElement('button');
    btnEditar.innerHTML = '<i class="bi bi-pencil-fill"></i> Editar';
    btnEditar.className = 'btn-editar';
    btnEditar.addEventListener('click', function() {
        document.getElementById('assunto').value = assunto;
        document.getElementById('descricao').value = descricao;
        document.getElementById('local').value = local;
        document.getElementById('prioridade').value = prioridade;
        document.getElementById('solicitante').value = solicitante;
        document.getElementById('modal-visualizar').style.display = 'none';
    });

    // Botão para excluir o chamado
    const btnExcluir = document.createElement('button');
    btnExcluir.innerHTML = '<i class="bi bi-trash3-fill"></i> Excluir';
    btnExcluir.className = 'btn-excluir bg-danger';
    btnExcluir.addEventListener('click', function() {
        const tr = document.querySelector(`tr[data-id='${chamadoId}']`);
        tr.remove();
        document.getElementById('modal-visualizar').style.display = 'none';
    });

    // Adicionar botões às ações
    tdAcoes.appendChild(btnVisualizar);
    tdAcoes.appendChild(btnEditar);
    tdAcoes.appendChild(btnExcluir);

    // Adicionar células à linha
    tr.appendChild(tdId);
    tr.appendChild(tdAssunto);
    tr.appendChild(tdPrioridade);
    tr.appendChild(tdSolicitante);
    tr.appendChild(tdAcoes);

    // Adicionar a nova linha à tabela
    document.getElementById('tabela-chamados-body').appendChild(tr);

    // Incrementar o contador global
    chamadoId++;

    // Limpar o formulário após adicionar o chamado
    document.getElementById('form-novos-chamados').reset();
});

// Fechar o modal quando o usuário clicar no botão de fechar
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal-visualizar').style.display = 'none';
});

// Fechar o modal quando o usuário clicar fora do conteúdo do modal
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal-visualizar')) {
        document.getElementById('modal-visualizar').style.display = 'none';
    }
});

