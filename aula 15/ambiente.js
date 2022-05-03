let num = [5, 8, 2, 9, 3,]

/* para adicionar novos valores
 * num[5] = 6 aqui você escolhe a posição onde quer que o numero entre

 * num.push(10) aqui ele bota o numero que você escolheu "10" na ultima posição
*/
 /*num.length é usado para falar quantos elementos tem dentro do vetor */

 // num.sort() ira colocar em ordem crescente os elementos
 num.sort() 
 num.push(1)
/*console.log(`Nosso vetor é o ${num}.`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)*/


let pos = num.indexOf(2) // procura a posição desejada
if (pos == -1){
    console.log(`O valor ${pos} não encontrado`)
} else {
    console.log(`O valor é ${pos}`)
}