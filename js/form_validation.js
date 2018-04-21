/*jslint browser: true*/
/*global $, setTimeout*/ 

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
	invalidHandler: function() {
		$('.spin_icon').css('display', 'block');
		$('.success_message').css('display', 'none');
		$('.error_message').css('display', 'none');
		$('.error').css('opacity', '0');
			setTimeout(function(){			
				$('.spin_icon').css('display', 'none');
				$('.error').css('opacity', '1');
				$('.error_message').slideDown("fast");
			}, 2000)
	},
    submitHandler: function() {
		$('.spin_icon').css('display', 'block');
		$('.error_message').css('display', 'none');
		$('.success_message').css('display', 'none');
		setTimeout(function(){
			$('.spin_icon').css('display', 'none');		
			$('.success_message').slideDown("fast");
			$("form[name='subscribe']").children('input').val('');
		}, 2000)		
    }
});
