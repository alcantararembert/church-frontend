import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export type ViewType = 'faithful' | 'dashboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  view: ViewType = 'faithful';
  isCollapsed = true;
  constructor(public translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.use('es-ES');
  }
  
}
