function addRecipe() {

    let recipeName =
        document.getElementById("recipeName").value;

    let imageInput =
        document.getElementById("recipeImage");

    let recipeList =
        document.getElementById("recipeList");

    let newRecipe =
        document.createElement("li");

    if (imageInput.files.length > 0) {

        let imageURL =
            URL.createObjectURL(imageInput.files[0]);

        newRecipe.innerHTML =
        `
        <h3>${recipeName}</h3>
        ${imageURL}
        `;

    } else {

        newRecipe.innerHTML =
        `
        <h3>${recipeName}</h3>
        default-recipe.jpg
        `;
    }

    recipeList.appendChild(newRecipe);

    document.getElementById("recipeName").value = "";
    imageInput.value = "";
}