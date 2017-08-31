//CONTROLLERS

weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {

  $scope.city = cityService.city;
  
  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });
  
  $scope.submit = function() {
    $location.path("/forecast");
  };
  
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService',  function($scope, $routeParams, cityService, weatherService ) {
  
  $scope.city = cityService.city;
  $scope.appid= '89cfff652e480bd5bc0e088457fd93f5';
  
  $scope.days = $routeParams.days || '2';
  
  $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days, $scope.appid);
  
  $scope.convertToCelsius = function(degC) {
    return Math.round(1.8 * (degC - 273));
  }
  
  $scope.convertToDate = function(dt) {
    
    return new Date(dt * 1000);
  
  };
  
}]);
