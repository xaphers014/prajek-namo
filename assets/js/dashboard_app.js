$(function () {
	if(page_info=='biodata'){
		show_bio_data();
	}else{
		show_resume();
		
	}
	//For Biodata Functions Start HERE!
	function show_bio_data() {
		$.ajax({
			type: 'ajax',
			method: 'get',
			url: 'show_bio',
			async: true,
			dataType: 'json',
			success: function (response) {
				var html = '';
				console.log(response);
				if (response.success) {
					html += '<div class="card-block">' +
						'<p>Fullname: ' + response.data.fname + ' ' + response.data.mname + ' ' + response.data.lname + ' | Sex: ' + response.data.sex + ' | ' + ' Birthdate: ' + response.data.birthdate + ' </p>' +
						'<p>Nationality: ' + response.data.nationality + ' | ' + 'Religion: ' + response.data.religion + '</p>' +
						'<p>Home Address: ' + response.data.haddress + ' | Current Address: ' + response.data.caddress + '</p>' +
						'<br>' +
						'<p>MOTHER/GUARDIAN</p>' +
						'<p>Fullname: ' + response.data.momfname + ' | Birthdate: ' + response.data.mombday + ' | Occupation: ' + response.data.momwork + '</p>' +
						'<p>FATHER/GUARDIAN</p>' +
						'<p>Fullname: ' + response.data.dadfname + ' | Birthdate: ' + response.data.dadbday + ' | Occupation: ' + response.data.dadwork + '</p>' +
						'</div>'
					$('#bio_field').html(html);
				}

			},
			error: function () {
				alert('Error');
			}
		});
	}

	$('#btnedit_bio').click(function () {
		$.ajax({
			type: 'ajax',
			method: 'get',
			url: 'show_bio',
			async: true,
			dataType: 'json',
			success: function (response) {
				console.log(response);
				if (response.success) {
					$("#bio_fname").val(response.data.fname);
					$("#bio_mname").val(response.data.mname);
					$("#bio_lname").val(response.data.lname);
					$("#bio_nationality").val(response.data.nationality);
					$("#bio_religion").val(response.data.religion);
					$("#bio_h").val(response.data.haddress);
					$("#bio_c").val(response.data.caddress);
					$("#bio_bday").val(response.data.birthdate);
					$("#bio_momfname").val(response.data.momfname);
					$("#bio_mombday").val(response.data.mombday);
					$("#bio_momwork").val(response.data.momwork);
					$("#bio_dadfname").val(response.data.dadfname);
					$("#bio_dadbday").val(response.data.dadbday);
					$("#bio_dadwork").val(response.data.dadwork);
				}
			},
			error: function () {
				alert('Error');
			}
		});
		$('#edit_bio').modal('show');
	})

	$('#btnsubmit_bio').click(function () {
		var formData = $('#form_bio').serialize();
		$.ajax({
			type: 'ajax',
			method: 'post',
			url: 'edit_bio',
			data: formData,
			async: false,
			dataType: 'json',
			success: function (response) {
				console.log(response);
				if (response.operation == 'insert') {
					alert('data inserted');
				} else if (response.operation == 'update') {
					alert('data updated');
				}
				location.reload();

			},
			error: function () {
				alert('Error');
			}
		});
	});
	//For Biodata Functions End HERE!
	//For Resume Functions Start HERE!
	var form =  '<div class="form-group">' +
				'<input id="data_input" type="hidden" name="data_input" class="form-control">' +
	
				'<label id="super_input" class="label-control col-md-2"></label>' +
					'<div class="col-md-3">' +
						'<input id="input" type="text" name="" class="form-control">' +
					'</div>' +
				'</div>'+

				'<div class="form-group">' +
				'<label id="super_input1" class="label-control col-md-2"></label>' +
					'<div class="col-md-3">' +
						'<input id="input1" type="hidden" name="" class="form-control">' +
					'</div>' +
				'</div>' +

				'<div class="form-group">' +
				'<label id="super_input2" class="label-control col-md-2"></label>' +
					'<div class="col-md-3">' +
						'<input id="input2" type="hidden" name="" class="form-control">' +
					'</div>' +
				'</div>' +

				'<div class="form-group">' +
				'<label id="super_input3" class="label-control col-md-2"></label>' +
					'<div class="col-md-3">' +
						'<input id="input3" type="hidden" name="" class="form-control">' +
					'</div>' +
				'</div>'	

	$('#btnedit_res').click(function () {

		$('#resume_dropdown').css({
			'display': 'block'
		});
	});

	$('#addqual').click(function () {
		var i = 0;
		$('#edit_resume').modal('show');
		$('.modal-title').text('Add Qualifications/Skills');
		$('#form_resume').html(form);
		$('#super_input').text('Add Skill');

		$('#input').attr('name','skill');
		$('#input1').css({'display':'none'});
		$('#input2').css({'display':'none'});
		$('#input3').css({'display':'none'});	

		$('#super_input1').css({'display':'none'});
		$('#super_input2').css({'display':'none'});
		$('#super_input3').css({'display':'none'});	

		$('#data_input').val('skill');
	})

	$('#addwork').click(function () {
		$('#edit_resume').modal('show');
		$('.modal-title').text('Add Working Experience');	
		$('#form_resume').html(form);

		$('#super_input').text('Position');	
		$('#super_input1').text('Company');
		$('#super_input2').text('Date Started');	
		$('#super_input3').text('Date Ended');

		$('#input1').attr('type','text');
		$('#input2').attr('type','date');
		$('#input3').attr('type','date');

		$('#input').attr('name','position');
		$('#input1').attr('name','company');
		$('#input2').attr('name','date_start');
		$('#input3').attr('name','date_end');

		$('#data_input').val('work');
		
		
	})
	$('#addacco').click(function () {
		$('#edit_resume').modal('show');
		$('.modal-title').text('Add Accomplishments');	
		$('#form_resume').html(form);

		$('#super_input').text('Accomplishment');	
		$('#super_input1').text('Affiliation');

		$('#input1').attr('type','text');

		$('#input').attr('name','accomplishment');
		$('#input1').attr('name','affiliation');

		$('#data_input').val('accomplishment');
		
	})
	$('#addeduc').click(function () {
		$('#edit_resume').modal('show');
		$('.modal-title').text('Add Educational Background');
		$('#form_resume').html(form);
		
		$('#super_input').text('Level');	
		$('#super_input1').text('Name of School');
		$('#super_input2').text('Date Started');	
		$('#super_input3').text('Date Graduated');

		$('#input1').attr('type','text');
		$('#input2').attr('type','date');
		$('#input3').attr('type','date');

		$('#input').attr('name','level');
		$('#input1').attr('name','school');
		$('#input2').attr('name','start');
		$('#input3').attr('name','graduate');

		$('#data_input').val('education');		

	})

	$('#addsemi').click(function () {
		$('#edit_resume').modal('show');
		$('.modal-title').text('Add Seminars Attended');
		$('#form_resume').html(form);

		$('#super_input').text('Name of Seminar');	
		$('#super_input1').text('Date');
		$('#super_input2').text('Conducted by');	

		$('#input1').attr('type','date');
		$('#input2').attr('type','text');

		$('#input').attr('name','seminar');
		$('#input1').attr('name','seminar_date');
		$('#input2').attr('name','conductedby');

		$('#data_input').val('seminar');		
		
	})

	$('#btnsubmit_resume').click(function(){
		var formData = $('#form_resume').serialize();
		console.log(formData);
		$.ajax({
			type: 'ajax',
			method: 'post',
			url: 'edit_resume',
			data: formData,
			async: false,
			dataType: 'json',
			success: function (response) {
				console.log(response);
				if(response.success){
					alert('inserted');
					location.reload();					
				}
			},
			error: function () {
				alert('Error');
			}
		});
	})

	function show_resume() {
		$.ajax({
			type: 'ajax',
			method: 'get',
			url: 'show_resume',
			async: true,
			dataType: 'json',
			success: function (data) {
				console.log(data);
				var skills = '';
				var xp = '';
				var accomplishments = '';
				var seminar = '';
				var education = '';
				var i;
				if (data.seminars){
					for (i = 0; i < data.seminars.length; i++) {
						seminar += '<li>'+data.seminars[i].seminar+'</li>'+
									'<li>'+data.seminars[i].seminar_date+'</li>'+
									'<li>'+data.seminars[i].conductedby+'</li>';
					}
					$('#resume_seminar').html(seminar);
				}
				if (data.accomplishment){
					for (i = 0; i < data.accomplishment.length; i++) {
						accomplishments += '<li>'+data.accomplishment[i].accomplishment+'</li>'+
											'<li>'+data.accomplishment[i].affiliation+'</li>';
					}
					$('#resume_accomplishments').html(accomplishments);
				}
				if (data.skills){
					for (i = 0; i < data.skills.length; i++) {
						skills += '<li>'+data.skills[i].skill+'</li>';
					}
					$('#resume_skills').html(skills);
				}
				if (data.workxp){
					for (i = 0; i < data.workxp.length; i++) {
						xp += '<li>'+data.workxp[i].position+'</li>'+
								'<li>'+data.workxp[i].company+'</li>'+
								'<li>'+data.workxp[i].date_start+'</li>'+
								'<li>'+data.workxp[i].date_end+'</li>';
					}
					$('#resume_xp').html(xp);
				}

				if (data.education){
					for (i = 0; i < data.education.length; i++) {
						education += '<li>'+data.education[i].level+'</li>'+
										'<li>'+data.education[i].school+'</li>'+
										'<li>'+data.education[i].start+'</li>'+
										'<li>'+data.education[i].graduated+'</li>';
					}
					$('#resume_education').html(education);
				}
				

				
			},
			error: function () {
				alert('Error');
			}
		});
	}
})
