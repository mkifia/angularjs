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

app.controller('parentCtrl', ['$scope', '$timeout', function($scope, $timeout){
	$scope.parent.prenom = 'foo';
	$scope.user = {prenom: 'bar'};
	$scope.items = [1, 2, 3];

	$timeout(function() {
		$scope.$broadcast('Nomevt', 'Message aux descendants');
	});

	$scope.$on('emit', function(event, data) {
		console.log('Reçu dans child :' +data);
	});
	$scope.$on('Nomevt', function (evt, msg) {
		console.log('Reçu dans parent : ' + msg);
	});
}]);

app.controller('childCtrl', ['$scope', function($scope){
	$scope.child.prenom = 'foo bar';
	$scope.$on('Nomevt', function (evt, msg) {
		console.log('Reçu dans child : ' + msg);
		$scope.$emit('emit', 'Message aux ascendants');
	});
}]);

app.controller('watchCtrl', function ($scope) {
	$scope.$watch('pays === "France"', function (newValue, oldValue) {
		console.log(newValue);
	});
});
