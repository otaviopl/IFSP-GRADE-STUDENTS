let table = document.createElement('table');
let thead = document.createElement('thead');    
let tbody = document.createElement('tbody');










function aparecer() 
{
  document.getElementById("botoes_ocultos").style.display = "block"
  document.getElementById('tbl').style.display = "block"
  let variavel_aluno = document.getElementById("controle")
  let i =0;
  valor= variavel_aluno.value
  console.log(valor)
  if(valor<0)
  {
    alert("digite um numero valido!!")
  }
  for (i;i<valor;i++)
  {
    adicionaLinha()
  }
 

  calcular()
  
}

// excluindo de forma genial
function remover_pior_media()
{
  
  let medias = document.getElementsByClassName('media')
  
  console.log(medias)
  let aux = medias[0]
  let pst = 0
  
  for(let i=0;i<medias.length;i++)
  {
    console.log(medias.innerHTML)
    if(medias[i].innerHTML < aux)
    {
      aux = medias[i].innerHTML
      pst = i
      
      
    }


  }
  console.log(aux)
  console.log(pst)
  
  let item_remove=document.getElementsByClassName("aluno")[pst]
  console.log(item_remove)
  item_remove.remove()

}





function gerarNumeroAleatorio() 

{
  let n = (Math.random()* 10 ) 
  
  if(n > 10) 
  {
    return 10;
  }
    n=n.toFixed(2) 
    return n;
  

}











//funcao tabela
function adicionaLinha(tabela) {

  var tabela = document.getElementById('tbl')
  var numeroLinhas = tabela.rows.length
  var linha = tabela.insertRow(numeroLinhas)
  linha.classList.add("aluno")
  var celula1 = linha.insertCell(0)
  var celula2 = linha.insertCell(1)
  var celula3 = linha.insertCell(2)
  var celula4 = linha.insertCell(3)
  var celula5 = linha.insertCell(4)
  var celula6 = linha.insertCell(5)
  celula1.innerHTML = `aluno ${numeroLinhas}`; 
  celula1.classList.add("nome")
  celula2.innerHTML =  gerarNumeroAleatorio(); 
  celula2.classList.add("nota1")
  celula3.innerHTML =  gerarNumeroAleatorio();
  celula3.classList.add("nota2")
  celula4.innerHTML = gerarNumeroAleatorio();
  celula4.classList.add("nota3")
  celula5.innerHTML = 'média'
  celula5.classList.add("media")
  celula6.innerHTML = 'resultado'
  celula6.classList.add("resultado")

  calcular()
  
}

// funcao remove uma linha da tabela
function apagar()
{
  let trs= document.getElementsByClassName('aluno')
  

  
  let guizinho = trs[trs.length-1]
  
  guizinho.remove()
  
  
 
}


function calcular()
{

  var alunos = document.querySelectorAll('.aluno')

for (i = 0; i < alunos.length; i++) {
  var aluno = alunos[i]

  var tdnota1 = aluno.querySelector('.nota1')
  var tdnota2 = aluno.querySelector('.nota2')
  var tdnota3 = aluno.querySelector('.nota3')
  
  var tdmedia = aluno.querySelector('.media')
  var tdsituacao = aluno.querySelector('.resultado')

  var nota1 = parseFloat(tdnota1.textContent)

  var nota2 = parseFloat(tdnota2.textContent)

  var nota3 = parseFloat(tdnota3.textContent)
  
  //atualizando cores
//nota1
  if(nota1>6)
  {
    tdnota1.style.color = 'green'
  }
  else if (nota1 >4)
  {
    tdnota1.style.color = "blue"
  }
  else{
    tdnota1.style.color = "red"
  }
  //nota2
  if(nota2>6)
  {
    tdnota2.style.color = 'green'
  }
  else if (nota2 >4)
  {
    tdnota2.style.color = "blue"
  }
  else{
    tdnota2.style.color = "red"
  }
  //nota3
  if(nota3>6)
  {
    tdnota3.style.color = 'green'
  }
  else if (nota3 >4)
  [
    tdnota3.style.color = 'blue'
  ]
  else
  {
    tdnota3.style.color = 'red'
  }

resultadoMedia = (nota1+nota2+nota3)/3
resultadoMedia = resultadoMedia.toFixed(2) 

  if (resultadoMedia >=6) {
    tdmedia.textContent = resultadoMedia
    tdsituacao.textContent = 'Aprovado'
   
    tdsituacao.style.color = 'green'
  } else if(4<=resultadoMedia)
  {
    tdmedia.textContent = resultadoMedia
    tdsituacao.textContent = "Recuperação"
    tdsituacao.style.color = "blue"

  }else{
    tdmedia.textContent = resultadoMedia
    tdsituacao.textContent = "Reprovado" 
    tdsituacao.style.color = "red"
  }
}
}




