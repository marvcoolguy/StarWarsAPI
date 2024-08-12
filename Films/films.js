"use strict"
let title = document.getElementById("title");
let id = document.getElementById("id");
let episode_id = document.getElementById("episode_id");
let opening_crawl = document.getElementById("opening_crawl");
let producer = document.getElementById("producer");
let release_date = document.getElementById("release_date");
let director = document.getElementById("director");
let button = document.getElementById("btn").addEventListener("click", api);
function api() {
    let num = Math.ceil(Math.random() * 6)
    fetch(`https://swapi.dev/api/films/${num}`)
      .then(response => response.json())
      .then(data => {
        title.innerHTML =`Title: ${data["title"]}`;
        id.innerHTML = `Id: ${num}`;
        episode_id.innerHTML = `Episode_id: ${data['episode_id']}`;
        opening_crawl.innerHTML =`Opening_crawl: ${data["opening_crawl"]}`;
        director.innerHTML = `Director: ${data["director"]}`
        producer.innerHTML =`Producer: ${data["producer"]}`;
        release_date.innerHTML =`Release_date: ${data["release_date"]}`;
      })
}