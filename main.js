document.body.style.background = 'grey' 

document.getElementById('main-title').textContent = "Chris' Homepage"

let node = document.createElement("li");
node.innerText = "Eating"
document.querySelector("#fav-things").appendChild(node)

document.getElementById("kobe1").firstElementChild.addEventListener("mouseover", onmouseenter = () => {
    window.alert("R.I.P to the G.O.A.T!")
})

document.getElementById("b1").addEventListener("click", onclick = () => {
    window.prompt("Welcome to #RedOctober Jon!")
})