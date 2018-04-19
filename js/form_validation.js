/*jslint browser: true*/
/*global $*/  

$("form[name='subscribe']").validate({
	onfocusout: false,
	onkeyup: false,
	onclick: false,
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
    },
    messages: {
      name: "Please fill the required field.",
      email: {
        required: "Please fill the required field.",
        email: "Email address seems invalid."
      },
    },
	errorElement: "em",
	errorContainer: $('.error_message'),
    submitHandler: function() {
		$(".sucess_message").show();
//		form.submit();
    }
});