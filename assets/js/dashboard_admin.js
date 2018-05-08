$(function () { 

    show_company();
    show_applicant();
    show_pending_company();
    show_pending_applicant();

    //Notification
    $.ajax({
        type: 'ajax',
        method: 'get',
        url: 'notification',
        async: true,
        dataType: 'json',
        success: function (response) {
            var applicant = response.count_applicant[0].count_applicant;
            var company = response.count_company[0].count_company;
            
            $('#app_no').html(applicant);
            $('#company_no').html(company);
            //Charts
            if (response.success) {
                new Chart($("#user_stat_chart"), {
                    type: 'doughnut',
                    data: {
                        labels: ["Applicant", "Company"],
                        datasets: [
                            {
                                label: "Users",
                                backgroundColor: ["#f1c40f", "#1abc9c"],
                                data: [applicant, company]
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Users'
                        }
                    }
                })

                new Chart($("#pending_user_stat_chart"), {
                    type: 'doughnut',
                    data: {
                        labels: ["Pending Applicant", "Pending Company"],
                        datasets: [
                            {
                                label: "Pending Users",
                                backgroundColor: ["#2ecc71", "#e67e22"],
                                data: [5, 8]
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Pending Users'
                        }
                    }
                })
            }
        },
        error: function(){

        }
    })
    //-------------------------------------------------------------------------------------

    function show_company() {
        $.ajax({
            type: 'ajax',
            method: 'get',
            url: 'show_company',
            async: false,
            dataType: 'json',
            success: function (response) {
                var html = '';
                if (response.success) {
                    for (i = 0; i < response.data.length; i++) {
                        html += '<tr>' +
                            '<td>' + response.data[i].comp_name + '</td>' +
                            '<td>' + response.data[i].comp_desc + '</td>' +
                            '<td>' + response.data[i].comp_hr + '</td>'+
                            '</tr>';
                    }
                    $('#show_company').html(html)
                }
            },
            error: function (response) {

            }
        })
    }

    function show_applicant() {
        $.ajax({
            type: 'ajax',
            method: 'get',
            url: 'show_applicant',
            async: false,
            dataType: 'json',
            success: function (response) {
                var html = '';
                if (response.success) {
                    for (i = 0; i < response.data.length; i++) {
                        html += '<tr>' +
                            '<td>' + response.data[i].user_name + '</td>' +
                            '<td>' + response.data[i].fname + ' ' + response.data[i].mname + ' ' + response.data[i].lname + '</td>' +
                            '<td>' + response.data[i].sex + '</td>' +
                            '</tr>';
                    }
                    $('#show_applicant').html(html)
                }
            },
            error: function (response) {

            }
        })
    }

    function show_pending_applicant() {
        $.ajax({
            type: 'ajax',
            method: 'get',
            url: 'show_pending_applicant',
            async: false,
            dataType: 'json',
            success: function (response) {
                console.log(response);
                var html = '';
                if (response.success) {
                    for (i = 0; i < response.data.length; i++) {
                        html += '<tr>' +
                            '<td>' + response.data[i].user_name + '</td>' +
                            '<td>' + response.data[i].user_email + '</td>' +
                            '<td>' + '<a type="button" class="btn btn-success"><i class="fa fa-user-check btn-icon"></i>Approve</a>&nbsp<a type="button" class="btn btn-danger"><i class="fa fa-user-times btn-icon"></i>Deny</a>' + '</td>' +
                            '</tr>';
                    }
                    $('#show_pending_applicant').html(html)
                }
            },
            error: function (response) {
                alert('error');
            }
        })
	}

    function show_pending_company() {
        $.ajax({
        	type: 'ajax',
        	method: 'get',
        	url: 'show_pending_company',
        	async: false,
        	dataType: 'json',
        	success: function (response) {
                console.log(response);
        		var html = '';
        		if (response.success) { 
        			for (i = 0; i < response.data.length; i++) {
        				html += '<tr>' +
                            '<td>' + response.data[i].user_name + '</td>' +
        					'<td>' + response.data[i].user_email + '</td>' +
        					'</tr>';
        			}
        			$('#show_pending_company').html(html)
        		}
        	},
        	error: function (response) {
                alert('error');
        	}
        })
	}
})