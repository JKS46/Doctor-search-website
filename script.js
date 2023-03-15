const input = document.querySelector('#input');
const search = document.querySelector("#search");
const cards = document.querySelector(".cards");
const data = [
    {name: "doctor1",location:"place1"},
    {name: "doctor2",location:"place2"},
    {name: "doctor3",location:"place3"},
    {name: "doctor4",location:"place4"},
    {name: "doctor5",location:"place5"},
    {name: "doctor6",location:"place6"},
    {name: "doctor7",location:"place7"},
    {name: "doctor8",location:"place8"},
]

let searchValue = "";
let result = "";

search.addEventListener('click', () => {
    searchValue = input.value;
    searchValue = searchValue.toLowerCase();

    if( searchValue == ""){
        alert("Please enter a valid search");
    }
    if(searchValue !== ""){
        result = data.find(places => places.location === searchValue);
        console.log(result);
    }
    if(result!== undefined){
        cards.replaceChildren();

        let name = result.name;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        let location = result.location;
        location = location.charAt(0).toUpperCase() + location.slice(1);
        let indexer = location.slice(-1);
        let mf = (indexer%2==0) ? "m" : "f";

        console.log(mf);
        cards.innerHTML = `
            <div class="card">
                <img src="img/doc${mf}.jpg" alt="doctor${mf}">
                <h2>${name}</h2>
                <p>${location}</p>
            </div>
        `; 
    }
    else{
        cards.innerHTML = `
            <div class="card">
                <h2>Sorry, no results found</h2>
            </div>
        `;
    }
    });
