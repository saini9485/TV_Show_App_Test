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
        console.log( TVShow)
        let result = `<div class ="Main_Show">
            <img src="${TVShow.image.medium}" class="image" alt="image" > 
            <h3 class="Status"> Status :-${TVShow.status}</h3> 
     <p class="genres"> <span> Genres:-</span>${TVShow.genres} </p>
     <p class="Language"><span> Language:-</span>${TVShow.language}</p>
     <p class="summary"><span>summary :-</span>${TVShow.summary}</p>
     <p class=" Seasons"><span>Seasons :-</span>${TVShow.season}</p>
     <span class="De">Details:-</span><a href="Detail.html" class=" Details">Show Details</a>
            </div> `;
        container.innerHTML += result; 
      };
    })
    // .catch((err) => alert("Nothing found"));
});
