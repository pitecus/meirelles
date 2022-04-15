import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import LogRocket from "logrocket";

if (environment.production) {
  enableProdMode();

  // Initialize Log Rocket.
  // LogRocket.init("guwjhj/resume");
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
