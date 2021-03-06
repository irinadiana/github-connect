var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Users = new Schema({
	user_id:	    	String,
	user_name:	    String,
	user_fullname:  String,
	user_email:	    String,
	avatar_url:     String,
	location:       String,
	favorites:	    [String],
	join_github:    String,
	join_us:	    	Date,
  last_seen:      Date,
	repos:          [Repo],
	points_repos:   Number,
	tentacles:			{type: Number, default: 0}
});

var Ideas = new Schema({
	uid:            Number,
	user_name:      String,
	title:          String,
	description:    String,
	lang:           String,
	plan:           String,
	date_post:      Date,
	team:           [Number],
	comments_num:   {type: Number, default: 0}
});

var IdeaComments = new Schema({
	uid:        Number,
	user_name:  String,
	idea:       String,
	content:		String,
	date:       Date,
  upvotes:    [Number],
  flags:      [Number]
});

var Repo = new Schema({
	name:           String,
	description:    String,
	html_url:       String,
	fork:           Boolean,
	forks_count:    Number,
	points:         {type: Number, default: 0},
	size:						Number,
	watchers_count:	Number,
	owner:					String,
	closed_pulls:		Number
});
 
mongoose.model( 'Users', Users );
mongoose.model( 'Ideas', Ideas );
mongoose.model( 'IdeaComments', IdeaComments );
mongoose.model( 'Repo', Repo );

mongoose.connect( 'mongodb://localhost/github-connect' );
//mongoose.connect('mongodb://'+global.config.db_name+':'+global.config.db_pass+'@troup.mongohq.com:10059/github-connect' );
