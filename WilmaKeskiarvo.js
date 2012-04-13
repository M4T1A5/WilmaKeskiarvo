$(document).ready(function(){
	$("tr").each(function(){
		$(this).eq(2).css("background", "red");
	});
});