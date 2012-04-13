$(document).ready(function(){
	$("tr").each(function(){
		$(this + ":nth-child(2)").css("background", "red");
	});
});