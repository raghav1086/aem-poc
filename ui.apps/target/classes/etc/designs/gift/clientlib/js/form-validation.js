$(function(){
    alert(234234);
	var required = ["name", "address", "email", "mobile", "message"];
	
	mobile = $("#mobile");
	
	emptyerror = "Please fill the required value!";
	mobileerror = "Please fill the correct value!";
	
	$("#contactForm").submit(function() {
		for (i=0;i<required.length;i++) {
			var input = $("#"+required[i]);
			if((input.val() == "") || (input.val() == "emptyerror")) {
				input.addClass("mustfill");
				input.val(emptyerror);
			} else {
				input.removeClass("mustfill");
			}
		}
		
		// Mobile field validation 
		if (!/^[0-9]+$/.test(mobile.val())) {
			mobile.addClass("mustfill");
			mobile.val(mobileerror);
		}
		
		//Any input on the page have the class 'mustfill' the form will not submit
		if ($(":input").hasClass("mustfill")) {
			return false;
		} else {
			return true;
		}
	});
	
	// Clears fields in the form when the user clicks on them
	$(':input').focus(function() {
		if ($(this).hasClass("mustfill")) {
			$(this).val("");
			$(this).removeClass("mustfill");
		}
	});
});