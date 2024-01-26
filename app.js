function encriptarTexto() {
    let texto = document.getElementById('texto-usuario').value;
    let textoCifrado = '';

    for(let i=0; i<texto.length; i++) {
        // Iteracion sobre cada caracter del texto
        switch(texto[i]) {
        // Criterio de encriptacion
        case 'a':
            textoCifrado += 'ai';
            break;
        case 'e':
            textoCifrado += 'enter';
            break;
        case 'i':
            textoCifrado += 'imes';
            break;
        case 'o':
            textoCifrado += 'ober';
            break;
        case 'u':
            textoCifrado += 'ufat';
            break;
        default:
            textoCifrado += texto[i];
            break;
        }
    }
    
    document.getElementById('texto-salida').value = textoCifrado;
}
