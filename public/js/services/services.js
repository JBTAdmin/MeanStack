app.factory('studentService', function ($http) {
	return {
		create: function (data, cb) {
			var backendUrl = 'http://localhost:3000/user/create';
			$http.post(backendUrl, data).then( function (response) {
				if (response.data.success) {
					cb(true, response.data);
				} else {
					cb(false, response.data);
				}
			});
		},

		update: function (data) {
			var backendUrl = 'http://localhost:3000/user/update';
			$http.put(backendUrl,data);

		},

		delete: function (data) {
			var backendUrl = 'http://localhost:3000/user/delete/'+data;
			$http.delete(backendUrl);
			
			

		},
		getAll: function () {
			 
			return $http.get('http://localhost:3000/user/student');

		}


	};
});