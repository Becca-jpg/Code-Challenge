let favorite_btn = document.querySelector(".favorite");
let imageURL = 'https://api.thecatapi.com/v1/images/search?limit=8&api_key=906f9f50-3b14-4630-a89a-a0421d1e5317&size=thumb';
//Load Pictures on Page Load

function grabData() {
   const fetchImages = fetch(imageURL);

   const main = document.getElementById("main");

   main.innerHTML = "<p>Pics are coming!";

   fetchImages.then(response => {
      return response.json();
   }).then(data => {
      main.innerHTML = catUrlList(data);
   });

   function catUrlList(data) {
      let catImgUrl = data.map(image => `<li><img src=${image.url} alt="This kitty must be a shy one :("></li>`).join("\n");
      return `<ul>${catImgUrl}</ul>`
   }
};

grabData();
