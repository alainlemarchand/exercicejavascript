function divideThem(){
    var numberOne= document.getElementById('numberOne').value;
    var numberTwo=document.getElementById('numberTwo').value;
    alert(numberOne % numberTwo);
    var result=(numberOne % numberTwo);
    return (result);
}

function displayAlert(){
   var myResult = divideThem();
   alert(myResult);

}

/* .js de l'exercice 6*/

function sendData() {
    var shoeSize = document.getElementById('shoeSize').value;
    var birthDate = document.getElementById('birthDate').value;
    var result = (((((shoeSize *2) +5) *50) - birthDate) +1769);
    alert ('le résultat est :' + result);
}
    
/*;js de l'exercice 7 */

          function verif(){
          var age = document.getElementById("age").value;
            if(age >= 18){
                alert("Vous êtes majeur");
            }
            else{
                alert("Vous êtes mineur");
            }
        }

/* .js de l'exercice 1 partie 2 */

function firstImage(){
    document.getElementById('img1').src="assets/image/sea.jpg";

}

function secondImage() {
        document.getElementById('img1').src="assets/image/seapeople.jpg";
    }
  
/* .js de l'exercice2 partie 2 */

function displayText(){

    var message=document.getElementById('name').value;
    alert(message);
}



/* .js de l'exercice 3 partie 2 JS */


/*var num=0
function changer() {
if (num == 0) {
num = 1;
document.image.src = "assets/image/seapeople.jpg";// grande image
document.image.width = 800;
document.image.height = 400;
}
else {
num = 0;
document.image.src = "assets/image/seapeople.jpg";// petite image
document.image.width = 400;
document.image.height = 200;
}
}
*/

function zoom(zoomType){


    var imageWidth= document.getElementById("imageSeapeople").clientWidth;
    if (zoomType == 'plus'){
     document.getElementById("imageSeapeople").style.width=(imageWidth + 20) + "px";
     }
    if (zoomType == 'moins'){
     document.getElementById("imageSeapeople").style.width=(imageWidth - 20) + "px";   
    }
    


}