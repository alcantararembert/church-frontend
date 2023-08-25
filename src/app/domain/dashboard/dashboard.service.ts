import { Injectable } from '@angular/core';
import { GenericService } from '../util/generic-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DashboardService extends GenericService {
  public getChartCountryData(): Observable<any[]> {
    return this.get('dashboardExternal/country/list').pipe(
      map(response => response.countryResult)
    );
  }

  public getChartCityData(city:string): Observable<any[]> {
    return this.get('dashboardExternal/country/'+city).pipe(
      map(response => response.countryResult)
    );
  }
}
