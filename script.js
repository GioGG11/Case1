// fetch('https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=a09675119b4846298ec84a1fedd5f4a6')
// .then((response) => response.json())
// .then((data) => {
//     let recipeArea = document.querySelector(".recipeTitle");
//     let titleElement= document.createElement('p');
//     let titleText = document.createTextNode(`${data.title}`);
//     titleElement.appendChild(titleText);
//     recipeArea.appendChild(titleElement);
// })
// ABOVE IS A EXAMPLE OF HOW I GOT THE DATA FROM THE API


////// Search Page SCRIPTS ////////
const recipeCardTemplate = document.querySelector("[data-recipe-template");
const recipeCardcontainer = document.querySelector("[data-recipe-card-container");
const searchInput = document.querySelector("[data-search");
const apiKey = '&apiKey=a09675119b4846298ec84a1fedd5f4a6';
const randomURL ='https://api.spoonacular.com/recipes/random?number=10'
const searchURL = "https://api.spoonacular.com/recipes/complexSearch?number=10"

renderRandomResults();

searchInput.addEventListener('search', (e) =>{
    removeResults();
    const value = e.target.value.toLowerCase();
    if(value === ""){
        renderRandomResults();
    }else{
        fetch(searchURL+'&query='+value)
            .then(res => res.json())
            .then(data =>{
                for(const item of data.results) {
                    const card = recipeCardTemplate.content.cloneNode(true).children[0];
                    const photo = card.querySelector("[data-photo]");
                    const name = card.querySelector("[data-name]");
                    photo.src= item.image;
                    name.textContent = item.title;
                    recipeCardcontainer.append(card);
                };
            })
    }
    
})

function removeResults(){
    while(recipeCardcontainer.hasChildNodes()){
         recipeCardcontainer.removeChild(recipeCardcontainer.firstChild);
    }
}

function renderRandomResults(){
    fetch(randomURL)
        .then(res =>res.json())
        .then(data =>{
            for(const item of data.recipes) {
                const card = recipeCardTemplate.content.cloneNode(true).children[0];
                const photo = card.querySelector("[data-photo]");
                const name = card.querySelector("[data-name]");
                photo.src= item.image;
                name.textContent = item.title;
                recipeCardcontainer.append(card);
            };
        })
}
////SEARCH PAGE SCRIPT END///
