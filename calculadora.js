function insert (num){
    document.getElementById('result').textContent += num;
}
function reset(){
    document.getElementById('result').textContent ='';
}
function resultado (){
  let valor = document.getElementById('result').textContent;
  if (valor){
    document.getElementById('result').textContent = eval(valor);
  }else{
    document.getElementById('result').textContent = 'error...';
  }
}
function voltar(){
    let resultado = document.getElementById('result').textContent;
    document.getElementById('result').textContent = resultado.substring(0,resultado.length -1);
}
//importante é que deu certo (: