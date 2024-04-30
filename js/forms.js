const formularioContato = document.getElementById('formulario-contato');
const mensagemEnviada = document.getElementById('mensagem-enviada');

formularioContato.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simula envio do formulário para um servidor (substitua com sua lógica)
    console.log('Formulário enviado!');

    // Exibe a mensagem de sucesso
    mensagemEnviada.style.display = 'block';

    // Limpa o formulário após 5 segundos
    setTimeout(() => {
        mensagemEnviada.style.display = 'none';
        formularioContato.reset();
    }, 5000);
});
