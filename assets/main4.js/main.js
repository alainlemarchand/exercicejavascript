/*
let appearFirst = document.getElementById("appearFirst");
let appearSecond = document.getElementById ("appearSecond")
let appearThird = document.getElementById
("appearThird")

appearFirst.addEventListener("mouseover",()=>{
    appearFirst.style.display ="block";});

    appearFirst.addEventListener("mouseout",() =>{appearFirst.style.display="none";});


    appearSecond.onmouseover = aff;
function aff(){
  appearSecond.style.display = "block";
}
appearSecond.onmouseout = cac;
function cac(){
  appearSecond.style.display = "none";
}
*/



//on crée une boucle  // Création des variables contenant les éléments à manipuler afin de nous empêcher d'avoir à tout retaper à chaque fois.
var appearFirst = document.getElementById('appearFirst');
var appearSecond = document.getElementById('appearSecond');
var appearThird = document.getElementById('appearThird');
// Création d'un tableau contenant toutes les variables ci-dessus pour faciliter leur utilisation future.
var appearTable = [appearFirst, appearSecond, appearThird];

// Pour chaque élément du tableau, je définis l'opacité à 0 au chargement de la page afin que mes éléments soient tous invisibles.
appearTable.forEach(element => {
    element.style.opacity = 0;
});

window.addEventListener('scroll',function () {

   var scrollValue = window.scrollY;
   console.log(scrollValue);

       if (scrollValue >500) {
        appearTable.forEach(element => {
        
        element.style.opacity = 1;
       });

        appearFirst.style.transition = 'opacity 1s';
        appearSecond.style.transition = 'opacity 0,5s';
        appearThird.style.transition ='opacity 2s 1s';
}
        else {
            appearTable.forEach(element => {
                   
                element.style.opacity=0;
        });

    }

})


