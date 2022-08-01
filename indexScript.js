const apiKey = '&apiKey=a09675119b4846298ec84a1fedd5f4a6';
fetch('https://api.spoonacular.com/recipes/random?number=1')
        .then(res =>res.json())
        .then(data =>{
            let recipeImg = document.querySelector('.luckyPhoto');
            recipeImg.src = data.recipes[0].image;
            document.querySelector("[data-name]").innerHTML = data.recipes[0].title;
               
        })