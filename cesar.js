function cifraLetra(letra, chave) {
    const alfabeto = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
    const indice = alfabeto.indexOf(letra.toLowerCase());
    if (indice === -1) return letra; 
    const novoIndice = (indice + chave) % 26;
    return letra === letra.toUpperCase() 
        ? alfabeto[novoIndice].toUpperCase() 
        : alfabeto[novoIndice];
}

function decifraLetra(letra, chave) {
    const alfabeto = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
    const indice = alfabeto.indexOf(letra.toLowerCase());
    if (indice === -1) return letra; 
    const novoIndice = (indice - chave + 26) % 26;
    return letra === letra.toUpperCase() 
        ? alfabeto[novoIndice].toUpperCase() 
        : alfabeto[novoIndice];
}

function criptografia(mensagem, chave, conversor) {
    let resultado = '';
    for (const letra of mensagem) {
        if (letra.match(/[a-z]/i)) {
            resultado += conversor(letra, chave);
        } else {
            resultado += letra;
        }
    }
    return resultado;
}


const mensagem = "igor";
const chave = 4;


const mensagemCriptografada = criptografia(mensagem, chave, cifraLetra);
console.log("Criptografada:", mensagemCriptografada);

const mensagemDescriptografada = criptografia(mensagemCriptografada, chave, decifraLetra);
console.log("Descriptografada:", mensagemDescriptografada);
