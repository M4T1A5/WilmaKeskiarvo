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
	console.log(keskiarvo);
});