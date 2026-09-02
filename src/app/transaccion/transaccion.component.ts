import { Component, inject } from '@angular/core';
import { TranslateService, translate } from '@ngx-translate/core';

@Component({
    selector: 'app-transaccion',
    template: `
    <div class="page-container">
      <h2>{{ title() }}</h2>
      <p>{{ description() }}</p>
      <div>Current language: {{ currentLang() }}</div>
    </div>
  `,
    styles: [`
    .page-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  `]
})
export class TransaccionComponent {
    private translateService = inject(TranslateService);

    // Using the standalone translate function (Signal-based)
    title = translate('TRANSACCION');
    description = translate('GESTION_TRANSACCIONES');

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