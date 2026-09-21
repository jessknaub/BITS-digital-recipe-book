function addRecipe() {

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
