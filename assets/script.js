 Hector
$(document).ready(function() {

  $("header").append("<h1> Looking for balance </h1>")

    // Carousel link
    var instance = M.Carousel.init({
        fullWidth: true,
        indicators: true
      });
    
      // Or with jQuery
    
      $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });

      var currentDate = new Date();
      
      var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

      var n = weekday[currentDate.getDay()];

      var month = currentDate.getMonth() + 1;
      var day = currentDate.getDate();
      var year = currentDate.getFullYear();
      var hr = currentDate.getHours();
      var mn = currentDate.getMinutes();
      var sec = currentDate.getSeconds();
      var fullDate = n + (" ") + month + "/" + day + "/" + year;
      $("#date").text(fullDate);


      var tempHTML = $(`
      <p>this is a test</p>
      `);
      $("#schedule").append("<p>This is where we would append the schedule <p>")

      $("#family").append("<p>This is where we would append the family to do <p>")

      $("#school").append("<p>This is where we would append the school to do <p>")











});




//starter code to test for API
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://type.fit/api/quotes",
    "method": "GET"
  }
  
  $.ajax(settings).done(function (response) {
    const data = JSON.parse(response);
    console.log(data);
  });
 main
