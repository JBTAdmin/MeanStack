var Student  = require('./controllers/student.server.controller.js');

module.exports = (app)=>{
	app.post('/user/create',   Student.registerStudent);
	app.delete('/user/delete/:id', Student.deleteStudent);
	app.get('/user/search',    Student.searchStudent);
	app.put('/user/update',    Student.updateStudent);
	app.get('/user/student',    Student.allStudent);
};