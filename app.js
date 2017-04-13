var express      = require ('express'),
	bodyParser  = require ('body-parser'),
	mongoose    = require ('mongoose')
	cors		= require('cors'),
	morgan      = require ('morgan'),
    dbConnection= require('./config/db.js'),
    route		= require('./server/routes.js');

// creating connection to the database
 dbConnection.createConnenction();

var port =  process.env.PORT  || 3000;


var app = express();
 
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true})); //use bodyParser for request and parsing info
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public')); //use to serve static files like favicon, css, angular and the rest

route(app);


app.get('*', function(req, res) {
    /** frontend routes =========================================================
      * route to handle all angular requests
      * load the single view file (angular will handle the page changes on the front-end)
      **/
     res.sendFile(__dirname + '/public/index.html' );
});


app.listen(port, function(){
	console.log('server responding on port ' + port);
});