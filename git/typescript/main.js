import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var avgSeasonsElm = document.getElementById("avg-seasons");
renderSeriesInTable(dataSeries);
avgSeasonsElm.innerHTML = "".concat(getAvgSeasons(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                           <td>").concat(s.name, "</td>\n                           <td>").concat(s.channel, "</td>\n                           <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (series) { return totalSeasons = totalSeasons + series.seasons; });
    var seasonsAvg = totalSeasons / series.length;
    return seasonsAvg;
}
