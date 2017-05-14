use strict';

angular.module('stockApp', ['ui.router','ngResource','ngDialog'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/index.html',
                        controller  : 'HeaderController'
                    } 
                }

            })
        
            $urlRouterProvider.otherwise('/');
    })
;