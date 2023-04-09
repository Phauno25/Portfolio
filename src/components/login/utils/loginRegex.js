const rgxTexto = /^(?! *$)[a-zA-Z.+ '-_]+$/;
const rgxCodigo = /^[A-Z]{3}$/
const rgxDeuda = /^[0-9]*$/;
const rgxPrecio = /^(?!(?:0|0\.0|0\.00)$)[+]?\d+(\.\d|\.\d[0-9])?$/;
const rgxCantidad = /^[1-9]\d*$/;
const rgxEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const loginRegex = {
    testTexto: (texto) =>{
        return rgxTexto.test(texto);  
    },
    testCodigo: (codigo) =>{
        return rgxCodigo.test(codigo);
    },
    testDeuda: (deuda) =>{
        return rgxDeuda.test(deuda);
    },
    testPrecio: (precio) =>{
        return rgxPrecio.test(precio);
    },
    testCantidad: (cantidad) =>{
        return rgxCantidad.test(cantidad);
    },
    testEmail: (email) =>{
        return rgxEmail.test(email);
    }

}

export default loginRegex