import { AppComponent } from './app.component';
import { CardComponent } from './components/cards/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        CardComponent,
        FooterComponent,
        IndexNavbarComponent
      ],
      providers: [
        {
          provide: Window,
          useValue: window
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    // Given a new component.
    const fixture = TestBed.createComponent(AppComponent);

    // When getting the instance.
    const app = fixture.componentInstance;

    // Then it should be initialized.
    expect(app).toBeTruthy();
  });
});
