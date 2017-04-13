 var app = angular.module('myApp',[ 'ui.router','toastr',]);
 app.config(['$stateProvider','$locationProvider','$httpProvider','$urlRouterProvider',
 		function($stateProvider,$locationPovider,$httpProvider,$urlRouterProvider){
 			$locationPovider.html5Mode({
 				enabled:true,
 				requireBase: false
 			});
 			$urlRouterProvider.otherwise('/');
 			$stateProvider
 				.state('home',{
 					url:'/',
 					templateUrl: './views/home.html',
 					controller: 'studentController'
 				})
 				.state('search',{
 					url:'/search',
 					templateUrl:'./views/search.html',
 					controller: 'studentController'
 				});
 			
 		}
]);

 	