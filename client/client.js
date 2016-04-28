var app = angular.module('heroApp', []);

app.controller('HeroController', ['$scope', '$http', function($scope, $http) {

  // Init variables
  $scope.hero = {};
  $scope.heroList = [];

  $scope.getHeroes = function() {
    controller.hero = {};
    $http.get('/heroes/getAll').then(function(response) {
      $scope.heroList = response.data;
    })
  }

  $scope.addHero = function() {
    console.log($scope.hero);
    $http.post('heroes/add', $scope.hero);
  }

  $scope.deleteHero = function(hero) {
    $http.delete('/heroes/delete' + ticket._id);
  }
}])
