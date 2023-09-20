import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

export type ViewType = 'faithful' | 'dashboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    public translateService: TranslateService,
    public readonly router: Router
  ) { }

  public changeLanguage(language: string): void {
    this.translateService.use(language);
  }

  getActiveView(view: ViewType): boolean {
    return this.router.url.includes(view);
  }

  toggleView(view: ViewType): void {
    this.router.navigate([`/${view}`]);
  }
}
