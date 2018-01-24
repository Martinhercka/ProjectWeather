$(document).ready(function() {
  $("#buttonget").click(function(){
    var city=$("#city").val();
    var code=$("#code").val();
    if(city.length>1){
      var urllink='http://api.openweathermap.org/data/2.5/weather?q=';
      urllink=urllink + city;
      if(code.length==2){
           urllink=urllink+','+code;
      }
      urllink=urllink+'&appid=9f3132ee22da51a2a27391d8a89eb76f';
console.log(urllink);
       $.ajax({
         url: urllink,
         data : { format: 'json' } ,
         error : function(){
         // vypis chyby
         },
         dataType: 'json',
         success : function(data){
         	var temp=data.main.temp;
         	temp=-273.15+temp;
         	temp=Math.round(temp);
         	$("#temp").text(temp+"°C");
         	var pressure=data.main.pressure;
         	$("#pressure").text(pressure+"Pa");
         	var humidity=data.main.humidity;
         	$("#humi").text(humidity+" m3");
            
            console.log("desc:"+data.weather[0].description);
         },
         type: 'GET'

      });

    }
  });
 

});



