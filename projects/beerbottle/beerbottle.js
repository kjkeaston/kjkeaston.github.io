console.log("up and running!");


// YOUR CODE HERE

// let question = prompt("How many verses do you want to hear?", "Enter a number less than 100");
// $(document).on("click", "#play-song", function() {
//       let userage = $("#lyric-count").val();
//       let message;
//       for (var i = userage; i >= 0; i -=1) {
//         if (i > 2) {
//           message = i + " bottles of beer on the wall, " + i + " bottles of beer! Take one down, pass it around, " + (i-1) + " bottles of beer on the wall!";
//         } else if (i ===2) {
//           message = i + " bottles of beer on the wall, " + i + " bottles of beer! Take one down, pass it around, " + (i-1) + " bottle of beer on the wall!";
//         } else if (i === 1) {
//           message = i + " bottle of beer on the wall, " + i + " bottle of beer! Take one down, pass it around, no more bottles of beer on the wall!";
//         } else if (i === 0) {
//           message = i + " bottles of beer on the wall, " + i + " bottles of beer! None to take down, none to pass it around, no more bottles of beer on the wall!";
//         }
//       }

$(document).on("click", "#play-song", function() {
  let verse = $("#lyric-count").val();

  for (let x = verse; x >= 0; x -=1) {
    let song = [
    {
      lyrics: x + " bottles of beer on the wall, " + x + " bottles of beer! Take one down, pass it around, " + (x-1) + " bottles of beer on the wall!"
    },
    {
      lyrics: x + " bottles of beer on the wall, " + x + " bottles of beer! Take one down, pass it around, " + (x-1) + " bottle of beer on the wall!"
    },
    {
      lyrics: x + " bottle of beer on the wall, " + x + " bottle of beer! Take one down, pass it around, no more bottles of beer on the wall!"
    },
    {
      lyrics: x + " bottles of beer on the wall, " + x + " bottles of beer! None to take down, none to pass it around, no more bottles of beer on the wall!"
    }
    ];
    for(let i = 0; i < song.length; i++) {
    $(".full-song").append(`<div><p>${song[i].lyrics}</p>`);}
  }
});




