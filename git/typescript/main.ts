import { Series } from './serie.js';
import { dataSeries } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasonsElm: HTMLElement = document.getElementById("avg-seasons")!;

renderSeriesInTable(dataSeries);

avgSeasonsElm.innerHTML = `${getAvgSeasons(dataSeries)}`

function renderSeriesInTable(series: Series[]): void {
    console.log('Desplegando series');
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                           <td>${s.name}</td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
  });
}

function getAvgSeasons(series: Series[]): number {
  let totalSeasons: number = 0;
  series.forEach((series) => totalSeasons = totalSeasons + series.seasons);
  let seasonsAvg: number = totalSeasons / series.length 
  return seasonsAvg;
}
              