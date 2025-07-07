document.getElementById('botaoMotivacional').addEventListener('click', function() {
    const mensagem = `"Todo grande sonho nasce de um simples passo. Caminhe devagar e com confiança, e sua jornada será inesquecível."`;
    const elementoMensagem = document.getElementById('mensagemMotivacional');

    if (elementoMensagem.style.display === 'block') {
        elementoMensagem.style.display = 'none';
        this.textContent = 'Mostrar Mensagem Motivacional';
    } else {
        elementoMensagem.textContent = mensagem;
        elementoMensagem.style.display = 'block';
        this.textContent = 'Ocultar Mensagem';
    }
});