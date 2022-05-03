let amigo = {nome: 'Willian', 
sexo: 'M', 
idade: '27',
peso: 78.5,
engordar(p){
    console.log('Engordou')
    this.peso += p

}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)