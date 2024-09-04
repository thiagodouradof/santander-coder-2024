const spanMedia = document.getElementById('media');

const SITUACAO = {
  Aprovado: 'Aprovado',
  Reprovado: 'Reprovado'
}

function obterValoresDoFormulario(event) {
  const form = new FormData(event.target);

  return {
    nota1: Number(form.get('nota1')),
    nota2: Number(form.get('nota2')),
    nota3: Number(form.get('nota3'))
  }
}

function validarNotas(notas) {
  for (const valor in notas) {
    const nota = notas[valor];

    if (isNaN(nota)) {
      return false;
    }

    if (nota < 0 || nota > 10) {
      return false;
    }
  }

  return true;
}

function verificaAprovacao(media) {
  let situacao = SITUACAO.Aprovado;

  if (media < 7) {
    situacao = SITUACAO.Reprovado;
  }

  return situacao;
}

function calcularMedia(notas) {
  const { nota1, nota2, nota3 } = notas;
  const media = (nota1 + nota2 + nota3) / 3;

  return (media).toFixed(2);
}

function apresentarMedia(notas) {
  const media = calcularMedia(notas);

  spanMedia.innerText = media;

  const spanSituacao = document.createElement('span');
  spanSituacao.innerText = verificaAprovacao(media);

  if (media < 7) {
    spanSituacao.classList.add('reprovado');
  } else {
    spanSituacao.classList.add('aprovado');
  }

  spanMedia.appendChild(spanSituacao);
}

function calcular(event) {
  // previne a execução do evento padrão do submit:
  event.preventDefault();

  const notas = obterValoresDoFormulario(event);

  if (!validarNotas(notas)) {
    alert('Notas inválidas');
    return;
  }

  apresentarMedia(notas);
}