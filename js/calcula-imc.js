var titulo = document.querySelector('h1')
titulo.textContent = 'Cadastro de Pacientes'

var pacientes = document.querySelectorAll('.paciente')

for (i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]

  var tdPeso = paciente.querySelector('.info-peso')
  var tdAltura = paciente.querySelector('.info-altura')
  var tdImc = paciente.querySelector('.info-imc')

  var altura = tdAltura.textContent
  var peso = tdPeso.textContent

  var pesoEhValido = validaPeso(peso)
  var alturaEhValida = validaAltura(altura)

  if (!pesoEhValido) {
    console.log('Peso inválido')
    pesoEhValido = false
    tdImc.textContent = 'O peso é inválido'
    paciente.classList.add('paciente-invalido')
  }

  if (!alturaEhValida) {
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

function validaPeso(peso) {
  if (peso >= 0 && peso <= 500) {
    return true
  } else {
    return false
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 2.5) {
    return true
  } else {
    return false
  }
}

function calculaImc(peso, altura) {
  var imc = 0
  imc = peso / (altura * altura)
  return imc.toFixed(2)
}
