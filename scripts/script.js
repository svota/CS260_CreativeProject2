$(document).ready(function() {
  $('#dogInput').click(function() {
    $('#changedDog').html("");
    const dogAPI = "https://random.dog/woof.json";
    $.getJSON(dogAPI, function(data) {
      let dogURL = data.url;
      let fileType = dogURL.substr(dogURL.length - 4, dogURL.length - 1);
      let result = "";
      result += "<img class='doggy' src='" + dogURL + "'/>";
      $('#originalDog').html(result);
      let newButton = '<button id="magicify">Make your dog magical!</button>';
      $('#button2').html(newButton);
      $('#magicify').click(function() {
        const hpAPI = "https://www.potterapi.com/v1/";
        const key = "$2a$10$Mckh0Ex7O6DMgUTQxhmOqOJ9nIYVXxRcwcC4exiXzDCBEzZmo9g0m";
        let magic = "";
        $.getJSON(hpAPI + "sortingHat", function(data) {
          let house = data;
        }).then(function(house) {
          if(Math.random() > 0.5) {
            xe = "He";
          } else {
            xe = "She";
          }
          magic += "<div id='magic'><h2>" + xe + "'s a " + house + "!</h2>";
          $.getJSON(hpAPI + "spells" + "?key=" + key, function(response) {
            magic += "<p>" + xe + " can cast: </p><ol>";
            for(i = 0; i < 5; i++) {
              let spellNum = Math.floor(Math.random() * 151);
              let spell = response[spellNum];
              magic += "<li>" + spell.spell + ", which " + spell.effect + ".</li>";
            }
            magic += "</ol></div>";
            $('#changedDog').html(magic);
          });
        });
      });
    });
  });
});

