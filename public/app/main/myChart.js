var data = {
    labels: ["Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
        }
    ]
}


window.onload = function(){
    var canvas = document.getElementById("canvas-holder");
    var ctx = canvas.getContext("2d");
    window.myPie = new Chart(ctx).Line(data,{
        responsive:true
    });
}

