//let url = 'https://poetrydb.org/random,linecount/1;10/title,author,lines.json'
let url = 'https://poetrydb.org/author,title/Edgar Allan Poe;The Raven'


const button = document.getElementById('button');
const poemZone = document.getElementById('poem');
let poemHolder = [];

async function requestPoem(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const randomIndex = Math.floor(Math.random() * data.length);
    console.log(randomIndex);
    const poem = data[randomIndex]["lines"].join(' <br> ');


    poemZone.innerHTML = poem;
    poemHolder = data;
}
requestPoem(url);

function newPoem(data) {

    const randomIndex = Math.floor(Math.random() * data.length);
    const poem = data[randomIndex]["lines"].join(' <br> ');
    poemZone.innerHTML = poem;
}

// setInterval(newPoem(poemHolder), 5000);    // how often reloads


// button.onclick = () => {
//     body.innerHTML = requestPoem(url)
// }
