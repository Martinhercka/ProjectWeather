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
         	$("#pressure").text(pressure+"hPa");
         	var humidity=data.main.humidity;
         	$("#humi").text(humidity+" %");
         	var wind= data.wind.speed;
         	$("#wind").text(wind+"m/s");
          var desc = data.weather[0].description;
          $("#desc").text(desc);  


          var sunset=data.sys.sunset;
          var sunset2=new Date(sunset*1000);
          var h1=sunset2.getHours();
          var m1=sunset2.getMinutes();
          $("#sunset").text(h1+":"+m1);


          var sunrise=data.sys.sunrise;
          var sunrise2=new Date(sunrise*1000);
          var h=sunrise2.getHours();
          var m=sunrise2.getMinutes();
          
          $("#sunrise").text(h+":"+m);

          
          var visibility=data.visibility;
          $("#visibility").text(visibility/1000+"km");

          var min=data.main.temp_min;
          min=-273.15+min;
          $("#min").text(min+"°C");

          var max=data.main.temp_max;
          max=-273.15+max;
          $("#max").text(max+"°C");

           
         },
         type: 'GET'

      });

    }
  });

  $('#details').click(function() {
    if( $('#details:checked').length > 0 ) {
        $(".showHide").show();

    } else {
        $(".showHide ").hide();
    }


}); 

   $("#buttonget").click(function(){
    $(".t2").show();
    });
 

});



