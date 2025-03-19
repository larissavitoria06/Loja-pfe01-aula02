const uri = './assets/dados.json';
var produtos = [];

// Carregar os dados do Mockup
fetch(uri)
  .then(resp => resp.json())
  .then(resp => { produtos = resp; })
  .then(() => mostrarCards());

// Função para mostrar os cards
function mostrarCards() {
  const main = document.querySelector('main');
  produtos.forEach((p, index) => {
    main.innerHTML += `
      <div class="card">
        <h3>${p.produto}</h3>
        <img src="${p.imagem}" alt="${p.produto}">
        <p>Preço: ${p.preco}</p>
        <p>Descrição: ${p.descricao}</p>
        <button data-index="${index}">Detalhes</button>
      </div>
    `;
  });

  // Adicionar evento de clique aos botões de detalhes
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      mostrarDetalhes(index);
    });
  });
}

// Função para mostrar os detalhes do produto
function mostrarDetalhes(index) {
  const produto = produtos[index];

  // Exibir os detalhes em algum local específico (ex: em um modal, alert ou div)
  alert(`Detalhes do Produto:
    Nome: ${produto.produto}
    Preço: ${produto.preco}
    Descrição: ${produto.descricao}
    Imagem: ${produto.imagem}`);
}
