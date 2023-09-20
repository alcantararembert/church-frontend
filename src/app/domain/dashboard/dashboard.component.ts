import { Component, HostListener, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { __makeTemplateObject } from 'tslib';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	template: `
	<ngx-charts-pie-chart
		[results]="data"
		[legend]="true"
		[legendTitle]="legendTitle"
		[labels]="true"
		[doughnut]="false">
		(select)="onCountrySelected($event)">
	</ngx-charts-pie-chart>
	`
})
export class DashboardComponent implements OnInit {

	// chart options
	gradient: boolean = true;
	showLegend: boolean = true;
	showLabels: boolean = true;
	isDoughnut: boolean = false;
	explodeSlices: boolean = false;
	legendTitleCountries: string = "Países";
	legendTitleCities: string = "Cidades";

	width = 700;
	height = 400;

	data: any[] = [];
	cityData: any[] = [];

	constructor(private dashboardService: DashboardService) { }

	ngOnInit() {
		this.getChartData();
	}

	getChartData(country?: string): void {
		this.dashboardService.getChartCountryData(country).subscribe({
			next: (result: any) => {
				this.data = result.map((entry: any) => {
					return {
						name: entry.name,
						value: entry.userQty
					};
				});
			},
			error: error => {
				console.error("Error fetching data:", error);
			}
		});
	}

	onSelect(event: any): void {
		this.dashboardService.getChartCityData(event.name).subscribe({
			next: (result) => {
				this.cityData = result.map(entry => {
					return {
						name: entry.name,
						value: entry.userQty
					};
				});
			},
			error: err => {
				console.error("Error fetching data:", err);
			}
		});
	}

	@HostListener('window:resize', ['$event'])
	onResize($event: any) {
		this.width = $event.target.innerWidth * 0.8;
		this.height = 400;
	}
}
