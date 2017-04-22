app.controller('studentController', [ '$scope', '$state', '$stateParams', 'studentService', 'dataService',
	function ( $scope, $state, $stateParams, studentService, dataService) {

		$scope.createStudent = function () {

				var details = {
					firstname: $scope.student.firstname,
					lastname: $scope.student.lastname,
					email: $scope.student.email,
					age: $scope.student.age,
					sex: $scope.student.sex,
					country: $scope.student.country,
					address: $scope.student.address
				};
				console.log(' details are  '+JSON.stringify(details));

				studentService.create(details, function (success, data) {
					window.alert("registration successful");
				});

			},

			$scope.deleteStudent = function (id) {


				studentService.delete(id, function () {

				});
				window.alert('Student deleted,kindly refresh the page');

			},

			$scope.updateStudent = function () {
				var details = {
					id: $scope.student.id,
					firstname: $scope.student.firstname,
					lastname: $scope.student.lastname,
					email: $scope.student.email,
					age: $scope.student.age,
					sex: $scope.student.sex,
					country: $scope.student.country,
					address: $scope.student.address
				};
				studentService.update(details, function () {
					window.alert('updated successfully');
				});

			},

			$scope.searchStudent = (function () {
				$scope.studentdata = dataService.studentdata;
				$scope.$watch('studentdata', function () {
					dataService.studentdata = $scope.studentdata;
				});

			})();


		$scope.listAll = (function () {
			studentService.getAll().then(function (response) {
				$scope.students = response.data;
			});

		})();


	}
]);

app.controller('searchController', ['$scope', 'dataService', 'studentService', function ($scope, dataService, studentService) {

	$scope.studentdata = dataService.studentdata;
	studentService.search(dataService.studentdata).then(function (response) {
		$scope.studentdetails = response.data;

	});


}]);