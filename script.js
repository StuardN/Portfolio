let menuVisible= false;
//Función que oculta o muestra el menu
//En resumen, esta función alterna entre la visualización
// y la ocultación de un menú en la página web
// y utiliza la variable "menuVisible" para controlar el estado actual del menú.
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculta el munu una vez que se selecionó la opcion
    //En resumen, la función seleccionar() se utiliza para ocultar el menú de navegación//
    // después de que se ha seleccionado una opción y establecer
    // la variable menuVisible en false para indicar que el menú está oculto.
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//En resumen, este código controla la visibilidad del menú de navegación en una página web y permite mostrar u ocultar el menú según sea necesario.



//Funcion que aplica las animaciones de las habilidades

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("bootstrap");
        habilidades[4].classList.add("django");
        habilidades[5].classList.add("BBDD");
    }
}

window.onscroll = function(){
    efectoHabilidades();
} 