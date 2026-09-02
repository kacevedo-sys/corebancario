import { Component, inject } from '@angular/core';
import { TranslateService, translate } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard-container">
      <h2>{{ title() }}</h2>
      <p>{{ description() }}</p>
      <div>Current language: {{ currentLang() }}</div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    h2 {
      color: #1a237e;
      margin-bottom: 1rem;
    }
  `]
})
export class DashboardComponent {
  private translateService = inject(TranslateService);

  // Using the standalone translate function (Signal-based)
  title = translate('BIENVENIDO');
  description = translate('MENSAJE_BIENVENIDA');

  // Get current language as Signal
  currentLang = this.translateService.currentLang;

  constructor() {
    // Set default language (do this in root module or app component)
    // this.translateService.setDefaultLang('es');
  }

  switchLanguage(lang: string) {
    this.translateService.use(lang);
  }
}