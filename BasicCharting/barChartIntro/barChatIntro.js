$(document).ready ( function(){

    var w = 200;
    var h = 100;
    var padding = 2;
    var dataSet = [5,10,15,20,25]    

    var svg = d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h);
    svg.selectAll("rect")                
        .data(dataSet)
        .enter()
        .append("rect")
            .attr("x",function (d,i) {
                return (i*(w/dataSet.length));
            })
            .attr("y",function (params) {
                return h-params*4;
            })
            .attr("width",(w/dataSet.length) - padding)
            .attr("height",function (d) {
                return d*4;
            });

});