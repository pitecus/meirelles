import { AppModule } from './app/app.module';
import LogRocket from 'logrocket';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode();

  // Initialize Log Rocket.
  LogRocket.init('guwjhj/resume');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
