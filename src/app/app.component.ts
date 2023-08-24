import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type ViewType = 'faithful' | 'dashboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  view: ViewType = 'faithful';

  constructor(public translateService: TranslateService) {}

  public changeLanguage(language: string): void {
    this.translateService.use(language);
  }

  get showFaithful() {
    return this.view === 'faithful'
  }

  get showDashboard() {
    return this.view === 'dashboard'
  }

  toggleView(view: ViewType) {
    this.view = view
  }
}
