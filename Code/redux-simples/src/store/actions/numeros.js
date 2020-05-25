
// Action Creator
function alterarNumeroMinimo(novoNumero) {

    // Action
    return {
        type: 'NUM_MIN_ALTERADO',
        payload: novoNumero
    }
}


function alterarNumeroMaximo(novoNumero) {

    // Action
    return {
        type: 'NUM_MAX_ALTERADO',
        payload: novoNumero
    }
}

module.exports = {
    alterarNumeroMaximo,
    alterarNumeroMinimo
}