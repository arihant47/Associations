//REFER THIS VIDEO ONCE AGAIN
//*****THIS CODE IS INCOMPLETE ******

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

//POST -title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});
var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post"
		}
	]
});
var User = mongoose.model("User", userSchema);

User.create({
	email: "bob@gmail.com",
	name: "Bob Belcher"
});
