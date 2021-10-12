"use strict"

window.onload = () => {
  let htmlTitle = document.getElementsByClassName('card-title');
  let htmlImage = document.getElementsByClassName('card-img');
  let description = document.getElementsByClassName('card-text');
  let date = document.getElementsByClassName('text-muted');
  let button = document.getElementById('button');
  let container = document.getElementById("container");
  let totalWatchTime = 0;

  //let inputTitle = "parasite";
  let yearInput = "2019";

  const apiKey = "cce07fa5"


  inputTitle.addEventListener('keyup', function () {
    let inputBar = document.getElementById('inputTitle').value;
    //http://www.omdbapi.com/?t=${inputTitle}&y=${yearInput}&apikey=${apiKey}
    fetch(`http://www.omdbapi.com/?t=${inputBar}&apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let title = data.Title;
        let released = data.Released;
        let url = data.Poster;
        let plot = data.Plot;
        let runtime = parseInt(data.Runtime.replace(/[^0-9]/g,''));
        console.log(runtime);
        

        htmlTitle.innerText = title;
        date.innerText = released;
        description.innerText = plot;
        htmlImage.src = url;

        let newDiv = document.createElement("div");
        
        newDiv.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${url}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${plot}.</p>
              <p class="card-text"><small class="text-muted">${released}</small></p>
              <button type="button" class="btn btn-primary mb-2" id="watched"> Add to watched </button>
            </div>
          </div>
        </div>
      </div>
        ` 
        container.append(newDiv) ;
document.getElementById("watched").addEventListener("click",function(){
  totalWatchTime+= runtime;
  document.getElementById("watchtime").innerText = totalWatchTime;
})
      });
  });

}

/*
BY ID OR TITLE
i =>id
t => title
type =>(movie/series/episode)
y => year
plot = short/full
r = json/xml
callback = jsonp callback name
v = api version

BY SEARCH
s movie title to search for

*/