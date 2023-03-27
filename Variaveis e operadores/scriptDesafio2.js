const botao = document.querySelector('[data-input="botao"]')

function rodarfuncao(event){
    event.preventDefault()

    const tipo = document.querySelector('[data-input="tipo"]').value
    const kmLitro = document.querySelector('[data-input="km/litro"]').value
    const distancia = document.querySelector('[data-input="distancia"]').value
    const resultadoValor = document.querySelector('[data-resultado="valorTotal"]')
    const resultadoLitros = document.querySelector('[data-resultado="litros"]')

console.log(tipo)


    const gastoCombustivel = distancia/kmLitro

    if(tipo.toUpperCase() === "ETANOL"){
        const valorCombustivel = 4
        const valorGasto = valorCombustivel * gastoCombustivel
        resultadoLitros.innerText = `Você gastou ${gastoCombustivel} Litros de Etanol`
        resultadoValor.innerText = `Você gastou R$${valorGasto}`
        

    }else if(tipo.toUpperCase() === "GASOLINA"){
        const valorCombustivel = 4.5
        const valorGasto = valorCombustivel * gastoCombustivel
        resultadoLitros.innerText = `Você gastou ${gastoCombustivel} Litros de Gasolina`
        resultadoValor.innerText = `Você gastou R$${valorGasto}`

    }else if(tipo.toUpperCase() === "DIESEL"){
        const valorCombustivel = 5
        const valorGasto = valorCombustivel * gastoCombustivel
        resultadoLitros.innerText = `Você gastou ${gastoCombustivel} Litros de Diesel`
        resultadoValor.innerText = `Você gastou R$${valorGasto}`

    }







}






botao.addEventListener('click', rodarfuncao)