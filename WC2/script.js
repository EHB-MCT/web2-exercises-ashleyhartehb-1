'strict mode'

//import Team from './Team'

window.onload = () => {
  console.log("page loaded");
  let teamname = 'Jessie';
  let trainer = 'Rocket';
  let roster = ['Ekans', 'Wodbuffet', 'Shelder', 'Lickitung', 'Wurmple', 'Magikarp'];

  //let team = new Team(teamname, trainer, roster);
  //console.log(team.describe);

  let myDiv = document.getElementById("pokemonList");
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      let result = data.results[0]
      console.log(result);
      let id = 0;

      data.results.forEach(result => {
        console.log(result);
        id++;
        let newDiv = document.createElement("div");
        
        newDiv.innerHTML = `
        <img src="${result.url}" alt="" class="image">
        <p class="id">${id}</p>
        <h3 class="name">${result.name}</h3>
        <ul class="types">
        <li>Type 1</li>
        <li>Type 2</li>
        </ul>
        <button class="button">Add to my team</button>
        ` 
        myDiv.append(newDiv) ;

      });

    });
}