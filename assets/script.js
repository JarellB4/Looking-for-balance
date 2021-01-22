$(document).ready(function() {



//starter code to test for API
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "4186ebe167msh5543f6c878fb176p17fd99jsn82889e1748ce",
		"x-rapidapi-host": "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);

  var inspiration = $("<p>").text("'" + response.text + "'- " + response.author);

 $("#apiins").append(inspiration);
});


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
      $(".date").text(fullDate);

      toDoList = [sOne, sTwo, sThree, fOne, fTwo, fThree, scOne, scTwo, scThree]
      

      $(".description").change(function() {
      var todoVal = $(this).val();
      var time = $(this).parent().attr("id");

        console.log($(this).val());
        localStorage.setItem(time, JSON.stringify(todoVal.trim()));  

        
        
        for (let i = 0; i < toDoList.length; i++) {
          localStorage.getItem(toDoList[i],todoVal);  
        }
      });

      function checked() {
        var ckbutton = document.getElementsByClassName("chckBox").checked;
        if (ckbutton === true) {
          console.log("button checked worked")
          $(".chckbox").addClass(".done");
        }
        };





    











});





