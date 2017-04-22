var Student = require('../model/student.server.model.js');



module.exports = {

	registerStudent: (req, res) => {

		var student = new Student();

		student.firstname = req.body.firstname;
		student.lastname = req.body.lastname;
		student.email = req.body.email;
		student.age = req.body.age;
		student.sex = req.body.sex;
		student.country = req.body.country;
		student.address = req.body.address;


		student.save((err, students) => {
			if (err) {
				console.log(err);
				return res.status(404).json({
					success: false,
					Error: 'invalid details'
				});


			} else {
				console.log('passed');
				return res.status(200).json({
					success: true,
					message: 'Student successfully registered',
					id: student.id
				});

			}
		});


	},

	deleteStudent: (req, res) => {


		var id = req.params.id;

		Student.remove({
			_id: req.params.id
		}, (err, student) => {
			if (err) {
				console.log(' error here');
				return res.status(404).json({
					success: false,
					message: 'Student details not found'
				});
			} else {
				console.log(' work');
				return res.json({
					success: true,
					message: 'student succesfully deleted'
				});
			}
		});


	},

	searchStudent: (req, res) => {

		var id = req.params.id;
		Student.findOne({
			_id: id
		}, (err, student) => {
			if (err) {
				console.log(err);
				return res.send(' not a registered student');

			} else {

				return res.send(' a registered student');
			}
		});
	},

	updateStudent: (req, res) => {

		var student = {

			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			age: req.body.age,
			sex: req.body.sex,
			country: req.body.country,
			address: req.body.address,
		};


		Student.findByIdAndUpdate({
			_id: req.body.id
		}, student, (err, stu) => {
			if (err) {
				console.log(err);
				return res.status(404).json({
					success: false,
					message: 'User Details Not Found',
					err: err
				});
			}

			res.status(200).json({
				success: true,
				message: 'Update Successful'
			});

		});

	},


	allStudent: (req, res) => {
		Student.find({

		}, (err, student) => {

			return res.send(student);

		});
	}

};