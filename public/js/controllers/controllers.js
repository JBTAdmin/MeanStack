app.controller('studentController', ['$rootScope', '$scope', '$state', '$stateParams', 'toastr', 'studentService',
	function ($rootScope, $scope, $state, $stateParams, toastr, studentService) {

		$scope.createStudent = function () {
				var details = {
					firstname: $scope.firstname,
					lastname: $scope.lastname,
					email: $scope.email,
					student: $scope.age,
					sex: $scope.sex,
					country: $scope.country,
					address: $scope.address
				};

				studentService.create(details, function (success, data) {
					if (success) {
						toastr.success(data.message, {
							timeOut: 1000
						});

					} else {
						toastr.error(data.message, 'Error', {
							timeOut: 2000
						});
					}
				});
			},
			$scope.deleteStudent = function () {
				studentService.search($scope.studentId, function (success, data) {
					if (success) {
						toastr.success(data.message, {
							timeOut: 1000
						});
					} else {
						toastr.error(data.message, 'Error', {
							timeOut: 2000
						});
					}
				});

			},
			$scope.updateStudent = function () {
				var details = {
					firstName: $scope.firstname,
					lastName: $scope.lastname,

					student: $scope.age,
					email: $scope.email,
					sex: $scope.sex,
					studentId: $scope.studentId
				};
				studentService.update($scope.studentId, details, function (success, data) {
					if (success) {
						toastr.success(data.message, {
							timeOut: 1000
						});
					} else {
						toastr.error(data.message, 'Error', {
							timeOut: 2000
						});
					}
				});

			},
			$scope.searchStudent = function () {
				studentService.search($scope.studentId, function (success, data) {
					if (success) {
						toastr.success(data.message, {
							timeOut: 1000
						});
					} else {
						toastr.error(data.message, 'Error', {
							timeOut: 2000
						});
					}
				});

			},

			onError = function (error) {
				$scope.error = error.data
			};
	}
]);