import { Injectable } from '@angular/core';
import { GenericService } from '../util/generic-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DashboardService extends GenericService {

  public getExternalUrl(url: string): Observable<any> {
    return this.http.get(url);
  }

  public getChartCountryData(country?: string): Observable<any[]> {
    let url = `https://church-crm-598d06c84097.herokuapp.com/dashboardExternal/country/list`;
    return this.getExternalUrl(url).pipe(map(response => response.countryResult));
  }

  public getChartCityData(city: string): Observable<any[]> {
    const url = 'https://church-crm-598d06c84097.herokuapp.com/dashboardExternal/country/' + city;
    return this.getExternalUrl(url).pipe(map(response => response.countryResult));
  }
}
