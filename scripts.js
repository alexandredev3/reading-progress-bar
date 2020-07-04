// >>> Help
function log(message) {
  return console.log('> ' + message);
};
// ---------------------------------------------------------------

//-------- Pegar o tamanho do texto --------
const postWrap = document.querySelector('.post-wrap');


//-------- Create a bar --------
let bar = document.createElement('div');

//-------- Style of bar --------
bar.style.height = '4px';
bar.style.width = '0px';
bar.style.background = '#6633cc';
bar.style.position = 'fixed';
bar.style.top = '0px';
bar.style.left = '0px';
bar.style.zIndex = '9999';
bar.style.transition = '200ms'

document.body.append(bar);
/*<=========================================================
  Nós precisamos adcionar o barra no elemento body, porque e ele que adiciona os
  elementos em tela.
  ==========================================================> */

// -------- Update bar --------

// -------- Check the scroll movement --------
function updateBar() {
  // --> Verificar o tamanho da caixa que contem o conteudo,para saber quando termina.
  const textHeight = postWrap.offsetHeight;
  // log(postWrap.offsetHeight);
  // offsetHeight: Ele vai mostrar a altura que eu tenho nesse postWrap.

  // --> Verficar em que posição da pagina o usuario está.
  const pagePositionY = window.pageYOffset;
  // log(window.pageYOffset);
  // window.pageYOffset Ele sempre vai me mostrar a posição atualizada da minha pagina quando eu dá scroll

  // --> Regra de 3
  const updatedBar = pagePositionY * 100 / textHeight;

  // log(updatedBar);
  bar.style.width = updatedBar + "%";
  //+ "%": Vai atualizar o "width" em formato de Porcentagel.
};

// Quando a janela estiver sendo carregada ela vai executar essa função.
window.addEventListener('load', () => {
  document.addEventListener('scroll', updateBar);
});