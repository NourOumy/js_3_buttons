// <!-- 1. Créez 3 boutons (<button>)
//     2. Quand on clique sur un bouton, lui ajouter une classe "active"
//     3. Quand on re-clique sur le même bouton, lui enlever sa classe "active"
//     4. Quand on clique sur un autre bouton que celui qui a déjà la classe "active", enlever la classe "active" sur le bouton qui l'a déjà et l'ajouter sur le bouton en cours
//     5. Il ne peut donc n'y avoir qu'une seule classe active à chaque fois (et pas 2 ou 3) --></button>

let buttons = document.querySelectorAll('button')

buttons.forEach(function(button){
    
button.addEventListener("click", function(){
    if(button.classList.contains("active")){
        button.classList.remove('active')
    }else{
        button.classList.add('active')
    }
})

})