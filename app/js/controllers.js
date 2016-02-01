var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
	console.log('here')
	$http.get('app/phones/phones.json').success(function(data) {
		console.log(data);
		$scope.phones = data;
	})
})