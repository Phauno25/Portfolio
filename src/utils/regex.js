const rgxTexto = /^(?! *$)[a-zA-Z.+ '-_]+$/;
const rgxCodigo = /^[A-Z]{300}$/

const regex = {
    testText: (texto) =>{
        return rgxTexto.test(texto);  
    },
    testQuantity: (texto) =>{
        return rgxCodigo.test(texto);
    },
}

export default regex