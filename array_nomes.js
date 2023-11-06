const nomes = ['Alice', 'João', 'Carol', 'Daniel', 'Maria'];

nomes.push('Pedro');
console.log('Nomes com novo elemento no final:', nomes);

const nomeRemovido = nomes.pop();
console.log('Nome removido do final:', nomeRemovido);
console.log('Nomes após a remoção:', nomes);

nomes.reverse();
console.log('Nomes invertidos:', nomes);

const primeiroNome = nomes.shift();
console.log('Primeiro nome removido:', primeiroNome);
console.log('Nomes após a remoção do primeiro elemento:', nomes);

const parteDoArray = nomes.slice(1, 3);
console.log('Parte do array:', parteDoArray);

console.log('Nomes no array antes de ordenar:', nomes);

nomes.sort((a, b) => a.localeCompare(b));

console.log('Nomes ordenados em ordem alfabética:', nomes);

nomes.unshift('Pedro');
console.log('Nomes com novo elemento no início:', nomes);

console.log('Nomes no array:');
nomes.forEach(function(nome) {
console.log(nome);
});
