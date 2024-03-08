let contador = 0;

// function exibirMensagemInicial() {
//     exibirTexto('h1.principal__lateral__titulo', 'Nenhuma mensagem encontrada');
//     exibirTexto('p.principal__lateral__paragrafo', 'Digite um texto que você deseja criptografar ou descriptografar.');
// }

// exibirMensagemInicial();
document.querySelector('button.principal__lateral__botao').style.display = 'none';

function criptografar() {
    let texto = document.querySelector('textarea.principal__conteudo__texto').value;
    let textoFormatado = texto.toLowerCase();
    //Tirando acentos da string;
    textoFormatado = textoFormatado.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    let textoCriptografado = textoFormatado;
    
    textoCriptografado = textoCriptografado.replace(/e/g, 'enter');
    textoCriptografado = textoCriptografado.replace(/i/g, 'imes')
    textoCriptografado = textoCriptografado.replace(/a/g, 'ai');
    textoCriptografado = textoCriptografado.replace(/o/g, 'ober');
    textoCriptografado = textoCriptografado.replace(/u/g, 'ufat');
    console.log(textoCriptografado);   

    if (textoCriptografado != '') {
        exibirTexto('p.principal__lateral__paragrafo', textoCriptografado);
        contador++;
        console.log(contador);
        removerImagem();
        limparCampo();
        document.querySelector('button.principal__lateral__botao').style.display = 'inline';
    } 
    // else {
    //     exibirMensagemInicial();
    // }
}

function descriptografar() {
    let texto = document.querySelector('textarea.principal__conteudo__texto').value;
    let textoFormatado = texto.toLowerCase();
    //Tirando acentos da string;
    textoFormatado = textoFormatado.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    let textoDescriptografado = textoFormatado;

    textoDescriptografado = textoDescriptografado.replace(/enter/g, 'e');
    textoDescriptografado = textoDescriptografado.replace(/imes/g, 'i');
    textoDescriptografado = textoDescriptografado.replace(/ai/g, 'a');
    textoDescriptografado = textoDescriptografado.replace(/ober/g, 'o');
    textoDescriptografado = textoDescriptografado.replace(/ufat/g, 'u');
    console.log(textoDescriptografado);
    
    if (textoDescriptografado != '') {
        exibirTexto('p.principal__lateral__paragrafo', textoDescriptografado);
        contador++;
        console.log(contador);
        removerImagem();
        limparCampo();
        document.querySelector('button.principal__lateral__botao').style.display = 'inline';
    } 
    // else {
    //     exibirMensagemInicial();
    // }
}

function removerImagem() {
    if (contador == 1) {
        let imagem = document.querySelector('img.principal__lateral__imagem');
        imagem.remove();
    }
}

function exibirTexto(tag, texto) {
    let titulo = document.querySelector('h1.principal__lateral__titulo');
    titulo.innerHTML = '';

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    document.querySelector('p.principal__lateral__paragrafo').style.fontSize = '1.5em';

    document.querySelector('p.principal__lateral__paragrafo').style.padding = '40px 5px 40px 5px';

    document.querySelector('p.principal__lateral__paragrafo').style.textAlign = 'left';

    document.querySelector('aside.principal__lateral').style.justifyContent = 'flex-start';
}

function limparCampo() {
    texto = document.querySelector('textarea.principal__conteudo__texto');
    texto.value = '';
}

function copiar() {
    let textoCopiado = document.querySelector('p.principal__lateral__paragrafo').innerHTML;
    navigator.clipboard.writeText(textoCopiado);
}