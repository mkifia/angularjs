var app = angular.module('monModule', []);
app.controller('myFirstController', function ($scope) {
	$scope.prenom = 'toto';

	$scope.transfert = function() {
		$scope.prenom_2 = $scope.prenom;
	};

	$scope.toUpper = function (str) {
		if (!str) {
			return '';
		} else return str.toUpperCase();
	}
});

app.controller('catalogue', ['$scope', function ($scope) {
	$scope.boutique = 'AngularSJ store';
	$scope.product = {
		name: 'NG-STRORE',
		description: 'A JS Framework'
	}
}]);

app.controller('parentCtrl', ['$scope', function($scope){
	$scope.prenom = 'foo';
	$scope.user = {prenom: 'bar'};
	$scope.items = [1, 2, 3];
}]);

app.controller('childCtrl', ['$scope', function($scope){
	// $scope.prenom = 'foo bar';
}])