const card= document.querySelectorAll(".card");
console.log(card);

card.forEach(c=>c.addEventListener("click", flip));
function flip()
{
 console.log("flip");
 this.classList.add("flip");
}

function success()
{


}

function fail()
{


}

function reset()
{


}