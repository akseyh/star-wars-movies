window.onload = function getJSON (){
    fetch("https://swapi.co/api/films/?format=json").then(function(response){
        return response.json();
    }).then(function(movies){
        movies.results.forEach(element => {
            let createCard = document.createElement("div");
            createCard.setAttribute('class','card mb-4');
            let createCardHeader = document.createElement("div");
            createCardHeader.setAttribute('class','card-header d-flex justify-content-between');
            let createH4 = document.createElement("H4");
            createH4.innerHTML = element.title;
            createCardHeader.appendChild(createH4);
            createCard.appendChild(createCardHeader);
            document.getElementById("app").appendChild(createCard);

            let createCardBody = document.createElement("div");
            createCardBody.setAttribute('visibility','hidden');
            createCardBody.setAttribute('class','card-body');
            createCard.appendChild(createCardBody);

            element.characters.forEach(characters => {
                fetch(characters).then(function(response){
                    return response.json();
                }).then(function(character){
                    console.log(character);
                    let cardText = document.createElement("H6");
                    cardText.innerHTML = character.name;
                    createCardBody.appendChild(cardText);
                })
            });
        });
    })
} 