const btnConverter = document.getElementById("botao-acao")

btnConverter.addEventListener('click', () => {
    let modelo = document.getElementById('marca_veiculo')
    let preco = document.getElementById('preco_veiculo')
    let resultado_modelo = document.getElementById('carro')
    let resultado_preco = document.getElementById('price')

    let marca = marca_veiculo.value
    let p_veiculo = preco_veiculo.value

    carro.textContent = marca
    price.textContent = ` --- Entrada de R$ ${Math.floor(p_veiculo * 0.50)} --- 12x R$ ${Math.floor((p_veiculo - p_veiculo * 0.50 )/ 12)}`



    
})