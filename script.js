function addRecipe() {

    let recipeCategory =
        document.getElementById("recipeCategory").value; 

    let recipeName =
        document.getElementById("recipeName").value;

    let recipeIngredients =
        document.getElementById("recipeIngredients").value;

    let recipeInstructions =
        document.getElementById("recipeInstructions").value;

    let recipeList =
        document.getElementById("recipeList");

    let newRecipe = 
        document.createElement("li");
    
    newRecipe.className = "recipe-card";
    
    // ADD THE COLOR CODE HERE
    let categoryColor = "";

    if (recipeCategory === "Breakfast")
        categoryColor = "gold";

    else if (recipeCategory === "Lunch")
        categoryColor = "lightgreen";

    else if (recipeCategory === "Dinner")
        categoryColor = "lightblue";

    else if (recipeCategory === "Dessert")
        categoryColor = "pink";

    else if (recipeCategory === "Snack")
        categoryColor = "blue";

    else if (recipeCategory === "Appetizer")
        categoryColor = "violet";

    newRecipe.style.borderLeft =
    "10px solid " + categoryColor;

    let ingredientList =
        recipeIngredients
        .split("\n")
        .map(item => "<li>" + item + "</li>")
        .join("");

    let instructionList =
        recipeInstructions
        .split("\n")
        .map(item => "<li>" + item + "</li>")
        .join("");

    newRecipe.innerHTML =
        "<h3>" + recipeName + "</h3>" +
        "<p><strong>Category:</strong> " + recipeCategory + "</p>" +
        "<strong>Ingredients:</strong>" +
        "<ul>" + ingredientList + "</ul>"+
        "<strong>Instructions:</strong>" +
        "<ol>" + instructionList + "</ol>" +
        "<button onclick='deleteRecipe(this)'>Delete Recipe</button>";

    recipeList.appendChild(newRecipe);

    document.getElementById("recipeName").value = "";
    document.getElementById("recipeIngredients").value = "";
    document.getElementById("recipeInstructions").value = "";
}

function deleteRecipe(button) {
    button.parentElement.remove();
}

function searchRecipes() {
    let searchValue =
        document.getElementById("searchBox")
        .value
        .toLowerCase();

    let recipes =
        document.querySelectorAll("#recipeList li");

    recipes.forEach(recipe => {
        if (
            recipe.textContent
            .toLowerCase()
            .includes(searchValue)
        ) {
            recipe.style.display = "";
        } else {
            recipe.style.display = "none";
        }
    });
}



