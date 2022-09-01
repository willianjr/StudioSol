// Componente number é responsável por exibir o display de sete seguimentos representando o número
// number: o número a ser exibido
// success: booleano de status se o palpite estár correto ou não
// error: booleano de status se houve um erro ao realizar consulta da api

export default (number = 0, success = false, error = false) => {
  //O display foi criado por elemento de SVG
  const createSVGElement = (qn) => document.createElementNS('http://www.w3.org/2000/svg', qn)
  const Number = document.createElement('div')
  Number.setAttribute('id', 'DisplayNumber')

  //O número fornecido é transformado em um array de números individuais
  // 999 => [9,9,9] : criando um map para repetir o proprio elemento formatando o número necessário
  // Cada seguimento foi representado por letras de A-G
  const numberHtml = number
    .toString()
    .split('')
    .map((splitNumber) => {
      const SVG = createSVGElement('svg')
      SVG.classList.add(`number-${splitNumber}`)
      SVG.setAttribute('height', '100%')
      SVG.setAttribute('viewBox', '0 0 100 100')
      SVG.setAttribute('preserveAspectRatio', 'xMidYMid meet')
      const GP = createSVGElement('g')
      GP.setAttribute('transform', 'translate(25,0)')
      const A = createSVGElement('path')
      A.setAttribute('d', 'M10,8L14,4L42,4L46,8L42,12L14,12L10,8z')
      const B = createSVGElement('path')
      B.setAttribute('d', 'M8,10L12,14L12,42L8,46L4,42L4,14L8,10z')
      const C = createSVGElement('path')
      C.setAttribute('d', 'M48,10L52,14L52,42L48,46L44,42L44,14L48,10z')
      const D = createSVGElement('path')
      D.setAttribute('d', 'M10,48L14,44L42,44L46,48L42,52L14,52L10,48z')
      const E = createSVGElement('path')
      E.setAttribute('d', 'M8,50L12,54L12,82L8,86L4,82L4,54L8,50z')
      const F = createSVGElement('path')
      F.setAttribute('d', 'M48,50L52,54L52,82L48,86L44,82L44,54L48,50z')
      const G = createSVGElement('path')
      G.setAttribute('d', 'M10,88L14,84L42,84L46,88L42,92L14,92L10,88z')

      //Condicionamento para atribuir classes de acordo com o status de success ou error
      //No arquivo de _style.scss faz a formatação
      A.classList.add(`${success ? 'success' : 'x'}`, `${error ? 'error' : 'y'}`)
      B.classList.add(`${success ? 'success' : 'x'}`, `${error ? 'error' : 'y'}`)
      C.classList.add(`${success ? 'success' : 'x'}`, `${error ? 'error' : 'y'}`)
      D.classList.add(`${success ? 'success' : 'x'}`, `${error ? 'error' : 'y'}`)
      E.classList.add(`${success ? 'success' : 'x'}`, `${error ? 'error' : 'y'}`)
      F.classList.add(`${success ? 'success' : 'x'}`, `${error ? 'error' : 'y'}`)
      G.classList.add(`${success ? 'success' : 'x'}`, `${error ? 'error' : 'y'}`)

      GP.appendChild(A)
      GP.appendChild(B)
      GP.appendChild(C)
      GP.appendChild(D)
      GP.appendChild(E)
      GP.appendChild(F)
      GP.appendChild(G)
      SVG.appendChild(GP)

      Number.appendChild(SVG)
    })

  Number.classList.add(`number-${number}`)
  return Number
}
