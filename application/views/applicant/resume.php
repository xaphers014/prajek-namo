<div class='main-container'>
	<!-- Page wrapper  -->
	<div class="page-wrapper">
		<!-- Container fluid  -->
		<div class="container-fluid">
			<!-- Bread crumb and right sidebar toggle -->
			<div class='card-content'>
				<p class='path-nav'>Home
					<i class="fa fa-chevron-right"></i> Resume</p>
			</div>

			<div class="card-content">
				<h4 class='resume-title'>QUALIFICATIONS</h4>
				<p>
					<div id='resume_skills'>

					</div>
				</p>
				<br>

				<h4 class='resume-title'>WORK EXPERIENCE</h4>
				<p>
					<div id='resume_xp'>

					</div>
				</p>
				<br>

				<h4 class='resume-title'>ACCOMPLISHMENTS</h4>
				<p>
					<div id='resume_accomplishments'>

					</div>
				</p>
				<br>

				<h4 class='resume-title'>EDUCATION</h4>
				<p>
					<div id='resume_education'>

					</div>
				</p>

				<div class='resume-edit'>
					<div class="dropdown">
						<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Edit Resume
							<span class="caret"></span>
						</button>
						<ul class="dropdown-menu">
							<li>
								<a id='addqual' type='button' class='btn btn-primary'>Add Qualifications/Skills</a>
							</li>
							<li>
								<a id='addwork' type='button' class='btn btn-primary'>Add Working Experince</a>
							</li>
							<li>
								<a id='addacco' type='button' class='btn btn-primary'>Add Accomplishments</a>
							</li>
							<li>
								<a id='addeduc' type='button' class='btn btn-primary'>Add Education</a>
							</li>
							<li>
								<a id='addsemi' type='button' class='btn btn-primary'>Add Seminars Attended</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

		</div>

		<div id="edit_resume" class="modal fade" tabindex="-1" role="dialog">
			<div class="modal-dialog modal-form" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h1 class="modal-title"></h1>
					</div>
					<div class="modal-body">
						<form id="form_resume" class="form-horizontal">
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-danger" data-dismiss="modal">
							<i class='fa fa-times btn-icon'></i>Cancel</button>
						<button type="button" id="btnsubmit_bio" class="btn btn-primary">
							<i class='fa fa-save btn-icon'></i>Save</button>
					</div>
				</div>
				<!-- /.modal-content -->
			</div>
			<!-- /.modal-dialog -->
		</div>

	</div>
	<!-- /.modal-dialog -->
</div>
<script>
	var page_info = 'nobiodata';

</script>
