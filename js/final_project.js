/*
	My uses of Javascript

	Tooltip on Badge
	Replace Badge with Random Message on click
	Create User
	Sign in as user
	Sign out
	Display the Username in the button
	Submitting the contact form

	My uses of the DOM
	Replace Badge with Random Message on click
	Display the Username in the button
	Authentication Form Modal
	Reading the username to submit in the form

	My uses of JSON
	I store the contact us form results in Firebase as a JSON
	Three separate collections for each of the three topics
	Each collection has a name, text, 
	and email (automatically gained from the sign in)

*/

	var notSignedIn = "User Not Signed In Yet";
	var db = firebase.firestore();
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip(); 
	});
	function testalert() {
		alert("the function worked!");
	}
	function randommessage() {
		var badge = document.getElementById("randommessage");
		var messagelist = 
		[
		"You're awesome!",
		"Thanks for visiting my site",
		"How's your day?",
		"Great to see you.",
		"Not bad for something so last minute, eh?",
		"This is definitely a good use of javascript",
		"Bootstrap > CSS any day",
		"Lovely weather isn't it?",
		"test message, do not read"
		];
		badge.innerHTML = 
		messagelist[Math.floor(Math.random()*messagelist.length)];
	    		// alert(messagelist[Math.floor(Math.random()*messagelist.length)]);
    	}
    	function contactform() {
    		// alert("You submitted!");
	      var form_name = document.getElementById("form-name").value;
	      var form_about = document.getElementById("form-about").value;
	      var form_text = document.getElementById("form-text").value;
	      var about_collection = {
	      		"Compliment": "compliments",
	      		"Complaint": "complaints",
	      		"Other": "other comments"
	      };
	      // alert(form_about)
	      if ((form_about in about_collection) && (user.innerHTML != notSignedIn)) {
	      	db.collection(about_collection[form_about]).add({
		        email:user.innerHTML,
		        name:form_name,
		        comment:form_text
		      });
		      // console.log(user)
		      // console.log(user.innerHTML)
	      }
	      else {
	      	if (user.innerHTML == notSignedIn){
	      		alert("Sorry, you need to be signed in to do that.");
	      	}
	      }
    	}
    	function adduser(){
			// alert("adding user!");
			var email=document.getElementById("email").value;
			var password=document.getElementById("password").value;
			firebase.auth().createUserWithEmailAndPassword(
				email,password).catch(function(error) {
				// Handle Errors here
				var errorCode = error.code;
				var errorMessage = error.message;
				// alert("error "+ error.message);
				// ...	
			});
			}
			function displayUsername(email) {
				var display = document.getElementById('user');
				display.innerHTML = email;
			}
			function signIn(){
				// alert("Signing In");
				var email=document.getElementById("email").value;
				var password=document.getElementById("password").value;
				firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
					alert("Error signing in");
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
		});
			}
			function signOut(){
				firebase.auth().signOut().then(function() {
					// alert("Signed out!");
				}).catch(function(error) {
			// An error happened.
		});
			}
			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
			// User is signed in.
			// alert(user.email);
			displayUsername(user.email);
			// console.log(user.toJSON());
		} else {
			// No user is signed in.
			// alert("user not signed in");
			displayUsername(notSignedIn);
		}
	});





