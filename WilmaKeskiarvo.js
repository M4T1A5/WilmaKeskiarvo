function isNumber (o) {
  return ! isNaN (o-0) && o !== null;
}

$(document).ready(function(){
	var keskiarvo = 0, arvosanoja = 0;
	$(".undefined:nth-child(2)").each(function(){
		if(isNumber($(this).text())){
			keskiarvo += parseInt($(this).text(), 10);
			arvosanoja++;
		}
	});
	keskiarvo = keskiarvo / arvosanoja;
	if ($("#keskiarvo").length > 0){
		$("#keskiarvo").text("Keskiarvo: " + keskiarvo.toFixed(2));
	}
	else{
	$("div#l-content").append("<h4 id='#keskiarvo'>Keskiarvo: " + keskiarvo.toFixed(2) + "</h4>");
	}
});