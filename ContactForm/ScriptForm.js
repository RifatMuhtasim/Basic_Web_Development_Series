$("#submitbutton").click(function(event){
	console.log("Clicked")

var name =  $("#name").val();
var post =  $("#post").val();
var email = $("#email").val();
var errormessage = $("#errormessage");

errormessage = errormessage.empty();

if(name.length<=5){
	event.preventDefault();
	errormessage.append("<div>Name is not valid</div>");
}

if(post.length<=10){
	event.preventDefault();
	errormessage.append("<div>Post is not valid</div>");
}

if(!(email.length>=5 && email.includes("@") && email.includes("."))){
	event.preventDefault();
	errormessage.append("<div>Email is not valid</div>");
};
})
