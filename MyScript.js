function set_content_in_divs(paragraphs){
	$.each(paragraphs, function(i, d){
		p = $("#p-" + i)
		p.html("<p>" + d + "</p>")
	});
}

$("#click-header").click(function(){
	$.getJSON("http://sf-pyw.mosyag.in/m04/api/forecasts", function(data){
	set_content_in_divs(data["prophecies"]);
});
})