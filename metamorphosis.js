initDragAndDrop();

function initDragAndDrop() {
    shuffleCards();
    setDraggable(document.querySelectorAll('.card'));

    // Initialize drag & drop elements here

}

function shuffleCards() {
    let mixedCardsContainer = document.querySelector(".mixed-cards");
    for (let i = mixedCardsContainer.children.length; i >= 0; i--) {
        mixedCardsContainer.appendChild(mixedCardsContainer.children[Math.random() * i | 0]);
    }
}

function setDraggable(list){
    list.forEach(function(el){
        el.setAttribute("draggable", "true");
    })
}
