$(document).ready(function(){
	var keskiarvo = 0;
	$(".undefined:nth-child(2)").each(function(){
		if(!$(this).text().isNan){
			keskiarvo += parseInt($(this).text(), 10);
		}
	});
	console.log(keskiarvo);
});