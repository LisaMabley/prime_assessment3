var app = angular.module('heroApp', []);

app.controller('HeroController', ['$scope', '$http', function($scope, $http) {

  // Init variables
  $scope.hero = {};
  $scope.heroList = [];

  $scope.getHeroes = function() {
    $scope.hero = {};
    $http.get('/heroes/getAll').then(function(response) {
      $scope.heroList = response.data;
    })
  }

  $scope.addHero = function() {
    $http.post('heroes/add', $scope.hero).then($scope.getHeroes());
  }

  $scope.deleteHero = function(hero) {
    $http.delete('/heroes/delete/' + hero._id).then($scope.getHeroes());
  }

  $scope.getHeroes();
}])
