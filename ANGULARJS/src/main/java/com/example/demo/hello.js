angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://localhost:8080/RestFull/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
});