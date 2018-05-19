$(document).ready(function(){
	
	$("#Signup").click(function(){
		$("#Signuptemplate").show();
		$("#Landingpagetemplate").hide();
	})
	
	
	
	// Check datavalid
	
	$("#firstname_error_message").hide();
	$("#lastname_error_message").hide();
	$("#username_error_message").hide();
	$("#password_error_message").hide();
	$("#email_error_message").hide();
	
		var error_firstname=false;
		var error_lastname=false;
		var error_username=false;
		var error_password=false;
		var error_email=false;
		
		$("#firstname").focusout(function(){
			checkfirstname()
		})
		function checkfirstname(){
			var pattern=new RegExp(/^[a-z ,.'-]+$/i);
			if(pattern.test($("#firstname").val()))
			{
				$("#firstname_error_message").hide();
			}
			else{
			$("#firstname_error_message").html("Name could contain letters only");
			$("#firstname_error_message").show();
			error_firstname=true;
			};
		}
		function checklastname(){
			var pattern=new RegExp(/^[a-z ,.'-]+$/i);
			if(pattern.test($("#lastname").val()))
			{
				$("#lastname_error_message").hide();
			}
			else{
			$("#lastname_error_message").html("Name could contain letters only");
			$("#lastname_error_message").show();
			error_lastname=true;
			};
		}
		
		$("#lastname").focusout(function(){
			checklastname();
		})
		
		function checkemail(){
			var pattern=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
			if(pattern.test($("#email").val()))
			{
				$("#email_error_message").hide();
			}
			else{
			$("#email_error_message").html("Invalid email address");
			$("#email_error_message").show();
			error_email=true;
			};
		}
		$("#email").focusout(function(){
			checkemail();
			findemail();
		})
		
		function checkusername(){
			var usename_length=$("#username").val().length;
			if(usename_length >= 8)
			{
				$("#username_error_message").hide();
			}
			else{
			$("#username_error_message").html("Usernamer should contain at least 8 characters");
			$("#username_error_message").show();
			error_username=true;
			};
		}
		$("#username").focusout(function(){
			checkusername();
			findusername();
		})
		
		function checkpassword(){
			var password_length=$("#password").val().length;
			if(password_length > 8)
			{
				$("#password_error_message").hide();
			}
			else{
			$("#password_error_message").html("Password should contain at least between 8 characters");
			$("#password_error_message").show();
			error_password=true;
			};
		}
		$("#password").focusout(function(){
			checkpassword();
		})
	
	
	
	
	// Signup for an account
	$("#Signupform").submit(function(event){
		error_firstname=false;
		error_lastname=false;
		error_username=false;
		error_password=false;
		error_email=false;
		
		checkfirstname();
		checklastname();
		checkusername();
		checkpassword();
		checkemail();
		
		if(error_firstname==false && error_lastname==false && error_username==false && error_password==false && error_email==false){
			event.preventDefault();
			postaccount();
			$("#Signuptemplate").hide();
			$("#Landingpagetemplate").show();
		}
		else{
			return false
		}
		
		
		
	});
	
	
	function postaccount(){
    	
    	// PREPARE FORM DATA
    	var formData = {
    		firstname : $("#firstname").val(),
    		lastname :  $("#lastname").val(),
    		username: $("#username").val(),
    		password: $("#password").val(),
    		email: $("#email").val()
    	}
    	
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : window.location + "addaccount",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(user) {
				alert("Account was created successfully");
			},
			error : function(e) {
				alert("Account was not successfully created");
			}
		});
    	
    	// Reset FormData after Posting
    	deleteregisterform();
 
    }
    
    function deleteregisterform(){
    	$("#firstname").val("");
    	$("#lastname").val("");
    	$("#username").val("");
    	$("#password").val("");
    	$("#email").val("");
    }
    
    
// Check existence account
    
    
    function findusername(){
		$.ajax({
			type : "GET",
			url : "findallaccount",
			success: function(result){
				$('#getResultDiv ul').empty();
				$.each(result, function(i, user){
					if(user.username==$("#username").val()){
						$("#invalidusername_error").html("Username has already been used");
					}
				});
				console.log("Success: ", result);
			},
			error : function(e) {
			}
		});	
	}
    
    function findemail(){
		$.ajax({
			type : "GET",
			url : "findallaccount",
			success: function(result){
				$('#getResultDiv ul').empty();
				$.each(result, function(i, user){
					if(user._id==$("#email").val()){
						$("#invalidemail_error").html("Email has already been used");
					}
				});
				console.log("Success: ", result);
			},
			error : function(e) {
			}
		});	
	}
}) 

