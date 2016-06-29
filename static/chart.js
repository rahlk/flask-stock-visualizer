// custom javascript
$(function () {
    console.log('jquery is working!');
    createGraph();
});

function createGraph() {
    var width = 960,
        height = 500;

        // margin = {top: 20, right: 20, bottom: 30, left: 50},

    var x = d3.scale.linear()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var line = d3.svg.line()
        .x(function (d) {
            return x(d.round);
        })
        .y(function (d) {
            return y(d.fscore);
        });

    var svg = d3.select("#chart").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g");
        // .attr("transform", "translate(" + margin.left + "," + margin.right + ")");

    d3.json("/dataroute", function (error, data) {
        if (error) throw error;

        x.domain(d3.extent(data.children, function (d) {
            return d.round;
        }));

        y.domain(d3.extent(data.children, function (d) {
            return d.fscore;
        }));
        // console.log(data);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0" + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.7em")
            .style("text-anchor", "end")
            .text("F1 Score");

        svg.append("path")
            .datum(data.children)
            .attr("class", "line")
            .attr("d", line);
    });
}