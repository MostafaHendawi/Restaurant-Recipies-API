let row = document.querySelector(".row");
let myHttp = new XMLHttpRequest();
let recipeChoise = document.querySelector("select");
let userInput= document.querySelector("#userInput")



function getData(data) {
  myHttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${data}`);
  myHttp.send();
  myHttp.addEventListener("readystatechange", function () {
    if (myHttp.readyState == 4) {
      let mydata = JSON.parse(myHttp.response);
      showData(mydata.recipes);
    }
  });
}
getData("pizza");



recipeChoise.addEventListener("change", function () {
  userInput.value = "";
  getData(recipeChoise.value);
});




userInput.addEventListener("blur", function () {
  getData(userInput.value);
});


function showData(list) {
  let cartona = "";
  for (let i = 0; i < list.length; i++) {
    cartona += `
   <div class=" col-md-4 p-1">
  <img class="w-100 mb-2" src="${list[i].image_url}" alt="">
  <p>  <b>Title: </b>${list[i].title}</p>
 <p>  <b>Recipe Id: </b>${list[i].recipe_id}</p>
</div>
        `;
  }
  row.innerHTML = cartona;
}
