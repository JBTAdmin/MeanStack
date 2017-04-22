app.factory('studentService', function ($http) {
	return {
		create: function (data, cb) {
			var backendUrl = 'http://localhost:3000/user/create';
			$http.post(backendUrl, data).then(function (response) {
				if (response.data.success) {
					cb(true, response.data);
				} else {
					cb(false, response.data);
				}
			});
		},

		update: function (data) {
			var backendUrl = 'http://localhost:3000/user/update';
			$http.put(backendUrl, data);

		},

		delete: function (data) {
			var backendUrl = 'http://localhost:3000/user/delete/' + data;
			$http.delete(backendUrl);



		},
		search: function (data) {

			var backendUrl = 'http://localhost:3000/user/search/' + data
			return $http.get(backendUrl);
		},

		getAll: function () {
			var backendUrl = 'http://localhost:3000/user/student';
			return $http.get(backendUrl);

		}


	};
});

app.service('dataService', function () {
	this.studentdata = " ";
});