const pessoa = {
  nome: 'Rafael',
  idade: 35,
  peso: 120
}

function clone(object){
  return { ...object }
}

const novaPessoa = clone(pessoa)
novaPessoa.nome = "Freire"
console.log(pessoa, novaPessoa)