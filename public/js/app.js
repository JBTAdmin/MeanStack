 var app = angular.module('myApp',[ 'ui.router']);
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
 				}).state('student',{
 					url:'/student',
 					templateUrl: './views/student.html',
 					controller: 'studentController'
 				})
 				.state('search',{
 					url:'/update',
 					templateUrl:'./views/update.html',
 					controller: 'studentController'
 				});
 			
 		}
]);

 	