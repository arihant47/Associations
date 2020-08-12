var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

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
	posts: [postSchema]
});
var User = mongoose.model("User", userSchema);



// var newUser = new User({
// 	email: "clay@libertyhigh.edu",
// 	name: "Clay Janson"
// });
// newUser.posts.push({
// 	title: "13 Reasons Why",
// 	content: "I was one of them!"
// });
// newUser.save(function(err, user){
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });

// var newPost = new Post({
// 	title: "Reflections on Apples",
// 	content: "They are delicious"
// });
// newPost.save(function(err, post){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

User.findOne({name: "Clay Janson"}, function(err, user){
	if(err){
		//console.log(err);
	} else {
		user.posts.push({
			title: "3 things that scare me now",
			content: "Hannah Hannah Hannah"
		});
		user.save(function(err, user){
			if(err){
				console.log(err);
			} else {
				console.log(user);
			}
		});
	}
});
