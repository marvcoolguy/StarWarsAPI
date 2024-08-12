"use strict"
let name = document.getElementById("name");
let id = document.getElementById("id");
let rotation_period = document.getElementById("rotation_period");
let orbital_period = document.getElementById("orbital_period");
let diameter = document.getElementById("diameter");
let climate = document.getElementById("climate");
let gravity = document.getElementById("gravity");
let population = document.getElementById("population");
let button = document.getElementById("btn").addEventListener("click", api)
function api() {
    let num = Math.ceil(Math.random() * 60)
    fetch(`https://swapi.dev/api/planets/${num}`)
      .then(response => response.json())
      .then(data => {
        name.innerHTML =`Name: ${data["name"]}`;
        id.innerHTML = `Id: ${num}`;
        try {
            rotation_period.innerHTML =`Rotation_period: ${data["rotation_period"]}`;
            
        } catch (error) {
            console.warn(error)
        }
        population.innerHTML = `Population: ${data["population"]}`
        orbital_period.innerHTML =`Orbital_period: ${data["orbital_period"]}`;
        diameter.innerHTML =`Diameter: ${data["diameter"]}`;
        climate.innerHTML =`Climate: ${data["climate"]}`;
        gravity.innerHTML =`Gravity: ${data["gravity"]}`;
      })
}