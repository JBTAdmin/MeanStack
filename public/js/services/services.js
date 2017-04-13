app.factory('studentService',function($http){
		return{
			create:function(data){
				var backendUrl ='http://localhost:3000';
				return $http.post(backendUrl +'/user/create');
			},
			update:function(data){
				var backendUrl ='http://localhost:3000';
				return $http.put(backendUrl +'/user/update',data);

			},
			delete:function(data){
				var backendUrl ='http://localhost:3000';
				return $http.delete(backendUrl +'/user/delete');

			},
			search:function(data){
				var backendUrl ='http://localhost:3000';
				return $http.get(backendUrl +'/user/search');

			}


		};
	});