import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ColorHelper } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // template: `
  // <ngx-charts-pie-chart
  //   [results]="data"
  //   [view]="view"
  //   [legend]="true"
  //   [legendTitle]="legendTitle"
  //   [labels]="true"
  //   [doughnut]="false">
  //   (select)="onCountrySelected($event)">
  // </ngx-charts-pie-chart>
  // `
})
export class DashboardComponent implements OnInit {

  // chart options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendTitleCountries: string = "Países";
  legendTitleCities: string = "Cidades";
  view: [number, number] = [700, 400];

  data: any[] = [];
  cityData: any[] = [];


  constructor(private dashboardService: DashboardService){}



  ngOnInit() {
    this.dashboardService.getChartCountryData().subscribe(result => {
      this.data = result.map(entry => {
        return {
          name: entry.name,
          value: entry.userQty
        };
      });
    }, error => {
      console.error("Error fetching data:", error);
    });
  }

  onSelect(event: any): void {
    console.log("selected: "+ event.name);
    this.dashboardService.getChartCityData(event.name).subscribe(result => {
      this.cityData = result.map(entry => {
        return {
          name: entry.name,
          value: entry.userQty
        };
      });
    }, error => {
      console.error("Error fetching data:", error);
    });;
  }
}
