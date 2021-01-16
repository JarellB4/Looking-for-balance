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
  var inspiration = data;
  var whenPushed = $("<p>").text(inspiration);
  $("header").append(whenPushed);



  
});