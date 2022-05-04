let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  fetchToy()
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function fetchToy () {
fetch("http://localhost:3000/toys")
.then(function(response){
  return response.json();
})
.then(function (data) {
  data.forEach(element => createCard(element));
  
})
}

function createCard (toy) {
//console.log(toy)
const cardDiv = document.createElement('div')
cardDiv.className = 'card'
const toyCollection = document.querySelector("#toy-collection")
toyCollection.append(cardDiv)
const h2 = document.createElement('h2')
const img = document.createElement('img')
const pTag = document.createElement('p')
const button = document.createElement('button')
h2.textContent = toy.name
img.src = ''//toy.image 
img.class = 'toy-avatar'
pTag.textContent = toy.likes
button.class = 'like-btn' 
button.id = toy.id
cardDiv.append(h2)
cardDiv.append(img)
cardDiv.append(pTag)
cardDiv.append(button)

}

function postToys (data) {
  console.log(data.name.value)
fetch('http://localhost:3000/toys', {
  method: 'POST',
  header: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body:JSON.stringify({
    "name": data.name.value,
    "image": data.image.value,
    "likes": 0
  })
})
.then(res => res.json())
.then(toy => console.log(toy))
}
const form = document.querySelector(".add-toy-form")
form.addEventListener('submit', (e) => {
e.preventDefault()
 

  //console.log(e.target[2].value)
  //console.log(e.target[3].value)
  postToys(e.target)
})




/*

 add attribute to each tab and it should be the id (toy.id) setting the id the the like button, update with the id of each toy 


*/