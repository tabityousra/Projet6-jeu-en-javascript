// declaration des variables//
var output;
var number;
var numberDeviner;
var btn;
//entrer:saiser
btn = document.getElementById('btn')
output = document.getElementById('outputnumber')
number = Math.floor(Math.random() *100);
// traitement //
function Enter(){
    
    numberDeviner = document.getElementById('userInput').value;
  
        if ( numberDeviner == number){
                output.innerHTML = 'Bravo, vous etes un Génie !!!'
                }

             else{
            if ( numberDeviner < number){
                output.innerHTML = "le nombre que vous avez choisir est plus petit"
            }
            else {
              output.innerHTML = "le nombre que vous avez choisir est plus grand"
            }

        }
       
    



};
