// Funcao para mascara de CPF
function maskCPF(valor) {
  return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}

//Funcao para mascara de CNPJ
function maskCNPJ(valor) {
  return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5')
}

//Funcao para mascara de CEP
function maskCEP(valor) {
  return valor.replace(/(\d{5})(\d{3})/g, '$1-$2')
}

//Funcao para mascara de telefone
function maskPhone(valor) {
  return valor.replace(/(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3')
}

//Exemplos
const formattedCPF = maskCPF('12345678909')
const formattedCNPJ = maskCNPJ('12345678900123')
const formattedCEP = maskCEP('12345678')
const formattedPhone = maskPhone('12345678901')

console.log(formattedCPF) //Saida: 123.456.789-09
console.log(formattedCNPJ) //Saida: 12.345.678/9001-23
console.log(formattedCEP) //Saida: 12345-678
console.log(formattedPhone) //Saida: (12) 34567-8901
