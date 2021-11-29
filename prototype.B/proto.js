// declaration des variables 
var btn;
var Sortie;
var Nombre;
var nombreDeviner;
var attempt;

 // entrer: saiser 
 btn = document.getElementById('btn');
 output = document.getElementById('Sortie');
 Nombre = Math.floor(Math.random() * 100);
 attempt =10;
 // traitement 

btn.addEventListener('click', function(){
  attempt =attempt -1 ;//attempt--
  nombreDeviner = document.getElementById('Enter').value;
  if (nombreDeviner == Nombre){
    output.innerHTML = 'Bravo votre nombre est correct'
  } else{
    if (nombreDeviner < Nombre){
        output.innerHTML = "votre nombre est plus petit"
    }
    else {
      output.innerHTML = "votre nombre est plus grand"
    }

  } 

});