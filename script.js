// Função para dar destaque visual ao card selecionado pelo usuário
function destacar(idDoCard) {
    // Remove o destaque de todos os cards primeiro
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('destaque');
    });

    // Adiciona o destaque apenas no card clicado
    const cardSelecionado = document.getElementById(idDoCard);
    cardSelecionado.classList.add('destaque');
}