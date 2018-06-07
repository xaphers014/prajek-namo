var lockout = false;
var locked = false;

$(function () {
	$('#regform').submit(function () {
		var formData = $('#regform').serialize();
		console.log(formData);
		$.ajax({
			type: 'ajax',
			method: 'post',
			url: 'main/registerUser',
			data: formData,
			async: false,
			dataType: 'json',
			success: function (response) {
				if (response.success == 'added') {
					$('#toaster span').html('Succesfully Registered!');
<<<<<<< HEAD
					$('input').val('');
					toaster_register();

				} else if (response.success == 'existing') {
					msg = 'Username already exist';
					toaster_error(msg);
=======

					$('input').val('');


					toaster_register();

				} else if (response.success == 'existing') {
					//var taken = $('#toaster span').html('shit');
					//taken.addClass('danger');

					var taken = document.querySelector('#toaster span');
					taken.innerText = "shit";
					taken.className = "danger";


>>>>>>> 39067baf291a948fa80de3c66103b61ece89c339
					toaster_register();

				} else if (response.success == 'mismatch') {
					msg = 'Your password did not match';
					toaster_error(msg);
					toaster_register();

				} else if (response.success == 'invalid') {
					msg = 'Username contains invalid characters';
					toaster_error(msg);
					toaster_register();

				}
			},
			error: function () {

				msg = 'OOPS! Something went wrong';
				toaster_error(msg);
				toaster_register();
			}
		});
		return false;
	});
	$('#loginform').submit(function () {
		if (locked){
			$('#toaster span').html("You've been locked-out. Come back after 30 minutes");
			toaster_login();

<<<<<<< HEAD
					$('#toaster span').html('Welcome! ' + response.user);
					toaster_login();
					setTimeout(() => { location.reload(); }, 3000);
				} else {

					if(response.message=="3"){
						var msg = 'STAHP! YOU ARE BLOCKED FOREVER!';
						toaster_error(msg);
						toaster_login();
					}else{
						msg = 'Wrong Login Credentials!';
						toaster_error(msg);
=======
		}else{
			var formData = $('#loginform').serialize();
			console.log(formData);
			$.ajax({
				type: 'ajax',
				method: 'post',
				url: 'main/loginUser',
				data: formData,
				async: false,
				dataType: 'json',
				success: function (response) {
					console.log(response);
					if (response.success) {

						$('#toaster span').html('Welcome! ' + response.user);
>>>>>>> 39067baf291a948fa80de3c66103b61ece89c339
						toaster_login();
						setTimeout(() => {
							location.reload();
						}, 3000);
					} else {
						if (response.message == "3") {
							$('#toaster span').html("You've been locked-out. Come back after 30 minutes");
							lockout = true;

							toaster_login();
						} else {
							$('#toaster span').html('Wrong Login Credentials!');
							toaster_login();
						}
					}
<<<<<<< HEAD

				}
			},
			error: function () {
				msg = 'OOPS! Something went wrong';
				toaster_error(msg);
				toaster_login();
			}
		});
=======
				},
				error: function () {
					$('#toaster span').html('OOPS! Something went wrong');
					toaster_login();
				}
			});
		}
>>>>>>> 39067baf291a948fa80de3c66103b61ece89c339
		return false;
	});
	setInterval(function () {
		if (!lockout) {
			$.ajax({
				method: 'post',
				url: 'main/locktimer',
				dataType: 'json',
				success: function (response) {
					if (response.lock) {
						lockout = true;

					}
				}
			});
		} else if(lockout){
			locked = true;
			$.ajax({
				method: 'post',
				url: 'main/locktimer',
				dataType: 'json',
				success: function (response) {
					if (response.lockout == 0) {
						lockout = false;
						$.ajax({
							url: 'main/unlock'
						})
					}
				}
			});

		}
	}, 1000)
});

function toaster_login() {
	var x = document.getElementById("toaster");
<<<<<<< HEAD
	x.className = "t_login show";
	setTimeout(() => { x.className = x.className.replace("show", ""); }, 3000);
=======
	x.className = "show";
	$(".button").attr('disabled', 'disabled');
	setTimeout(() => {
		x.className = x.className.replace("show", "");
		$(".button").removeAttr('disabled');
	}, 3000);
>>>>>>> 39067baf291a948fa80de3c66103b61ece89c339
}

function toaster_register() {
	var x = document.getElementById("toaster");
	x.className = "t_register show";
<<<<<<< HEAD
	setTimeout(() => { x.className = x.className.replace("t_register show", "") }, 3000);

}

function toaster_error(msg) {
	var err = document.querySelector('#toaster span');
	err.innerText = msg;
	err.className = "danger";
	setTimeout(() => { err.className = ""; }, 3000);
}
=======
	setTimeout(() => {
		$(".button").attr('disabled', 'disabled');		
		x.className = x.className.replace("t_register show", "")
	}, 3000);
	$(".button").removeAttr('disabled');	
}
>>>>>>> 39067baf291a948fa80de3c66103b61ece89c339
