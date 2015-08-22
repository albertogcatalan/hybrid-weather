angular.module('weather.controllers', [])

.controller('DashboardController', function($scope,$http) {


  $http.get("http://api.openweathermap.org/data/2.5/forecast/city?id=2892794&APPID=APIkey")
  .success(function (response) {

    $scope.city = response.city.name;
    $scope.country = response.city.country;

    $scope.tempMax = response.list[0].main.temp_max - 272.15;
    $scope.tempMin = response.list[0].main.temp_min - 272.15;
    $scope.humidity = response.list[0].main.humidity;
    $scope.weather = response.list[1].weather[0].description;

   });


})

.controller('InformationController', function($scope) {
  //
})


.controller('TabsController', function($scope) {
  
  // console.log('test ctrl');
  $scope.$on('$ionicView.afterEnter', function(ev, data) { 
      ev.stopPropagation();
  });

});
