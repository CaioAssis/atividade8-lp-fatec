/*
Utilizando node criar uma aplicação que recebe o salário, o reajuste e apresente o novo salário

Passo a passo da aplicação:
npm init
npm i prompt-sync

Ao enviar a solução compacte os arquivos index.js, package.json e package-lock.json
*/
const prompt = require('prompt-sync')()

const sal = Number(prompt('Digite o salário atual: '))
const reaj = Number(prompt('Digite o reajuste (em %): '))

const novo = (sal * reaj / 100) + sal

console.log('==================')
console.log(' ')
console.log(`Salário antigo: ${sal}`)
console.log(`Reajuste: ${reaj}%`)
console.log('-------')
console.log(`Novo Salário: ${novo}`)
console.log(' ')
console.log('==================')