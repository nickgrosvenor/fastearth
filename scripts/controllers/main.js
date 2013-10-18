'use strict';

angular.module('TheQApp')
  .controller('MainCtrl', function ($scope, angularFire) {

  	$scope.names = [];

  var database = new Firebase("https://thegaq1.firebaseio.com/names");
  var promise = angularFire(database, $scope, "names");



  	$scope.addName = function(x) {
  		$scope.names.push(x);
      $scope.userInput = "";
  	}

  	$scope.deleteFromQ = function(index) {
  		$scope.names.splice(index,1);
  	}

  	$scope.clearAll = function() {
  		$scope.names = [];
  	}

  });
