let recipes =
    JSON.parse(localStorage.getItem("recipes")) || [];

function displayRecipes() {

    let recipeList =
        document.getElementById("recipeList");

    recipeList.innerHTML = "";

    recipes.forEach((recipe, index) => {

        let newRecipe =
            document.createElement("li");

        newRecipe.className = "recipe-card";

        let categoryColor = "";

        if (recipe.category === "Breakfast")
            categoryColor = "gold";
        else if (recipe.category === "Lunch")
            categoryColor = "lightgreen";
        else if (recipe.category === "Dinner")
            categoryColor = "lightblue";
        else if (recipe.category === "Dessert")
            categoryColor = "pink";
        else if (recipe.category === "Snack")
            categoryColor = "blue";
        else if (recipe.category === "Appetizer")
            categoryColor = "violet";

        newRecipe.style.borderLeft =
            "10px solid " + categoryColor;

        let ingredientList =
            recipe.ingredients
                .split("\n")
                .map(item =>
                    "<li>" + item + "</li>")
                .join("");

        let instructionList =
            recipe.instructions
                .split("\n")
                .map(item =>
                    "<li>" + item + "</li>")
                .join("");

        newRecipe.innerHTML =
            "<h3>" + recipe.name + "</h3>" +

            "<p><strong>Category:</strong> " +
            recipe.category + "</p>" +

            "<strong>Ingredients:</strong>" +
            "<ul>" + ingredientList + "</ul>" +

            "<strong>Instructions:</strong>" +
            "<ol>" + instructionList + "</ol>" +

            "<button onclick='deleteRecipe(" +
            index +
            ")'>Delete Recipe</button>";

        recipeList.appendChild(newRecipe);
    });
}

function addRecipe() {

    let recipeCategory =
        document.getElementById("recipeCategory").value; 

    let recipeName =
        document.getElementById("recipeName").value;

    let recipeIngredients =
        document.getElementById("recipeIngredients").value;

    let recipeInstructions =
        document.getElementById("recipeInstructions").value;

if (
        recipeName.trim() ==="" ||
     recipeIngredients.trim() ==="" ||
        recipeInstructions.trim() ==="" 
) {
    alert("Please complete all fields.");
    return;
} 
    let recipe = {
        name: recipeName, 
        ingredients: recipeIngredients, 
        instructions: recipeInstructions,
        category: recipeCategory
};

    recipes.push(recipe);

    localStorage.setItem(
        "recipes",
        JSON.stringify (recipes)
    );
    
       displayRecipes();

    document.getElementById("recipeName").value = "";
    document.getElementById("recipeIngredients").value = "";
    document.getElementById("recipeInstructions").value = "";
    document.getElementById("recipeCategory").selectedIndex = 0;
}

function deleteRecipe(index) {
    recipes.splice(index, 1);

    localStorage.setItem(
        "recipes",
        JSON.stringify(recipes)
    );
    displayRecipes();

}

function searchRecipes() {

    let searchValue =
        document.getElementById("searchBox")
        .value
        .toLowerCase();

    let recipeCards =
        document.querySelectorAll("#recipeList li");

    recipeCards.forEach(recipe => {

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

displayRecipes();
