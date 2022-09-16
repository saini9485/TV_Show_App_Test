var input = document.querySelector(".search");
var btn1 = document.querySelector(".submitButton");
let container = document.querySelector(".container");
btn1.addEventListener("click", function (event) {
  fetch(` https://api.tvmaze.com/search/shows?q=${input.value}`) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
        container.innerHTML = ""
    //   let TVShow = data.show; 
      // console.log(TVShow)
      for(let i = 0;i<data.length;i++){ 
        let TVShow = data[i].show;
        let result = `<div class ="Main_Show">
            <h2 class="Show_Name"> Show Name :-${TVShow.name}</h2>
            <img src="${TVShow.image.medium}" class="image" alt="image" > 
     <p class="Premiered"> <span> Premiered:-</span>${TVShow.schedule.time} ${TVShow.schedule.days}</p>
     <p class="Language"><span> Language:-</span>${TVShow.language}</p>
     <span class="De">Details:-</span><a href="Details.html" class=" Details">Show Details</a>
            </div> `;
        container.innerHTML += result; 
      };
    })
    // .catch((err) => alert("Nothing found"));
});
