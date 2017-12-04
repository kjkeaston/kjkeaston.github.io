// sanity check
console.log("Up and running!");

$(document).ready(function() {

let homework = [
{
  title: "JS Control Flow Training",
  date: "Nov. 28, 2017",
  link: "https://github.com/SF-WDI-LABS/js-control-flow-training/pull/2"
},
{
  title: "Problem Set JS Basics",
  date: "November 29, 2017",
  link: "https://github.com/SF-WDI-LABS/problem-set-js-basics/pull/20"
}
];

for(let i = 0; i < homework.length; i++) {
  $("#homework-section").append(`<div class="each-homework"><h4 class="home-work-title">${homework[i].title}</h4><h5>${homework[i].date}</h5><a href=${homework[i].link} target="_blank">See it on GitHub</a></div>`)};

let projects = [
{
  title: "Memory Game",
  description: "A simple memory game trying to find a suit match among 4 cards.",
  link: "projects/memory/memory.html"
},
{
  title: "Shakespearean Insult Generator",
  description: "A fun way to insult someone. Type a person's name and a number of insults and have a random insult generated.",
  link: "projects/insult/insult.html"
},
{
  title: "99 Bottles of Beer on the Wall",
  description: "See a print out of all the lyrics based on how many versus you want.",
  link: "projects/beerbottle/beerbottle.html"
}
];

for(let i = 0; i < projects.length; i++) {
  $("#projects-section").append(`<div class="each-project"><h4 class="project-title">${projects[i].title}</h4><p>${projects[i].description}</p><a href=${projects[i].link} target="_blank">See more...</a></div>`)};














});