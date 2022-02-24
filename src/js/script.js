const calcula = document.querySelector('#calcular')

const imc = () => {
  // INPUTS
  const nome = document.querySelector('#fnome').value
  const altura = parseFloat(document.querySelector('#faltura').value)
  const peso = parseFloat(document.querySelector('#fpeso').value)

  // Calculo IMC, o valor 10 mil é para conseguir exibir o valor desejado
  const IMC = (peso / (altura * altura)) * 10000
  const exibirIMC = IMC.toFixed(1)
  let msg = ''

  if (IMC < 18.5) {
    msg = `seu IMC é ${exibirIMC} e de acordo com o IMC seu peso está abaixo do normal`
  } else if (IMC > 18.5 && IMC < 24.9) {
    msg = `seu IMC é ${exibirIMC} e de acordo com o IMC seu peso está normal`
  } else if (IMC > 24.9 && IMC < 30) {
    msg = `seu IMC é ${exibirIMC} e de acordo com o IMC seu peso está acima do normal`
  } else if (IMC > 30) {
    msg = `seu IMC é ${exibirIMC} e de acordo com o IMC seu peso está muito acima do normal`
  }

  const visualiza = (document.querySelector(
    '#resultado'
  ).innerHTML = `${nome} ${msg}`)
}
