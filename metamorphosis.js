initDragAndDrop();

function initDragAndDrop() {
    shuffleCards();
    setDraggable(document.querySelectorAll('.card'));
    setDragStartAndDragEnd(document.querySelectorAll('.card'));

    // Initialize drag & drop elements here

}

function shuffleCards() {
    let mixedCardsContainer = document.querySelector(".mixed-cards");
    for (let i = mixedCardsContainer.children.length; i >= 0; i--) {
        mixedCardsContainer.appendChild(mixedCardsContainer.children[Math.random() * i | 0]);
    }
}

function setDraggable(list){
    /*list.forEach(function(el){
        el.setAttribute("draggable", "true");
    })*/
    for(let i = 0; i < list.length; i++){
        list[i].setAttribute("draggable", true);
    }
}
function setDragStartAndDragEnd(list){
    list.forEach(function(el){
        el.addEventListener("dragstart", onDragStartHandler);
        el.addEventListener("dragend", onDragEndHandler);
    })
}

function onDragStartHandler(event){
    //console.debug(event.currentTarget+" "+event.target);
    event.target.classList.add('card-dragged');
    togleActive();
}

function onDragEndHandler(event){
    //console.debug(event.currentTarget+" "+event.target);
    event.target.classList.remove('card-dragged');
    togleActive(false);
}

function togleActive(switchOn=true){
    //document.querySelectorAll('.metamorphosis-slots > div')
    //document.querySelectorAll('.metamorphosis-slots > div.card-slot')
    //document.querySelectorAll('div.metamorphosis-slots > div.card-slot')
    //document.querySelectorAll('.card-slot')
    let list = document.querySelectorAll('.card-slot');
    if(switchOn){
        list.forEach(function(el){
            el.classList.add('card-slot-active');
        })
    } else {
        list.forEach(function(el){
            el.classList.remove('card-slot-active');
        })
    }
}
/*

function setDragEnterAndLeave(list){
    list.forEach(function(el){
        el.addEventListener("dragenter", onDragEnterHandler);
        el.addEventListener("dragleave", onDragLeaveHandler);
    })
}

function onDragEnterHandler(event){

}

function onDragLeaveHandler(event){

}*/
