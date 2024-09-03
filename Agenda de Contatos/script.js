const corpoTabela = document
  .getElementById('agenda')
  .getElementsByTagName('tbody')[0];

const agenda = [];

function montarTabela(contatos) {
  corpoTabela.innerHTML = '';

  // 4. Inserir os dados na tabela:
  for (const contato of contatos) {
    // 5. Criar os elementos da tabela:
    const linha = document.createElement('tr');

    const colunaNome = document.createElement('td');
    colunaNome.innerText = contato.nome;

    const colunaTelefone = document.createElement('td');
    colunaTelefone.innerText = contato.telefone;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaTelefone);

    corpoTabela.appendChild(linha);
  }
}

function salvarContato() {
  // 1. Obter os dados dos inputs:
  const inputNome = document.getElementById('nome');
  const inputTelefone = document.getElementById('telefone');

  const nome = inputNome.value;
  const telefone = inputTelefone.value;

  // 2. Criar um objeto (dicionário) para manter os dados do contato:
  const novoContato = {
    nome,
    telefone
  };

  // 3. Inserir o objeto criado no array: 
  agenda.push(novoContato);

  montarTabela(agenda);

  // 6. Limpar os inputs:
  inputNome.value = '';
  inputTelefone.value = '';
}

function filtrar() {
  const filtro = document.getElementById('filtro').value;

  const listaEncontrada =
    agenda.filter((contato) => contato.nome.toLowerCase().includes(filtro.toLowerCase()));

  montarTabela(listaEncontrada);
}