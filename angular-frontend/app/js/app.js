/**
 * Created by Jimmy Dave on 7/6/15.
 */

var springApp = angular.module('springApp',['ui.router']);

springApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/html/welcome.html',
            controller:'userController'
        });

});

springApp.directive('ngConfirmClick', [ function() {
    return {
        link : function(scope, element, attr) {
            var msg = attr.ngConfirmClick || "Are you sure?";
            var clickAction = attr.confirmedClick;
            element.bind('click', function(event) {
                if (window.confirm(msg)) {
                    scope.$eval(clickAction)
                }
            });
        }
    };
} ])