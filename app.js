window.onload = function getJSON (){
    fetch("https://swapi.co/api/films/?format=json").then(function(response){
        return response.json();
    }).then(function(movies){
        movies.results.forEach(element => {
            let createCard = document.createElement("div");
            createCard.setAttribute('class', 'card mb-1');
            createCard.setAttribute('onclick', 'openCardHeader(this)');

            let createCardHeader = document.createElement("div");
            createCardHeader.setAttribute('class', 'card-header d-flex justify-content-between');

            let createH4 = document.createElement("H4");
            createH4.innerHTML = element.title;

            createCardHeader.appendChild(createH4);
            createCard.appendChild(createCardHeader);
            document.getElementById("app").appendChild(createCard);

            let createCardBody = document.createElement("div");
            createCardBody.style.display = 'none';
            createCardBody.setAttribute('class', 'card-body');
            createCard.appendChild(createCardBody);

            element.characters.forEach(characters => {
                fetch(characters).then(function(response){
                    return response.json();
                }).then(function(character){
                    let cardText = document.createElement("H6");
                    cardText.innerHTML = character.name;
                    createCardBody.appendChild(cardText);
                })
            });
        });
    })
}

function openCardHeader(myDiv) {
    isOpen = myDiv.childNodes[1].style.display != 'none' ? true : false;

    if(isOpen) {
        myDiv.childNodes[1].style.display = 'none';
    } else myDiv.childNodes[1].style.display = 'block';
}