//variables
const recents = document.getElementById("recentsearches");
const containerofsearch = document.getElementById("containerofsearch");
let input = document.getElementById("floatingInput");
let inputvalue = document.getElementById("floatingInput").value;
//
input.addEventListener("keyup", getSearch);
async function getSearch(e) {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc1ODhjYTIyNTJhYTAwMTVkNjllYjQiLCJpYXQiOjE2Njg2NDcxMTUsImV4cCI6MTY2OTg1NjcxNX0.qtWzqEc77uBml5A3Uls6MJwHlyeoATIfr2ssavXysVU",
    },
  };
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${e.target.value}`,
    options
  );
  const listOfSearch = await response.json();
  return listOfSearch; //                                                       listOfSearchAlbums
}
const fillPageSearch = function (listOfSearch) {
  recents.innerHTML = "";
  for (i = 0; i < 10; i++) {
    containerofsearch.innerHTML += `<div class="col" id="top-buttons">
      <div class="background-card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                  src="${listOfSearch.data[i].album.cover_medium}"
                  class="img-fluid rounded-start aspect-ratio-one-to-one" style="width: 100%"
                  alt="..."
                />
            </div>
            <div class="col-md-8 d-flex align-items-center">
            <div class="card-body d-flex align-items-center justify-content-between">
                <p class="card-title text-truncate">${listOfSearch.data[i].album.title}</p>
                <a href="/Album/album.html?songId=${listOfSearch.data[i].album.id}"><i class="fa-solid fa-circle-play fa-2xl"></i></a>
            </div>
          </div>
      </div>
    </div>
  </div>`;
  }
};
// function searchURL(){
//     window.location = "http://www.myurl.com/search/" + (input text value);
//   }

//                      JS  FOR CARDS
{
 
}
