const form = document.getElementById("playerForm")

form.addEventListener("submit", async (e) => {

e.preventDefault()

const name = document.getElementById("name").value
const rating = document.getElementById("rating").value
const country = document.getElementById("country").value

await fetch("http://localhost:5000/addPlayer",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({name,rating,country})
})

loadPlayers()

})

async function loadPlayers(){

const res = await fetch("http://localhost:5000/players")

const players = await res.json()

const table = document.querySelector("#playersTable tbody")

table.innerHTML=""

players.forEach(p=>{

const row = `
<tr>
<td>${p.name}</td>
<td>${p.rating}</td>
<td>${p.country}</td>
</tr>
`

table.innerHTML+=row

})

}

loadPlayers()
