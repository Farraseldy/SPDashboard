/* global parameters */
//var ctx = document.getElementById('myChart').getContext('2d');


var param = {};



$(document).ready(function () {

    setInterval(fetchdata,5000); //Set Interval
}); 

function fetchdata (){
    $.ajax({
        url: 'https://smartpond-dashboard.firebaseio.com./smartpond-dashboard.json',
        type: "GET", /* POST or GET OK */
        data: JSON.stringify(param),

        success: function (data) {
            let obj = data;
            let arr = [];
      
            
            for (var x in obj){
                arr.push(obj[x]);
            }
        
            /* var tempr = {temprval :arr[arr.length -1].val_tempr };
            var pH = {phval :arr[arr.length -1].val_ph };
            var dsox = {dsoxval :arr[arr.length -1].val_do }; */

            //Random Test
            /* var ii = Math.floor(Math.random()*8);
            var tempr = {temprval :arr[arr.length -ii].val_tempr };
            var pH = {phval :arr[arr.length -ii].val_ph };
            var dsox = {dsoxval :arr[arr.length -ii].val_do }; */
            //End of Random Test

            /* console.log([tempr, pH, dsox]);
            $("#val_do").text(dsox.dsoxval)
            $("#val_ph").text(pH.phval)
            $("#val_tempr").text(tempr.temprval) */
        },
        error: function(error) {
            console.log('Error: ' + error);
        }
        
    });
}
