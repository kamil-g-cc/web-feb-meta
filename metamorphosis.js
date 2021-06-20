initDragAndDrop();

function initDragAndDrop() {
    shuffleCards();
    setDraggable(document.querySelectorAll('.card'));
    setDragStartAndDragEnd(document.querySelectorAll('.card'));
    setDragEnterAndLeave(document.querySelectorAll('.card-slot'));
    setDropAndDragOver(document.querySelectorAll('.card-slot'));
    setIdsBasedOnSrc(document.querySelectorAll('div.card > img'));
    // Initialize drag & drop elements here

}

function setIdsBasedOnSrc(list){
    list.forEach(function(el){
        el.id = el.src;
    })
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
    event.dataTransfer.setData('plain/text', event.target.firstElementChild.id);

    /*event.dataTransfer.setData('application/json', JSON.stringify({
        id: event.target.firstElementChild.id,
        name: 'obrazek',
        extraInfo: 13
    }));*/
    togleActive();
}

function onDragEndHandler(event){
    //console.debug(event.currentTarget+" "+event.target);
    event.target.classList.remove('card-dragged');
    togleActive(false);
}

/*function turnOnActive(){
    let list = document.querySelectorAll('.card-slot');
    list.forEach(function(el){
        el.classList.add('card-slot-active');
    })
}

function turnOffActive(){
    let list = document.querySelectorAll('.card-slot');
    list.forEach(function(el){
        el.classList.remove('card-slot-active');
    })
}*/

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


function setDragEnterAndLeave(list){
    list.forEach(function(el){
        el.addEventListener("dragenter", onDragEnterHandler);
        el.addEventListener("dragleave", onDragLeaveHandler);
    })
}

function setDropAndDragOver(list){
    list.forEach(function(el){
        el.addEventListener("drop", onDropHandler);
        el.addEventListener("dragover", onDragOverHandler);
    })
}
function onDragEnterHandler(event){
    //console.debug("enter " + event.target.className+" / "+event.currentTarget.className);
    event.target.classList.add('card-slot-over');
}

function onDragLeaveHandler(event){
    //console.debug("leave " + event.target.className+" / "+event.currentTarget.className);
    event.target.classList.remove('card-slot-over');
}

function onDragOverHandler(event){
    event.preventDefault();
}

function onDropHandler(event){
    console.debug(event.dataTransfer.getData('plain/text'));
    //let test = JSON.parse(event.dataTransfer.getData('application/json'));
}
