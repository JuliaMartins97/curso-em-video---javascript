var idade = 68
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65 ) { // || significa ou lê-se idade menor que 18 ou idade maior que 65 
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}
