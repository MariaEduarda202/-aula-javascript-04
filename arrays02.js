 /*1) Criar um array com valores numéricos:  25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56.
a) Coloque eles em ordem crescente.
b) Exibir no Console.
*/
 var numeros = [25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56.]
 numeros.sort ();
 console.log (numeros);

 //2)      Dado um array com os times: Santos, Sport, Santa Cruz, Vasco, Chapecó.
  var times = [ "Santos", "Sport", "Santa cruz", "Vasco", "Chapecó"]
  times.push ("Flamengo")
  console.log (times)
  var ultimaPosicao= times.shift ()
  console.log (ultimaPosicao)
  times.unshift ("Palmeiras")
  console.log (times)
  times.push ("Gremio")
  console.log (times)
  times.unshift ("São Paulo")
  console.log(times)
  var ultimaPosicao1 = times.pop ()
  console.log(ultimaPosicao1)
  
  //3)Criar um array contendo 7 atividades que você faz durante o dia.
  var atividadeDoDia =  ['Acordar', 'Da banho na bebê','tomar café da manhã', 'amamentar','tomar banho', 'brincar com a bebê', 'mexer no celular' ] 
  var atividadeDoDia1= (atividadeDoDia.length -1)
  var atividadeDoDia2= (atividadeDoDia.length -4)
  console.log (atividadeDoDia1)
  console.log (atividadeDoDia2)
  console.log (atividadeDoDia.reverse())
  var atividadeExtra = ['Escutar música','Ler']
   var atividadeDoDiaExtra = atividadeDoDia.concat(atividadeExtra)
  console.log (atividadeDoDiaExtra)
  console.log (atividadeDoDiaExtra.join (' - '))
  //4)Criar um array com o nome de 5 cidades.
  var cidades= ['Recife', 'Caruaru','Bezerros','Bonito','Jaboatão Dos Guararapes'];

   console.log (cidades)
   console.log (cidades.shift(-5))
   console.log (cidades.pop (  ))

