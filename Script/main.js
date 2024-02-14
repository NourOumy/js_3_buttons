// <!-- 1. Créez 3 boutons (<button>) SANS FOREACH
//     2. Quand on clique sur un bouton, lui ajouter une classe "active"
//     3. Quand on re-clique sur le même bouton, lui enlever sa classe "active"
//     4. Quand on clique sur un autre bouton que celui qui a déjà la classe "active", enlever la classe "active" sur le bouton qui l'a déjà et l'ajouter sur le bouton en cours
//     5. Il ne peut donc n'y avoir qu'une seule classe active à chaque fois (et pas 2 ou 3) --></button>

// buttons.forEach(function(button){
    
// button.addEventListener("click", function(){
//     if(button.classList.contains("active")){
//         button.classList.remove('active')
//     }else{
//         button.classList.add('active')
//     }
// })

// })



let wrapper = document.querySelector('.wrapper')



// pour cibler les freres remonter sur le parent avec parentelement 

wrapper.addEventListener("click", function(e){
  // vérifier si l'élément sur lequel on click c'estt bien celui qui nous intéresse
    if(e.target.classList.contains('button')){
        // on vérifie si l'élément clické a la classe active, on le retire. si on met rien dans le if, c'estt d'office true
      if(e.target.classList.contains('active')){
        // si la réponse est true :
        // toggle enlève si elle est là, met si elle n'est pas là
        e.target.classList.toggle('active')
        // si l'élément clické n'a pas la classe active, on l'ajoute'
      } else {
        
      //  maintenant, on doit vérifier si un autre enfant a la classe Active, on doit le retirer
        // Si le parent (wrapper) a un autre enfant (qque celui sur lequel je click) qui a la classe active ... 
        if(wrapper.querySelector('.active')){
          wrapper.querySelector('.active').classList.remove('active')
            e.target.classList.add('active')
          
        // Si le parent (wrapper) n'a pas la classe active sur un des enfants on l'ajoutte sur le bttn clické
        } else {
            e.target.classList.toggle('active')
        }
    }
    }
})

