function limpiar(id) {
    document.getElementById(id).value = '';
}

function copiarTexto() {
    let texto = document.getElementById('texto-salida').value;
    navigator.clipboard.writeText(texto);
    limpiar('texto-salida');
}

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
    limpiar('texto-usuario');
}

function desencriptarTexto() {
    let texto = document.getElementById('texto-usuario').value;
    let textoDescifrado = '';
    
    for(let i=0; i<texto.length; i++) {
        // Iteracion sobre cada caracter del texto
        textoDescifrado += texto[i];

        switch(texto[i]) {
        // Criterio de desencriptado
        // La variable iterador <i> se avanza para ignorar los caracteres agregados por la funcion encriptar
        case 'a':
            i += 1;
            break;
        case 'e':
            i += 4;
            break;
        case 'i':
            i += 3;
            break;
        case 'o':
            i += 3;
            break;
        case 'u':
            i += 3;
            break;
        }
    }
    
    document.getElementById('texto-salida').value = textoDescifrado;
    limpiar('texto-usuario');
}