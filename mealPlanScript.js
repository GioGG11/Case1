let currentDate = new Date();
let tomorrow = new Date(currentDate);
tomorrow.setDate(currentDate.getDate()+1);
let yesterday = new Date(currentDate);
yesterday.setDate(currentDate.getDate()-1);

const mealTemplate = document.querySelector("[meal-template]");
const breakfastSec = document.querySelector("#bfast");
const lunchSec = document.querySelector("#lunch");
const dinnerSec = document.querySelector("#dinner");
const snackSec = document.querySelector("#snack");

let allMeals=[];

var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const form = document.querySelector(".mealPlanForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
form.addEventListener('submit', (e)=>{
   let newMealItem = {
    date: currentDate.toDateString(),
    name: document.getElementById('formMealName').value,
    mealType: document.getElementById('formMealType').value,
    calories: document.getElementById('formCalories').value,
    showing:false
   }
   allMeals.push(newMealItem);
   document.getElementById('formMealName').value = "";
   document.getElementById('formMealType').value = "";
   document.getElementById('formCalories').value = "";
   renderMealPlan(allMeals);
})

function renderMealPlan(allMeals){
    for(const item of allMeals){
        const card = mealTemplate.content.cloneNode(true).children[0];
        const calories = card.querySelector(".mealCalories");
        const name = card.querySelector(".mealName");
        name.textContent = item.name;
        calories.textContent = "Calories: "+ item.calories;
        if(item.showing == true){
            
        }else if(item.mealType==="breakfast"){
            breakfastSec.append(card);
            item.showing = true;
        }else if(item.mealType==="lunch"){
            lunchSec.append(card);
            item.showing = true;
        }else if(item.mealType==="dinner"){
            dinnerSec.append(card);
            item.showing = true;
        }else if(item.mealType==="snack"){
            snackSec.append(card);
            item.showing = true;
        }
    }
}

