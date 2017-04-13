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
				return res.status(404).json({
					success: false,
					Error: 'invalid details'
				});

			} else {

				return res.status(200).json({
					success: true,
					message: 'Student successfully registered',
					id: student.id
				});

			}
		});


	},

	deleteStudent: (req, res) => {


		var id = req.body.id;

		Student.remove({
			_id: id
		}, (err, student) => {
			if (err) {
				return res.status(404).json({
					success: false,
					message: 'Student details not found'
				});
			} else {
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
				return res.status(404).json({
					success: false,
					message: 'Student details not found'
				});

			} else {
				return res.send(student);
			}
		});
	},

	updateStudent: (req, res) => {
		var studentid = req.params.studentid;
		var StudentDetails = req.body;

		Student.findOneAndUpdate({
			_id: studentid
		}, StudentDetails, (err, student) => {
			if (err) {
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