var toggle_b = document.getElementById("toggle");
var header = document.getElementById("name");
var toggle = 0;
var revenues = ["Individual Income Taxes", "Corporate Income Taxes", "Payroll Taxes", "Excise Taxes", "Other Taxes"]
var finance_1948 = [46.5, 23.3, 9, 17.7, 3.5]
var finance_2009 = [43.5, 6.6, 42.3, 3, 4.7]
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(finance_1948);
var barEnter = barUpdate.enter().append("div");
barEnter.transition().duration(2000).style("width", function(d) {
  return d * 10 + "px"; });
barEnter.text(function(d) { return d; });
bar.data(revenues).append("p").attr("style", "float:none").text(function(d){
  return d; });

var toggler = function() {
  if (toggle) {
    toggle = 0;
    header.innerHTML = "Federal Revenue Breakdown for 1948"
    bar = chart.selectAll("div");
    barUpdate = bar.data(finance_1948);
    barEnter.transition().duration(2000).style("width", function(d) {
      return d * 10 + "px"; });
    barEnter.text(function(d) { return d; });
    bar.data(revenues).append("p").attr("style", "float:none").text(function(d){
      return d; });
  }
  else {
    toggle = 1;
    header.innerHTML = "Federal Revenue Breakdown for 2009"
    bar = chart.selectAll("div");
    barUpdate = bar.data(finance_2009);
    barEnter.transition().duration(2000).style("width", function(d) {
      return d * 10 + "px"; });
    barEnter.text(function(d) { return d; });
    bar.data(revenues).append("p").attr("style", "float:none").text(function(d){
      return d; });
  }
}

toggle_b.addEventListener('click', toggler)
