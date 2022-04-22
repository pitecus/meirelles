import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/cards/card/card.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexDropdownComponent } from "./components/dropdowns/index-dropdown/index-dropdown.component";
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';
import { NgModule } from '@angular/core';
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { ProfileCardComponent } from './components/cards/profile-card/profile-card.component';
import { PublicationCardComponent } from './components/cards/publication-card/publication-card.component';
import { ResumeComponent } from './resume/resume.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SummaryCardComponent } from './components/cards/summary-card/summary-card.component';
import { WorkExperienceCardComponent } from './components/cards/work-experience-card/work-experience-card.component';
import { environment } from '../environments/environment';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    ChangelogComponent,
    IndexDropdownComponent,
    IndexNavbarComponent,
    PagesDropdownComponent,
    ResumeComponent,
    ProfileCardComponent,
    SummaryCardComponent,
    FooterComponent,
    CardComponent,
    WorkExperienceCardComponent,
    PublicationCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {
      provide: Window,
      useValue: window
    }
  ]
})
export class AppModule { }
