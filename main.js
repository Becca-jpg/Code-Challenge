let favoriteButton = document.querySelectorAll(".favorite");
let removeFavoriteButton = document.querySelectorAll(".remove-favorite");
let imageURL = 'https://api.thecatapi.com/v1/images/search?limit=8&api_key=906f9f50-3b14-4630-a89a-a0421d1e5317&size=thumb';

const favoriteImages = [];

function grabData() {
   const fetchImages = fetch(imageURL);

   const main = document.getElementById("main");

   main.innerHTML = "<p>Pics are coming!</p>";

   fetchImages.then(response => {
      return response.json();
   }).then(data => {
      main.innerHTML = catUrlList(data);
   });

   function catUrlList(data) {
      let catImgUrl = data.map(image => `<li><img src=${image.url} alt="This kitty must be a shy one :(">
      <button class="favorite">I Love This!</button></li>`).join("\n");
      return `<ul>${catImgUrl}</ul>`
   }
   
};

function addFavPhoto() {
   //event listener for button click 
   const main = document.getElementById("main");
   main.onclick = function (event) {
      event.preventDefault();

      const element = event.target;

      if (element.nodeName === 'BUTTON') {
         console.log("Fav Button Added!")
         //Grab ID from specific photo 
           
         //Add specific photo to array above

         //add selected image to array

      }
}

   //add array to local storage
   localStorage.setItem('favoriteImages', JSON.stringify(favoriteImages));
   

function removeFavPhoto() {
   //event listener for button click 

   //remove photo from array
}

function viewFavorites() {
   //event listener for button click 

   //Pull up array 

   //Display photos list along with remove button
}

grabData();

addFavPhoto();