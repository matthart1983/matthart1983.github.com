$(function(){
	//$('#menu').slideToggle();
		var isCollapsed = true;

		$('#hamburger').click(function(){
				if (!isCollapsed ){
					//$("#menu").attr("display", "none");
					$('#menu').slideToggle('slow');
					$('#main_body').animate({ width: '670px'}, 400);
					isCollapsed =true;
				} else {
							$('#menu').slideToggle('slow');
					$('#main_body').animate({ width: '600px'},400);
								isCollapsed =false;

				}
				
		});
	$('.datepicker').datepicker();	
	$('#comment_btn').click(addComment);

	function addComment(){
		$('#comments').append("<div class='comment'><p id='message_header'><span class='agile'>Matthew Hartley: &nbsp;</span> <p id='message'>"+$("#commentInput").val() +"</p><span class='pm'>" + getCurrentTime() +  "</span> </p></div>");
		$("#commentInput").val('');
	}
	function getCurrentTime(){
		var d = new Date();
 		var hour = d.getHours();
    var min  = d.getMinutes();
    var sec  = d.getSeconds();
		 var time = hour + ":" + (min < 10 ? '0' : '') + min + ":" + (sec < 10 ? '0' : '') +  sec;

		var month = d.getMonth()+1;
		var day = d.getDate();

		var date = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' +d.getFullYear();

		return time + " " + date;
	}

	$('#commentInput').keypress(function (e) {
	  if (e.which == 13) {
			addComment();
	    return false;    //<---- Add this line
  	}
	});

$('#view_description').dblclick(function() {
	$("#view_description").toggle();
		$("#edit_description").toggle();

});

$('#update_btn').click(function () {
			addDescription();
			$("#view_description").toggle();
		$("#edit_description").toggle();
  	}
	);

function addDescription(){
	$("#view_description").html($("#descriptionInput").val());
}

$("#create_btn").attr("href", "project_request.html");

// $('#descriptionInput').keypress(function (e) {
// 	  if (e.which == 13) {
// 			addDescription();
// 	    return false;    //<---- Add this line
//   	}
// 	});

}); /*-- Doc Ready --*/


