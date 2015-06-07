/**
 * Created by Jimmy Dave on 7/6/15.
 */

(function() {

    var userController = function($scope,$http) {

        var getListOfUser = function() {

            var response = $http({
                method: 'GET',
                url: "http://localhost:8080/api/getListOfUser"
            }).success(function(data, status, headers, config) {
                $scope.users = data;

            }).error(function(err, status, headers, config) {
                console.log(err);
            });

        }

        $scope.save = function() {
            var response = $http({
                method: 'POST',
                url: "http://localhost:8080/api/save",
                data : $scope.user
            }).success(function(data, status, headers, config) {
                $scope.user = null;
                getListOfUser();
            }).error(function(err, status, headers, config) {
                console.log(err);
            });
        }
        

        $scope.updateUser = function(user) {
            $scope.user = user;
            getListOfUser();
        }

        $scope.deleteUser = function(user) {
            var response = $http({
                method: 'POST',
                url: "http://localhost:8080/api/delete",
                data : user
            }).success(function(data, status, headers, config) {
                getListOfUser();
            }).error(function(err, status, headers, config) {
                console.log(err);
            });
        }

        getListOfUser();

    };

    userController.$inject = ['$scope','$http'];

    angular.module('springApp').controller('userController', userController);

}());