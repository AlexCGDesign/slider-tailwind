const slider = document.querySelector("#slider");
const childsSlider = [...slider.querySelectorAll("figure")];
const nextButton = document.querySelector("[data-button='next']");
const prevButton = document.querySelector("[data-button='prev']");
const lengthImages = childsSlider.length;


childsSlider.forEach(function(child, index){
    child.dataset.idSlider = index;
});



nextButton.addEventListener("click", function(e){

    const currentImage = getCurrentImage();
    let currentActiveIndex = currentImage.dataset.idSlider;
    currentActiveIndex++;
 
    if(currentActiveIndex >= lengthImages){

        currentActiveIndex = 0;

    }

    const newActiveElement = childsSlider[currentActiveIndex];

    removeActiveElement();
    addNewActiveElement(newActiveElement);

});

prevButton.addEventListener("click", function(e){

    const currentImage = getCurrentImage();
    let currentActiveIndex = currentImage.dataset.idSlider;
    currentActiveIndex--;
    
    
    if(currentActiveIndex < 0){

        currentActiveIndex = lengthImages-1;

    }

    const newActiveElement = childsSlider[currentActiveIndex];

    removeActiveElement();
    addNewActiveElement(newActiveElement);

});


// obtener el elemento activo
function getCurrentImage(){
    const currentImage = slider.querySelector("[data-active]");

    return currentImage;
}

// eliminar el elemento actual con data active
function removeActiveElement(){
    const currentImage = getCurrentImage();
    currentImage.removeAttribute("data-active");
}

// Agregar dataactive a un elemento
function addNewActiveElement(element){
    element.setAttribute("data-active", "");
}