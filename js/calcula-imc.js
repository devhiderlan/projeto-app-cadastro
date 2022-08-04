var titulo = document.querySelector('h1')
titulo.textContent = 'Tabela de Pacientes'

var pacientes = document.querySelectorAll('.paciente')

for (i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]

  var tdPeso = paciente.querySelector('.info-peso')
  var tdAltura = paciente.querySelector('.info-altura')
  var tdImc = paciente.querySelector('.info-imc')

  var altura = tdAltura.textContent
  var peso = tdPeso.textContent

  var pesoEhValido = true
  var alturaEhValida = true

  if (peso <= 0 || peso >= 1000) {
    console.log('Peso inválido')
    pesoEhValido = false
    tdImc.textContent = 'O peso é inválido'
    paciente.classList.add('paciente-invalido')
  }

  if (altura <= 0 || altura >= 2.5) {
    console.log('Altura inválida')
    alturaEhValida = false
    tdImc.textContent = 'A altura é inválida'
    paciente.classList.add('paciente-invalido')
  }

  if (pesoEhValido && alturaEhValida) {
    imc = calculaImc(peso, altura)
    tdImc.textContent = imc
  }
}

function calculaImc(peso, altura) {
  var imc = 0
  imc = peso / (altura * altura)
  return imc.toFixed(2)
}
