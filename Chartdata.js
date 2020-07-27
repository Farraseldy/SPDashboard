var firebasedata_do=[];
var firebasedata_ph=[];
var firebasedata_tempr=[];


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
            let arrChart_do = [];
            let arrChart_ph = [];
            let arrChart_tempr = [];
            
            for (var x in obj){
                arr.push(obj[x]);
            }
        
            var tempr = {temprval :arr[arr.length -1].val_tempr };
            var pH = {phval :arr[arr.length -1].val_ph };
            var dsox = {dsoxval :arr[arr.length -1].val_do };

            for (i=7; i>0; i--){
                arrChart_do.push(arr[arr.length-i].val_do);
                arrChart_ph.push(arr[arr.length-i].val_ph);
                arrChart_tempr.push(arr[arr.length-i].val_tempr);
              }
      
            firebasedata_do = arrChart_do;
            firebasedata_ph = arrChart_ph;
            firebasedata_tempr = arrChart_tempr;

        
            //Random Test
            var ii = Math.floor(Math.random()*8);
            var tempr = {temprval :arr[arr.length -ii].val_tempr};
            var pH = {phval :arr[arr.length -ii].val_ph};
            var dsox = {dsoxval :arr[arr.length -ii].val_do};
            //End of Random Test

            //console.log([tempr, pH, dsox]);
            console.log(arr[arr.length -ii].val_tempr);
            $("#val_do").text(dsox.dsoxval)
            $("#val_ph").text(pH.phval)
            $("#val_tempr").text(tempr.temprval)
        },
        error: function(error) {
            console.log('Error: ' + error);
        }
        
    });
}
/* DO Chart */
var ctx = document.getElementById('chartdo');
var olddata =  [9, 10, 5, 2, 20, 25, 10];
var newdata =  [9, 5, 10, 2, 0, 10, 20];


     var doUpChart = new Chart(ctx, {
         // The type of chart we want to create
         type: 'line',

         // The data for our dataset
         data: {
             labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
             datasets: [{
                 label: 'DO Level (%)',
                 //backgroundColor: 'rgba(0,0,0,0.1)',
                 borderColor: '#46E3EC',
                 data: olddata,
             }]
         },

         // Configuration options go here
         options: {}
     });

     function updateChart_do(){
         doUpChart.data.datasets[0].data = firebasedata_do;
         doUpChart.update()
     }
     /* end of DO Chart */


/* pH Chart */
var ctx = document.getElementById('chartph');
var olddata =  [9, 10, 5, 2, 20, 25, 10];
var newdata =  [9, 5, 10, 2, 0, 10, 20];


     var phUpChart = new Chart(ctx, {
         // The type of chart we want to create
         type: 'line',

         // The data for our dataset
         data: {
             labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
             datasets: [{
                 label: 'pH Level',
                 //backgroundColor: 'rgba(0,0,0,0.1)',
                 borderColor: '#46E3EC',
                 data: olddata,
             }]
         },

         // Configuration options go here
         options: {}
     });

     function updateChart_ph(){
         phUpChart.data.datasets[0].data = firebasedata_ph;
         phUpChart.update()
     }
     /* end of pH Chart */


/* tempr Chart */
var ctx = document.getElementById('charttempr');
var olddata =  [9, 10, 5, 2, 20, 25, 10];
var newdata =  [9, 5, 10, 2, 0, 10, 20];


     var temprUpChart = new Chart(ctx, {
         // The type of chart we want to create
         type: 'line',

         // The data for our dataset
         data: {
             labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
             datasets: [{
                 label: 'Temperature Level (°C)',
                 //backgroundColor: 'rgba(0,0,0,0.1)',
                 borderColor: '#46E3EC',
                 data: olddata,
             }]
         },

         // Configuration options go here
         options: {}
     });

     function updateChart_tempr(){
         temprUpChart.data.datasets[0].data = firebasedata_tempr;
         temprUpChart.update()    
     }
     /* end of tempr Chart */

     function updateChart_all(){
        temprUpChart.data.datasets[0].data = firebasedata_tempr;
        temprUpChart.update()
        phUpChart.data.datasets[0].data = firebasedata_ph;
        phUpChart.update()
        doUpChart.data.datasets[0].data = firebasedata_do; 
        doUpChart.update()
     }
     