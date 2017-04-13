var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var url ='mongodb://127.0.0.1/vickystudentinfo';

module.exports ={

	createConnenction: function(){
		mongoose.connect(url);
		mongoose.connection.on("connected", ()=>{
			console.log('Database responding');
		});
	}

}
