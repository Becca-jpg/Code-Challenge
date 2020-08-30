let generate_btn = document.querySelector(".generate_btn");
let favorite_btn = document.querySelector(".favorite");
let key = '906f9f50-3b14-4630-a89a-a0421d1e5317';

generate_btn.addEventListener('click', fetchPics);

function fetchPics() {

    let container = document.querySelector(".container");
    container.innerHTML = '';

    fetch('https://api.thecatapi.com/v1/images/search').then(response => response.json()).then((data) => {
        let catImgUrl = data[0].url

        let imgElement = document.createElement("img")
        imgElement.setAttribute('src', `${catImgUrl}`)
        imgElement.classList


        let container = document.querySelector(".container");
        container.appendChild(imgElement)

        document.querySelector(".favorite").style.display = "inline-block";

    }).catch(err => console.log(err))
}
