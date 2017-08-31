//SERVICES
weatherApp.service('cityService', function() {

  this.city = "New York, NY";
  
});

weatherApp.service('weatherService', ['$resource', function($resource) {
                   
  this.GetWeather = function(city, days, appid) {
                   
    var weatherApi = 
                                      
      $resource("https://api.openweathermap.org/data/2.5/forecast/daily", {callback:  "JSON_CALLBACK"}, {get: {method: "JSONP"}});
  
    return weatherApi.get({q: city, cnt: days, appid: appid});
  
  };
                   
}]);