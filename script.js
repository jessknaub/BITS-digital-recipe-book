function addRecipe() {

    let recipeName =
        document.getElementById("recipeName").value;

    let recipeIngredients =
        document.getElementById("recipeIngredients").value;

    let recipeInstructions =
        document.getElementById("recipeInstructions").value;

    let recipeList =
        document.getElementById("recipeList");

    newRecipe.className = "recipe-card";
    
    newRecipe.innerHTML =
        "<h3>" + recipeName + "</h3>" +
        "<strong>Ingredients:</strong>" +
        "<p>" + recipeIngredients + "</p>" +
        "<strong>Instructions:</strong>" +
        "<p>" + recipeInstructions + "</p>" +
        "<button onclick='deleteRecipe(this)'>Delete Recipe</button>";

    recipeList.appendChild(newRecipe);

    document.getElementById("recipeName").value = "";
    document.getElementById("recipeIngredients").value = "";
    document.getElementById("recipeInstructions").value = "";
}
function deleteRecipe(button) {
    button.parentElement.remove();
}
localStorage.setItem("recipes", JSON.stringify(recipes));
JSON.parse(localStorage.getItem("recipes"));

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

let recipeCategory =
    document.getElementById("recipeCategory").value;

"<p><strong>Category:</strong> " +
recipeCategory +
"</p>"


