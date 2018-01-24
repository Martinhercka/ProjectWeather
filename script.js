$(document).ready(function() {

	$('#buttonget').click(function(){

		var city = $('#city').val();
		
		var code=$('#code').val();
		if(city.length>1){
			var urllink='http://api.openweathermap.org/data/2.5/weather?q=';
			urllink = urllink+city;

			if(code.length==2){
			urllink = urllink+','+code;

		}
			urllink=urllink+'&appid=9f3132ee22da51a2a27391d8a89eb76f';
			console.log(urllink);
			

	}


$.ajax({
	url: urllink,
	data: {format: 'json'},
	error : function(){

	},

	dataType:'json',
	success: function(data){
		console.log("temp"+data.main.temp);
	},
	type: 'GET'







});




})







});