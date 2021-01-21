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

 $("#header").append(inspiration);
});
  
  
