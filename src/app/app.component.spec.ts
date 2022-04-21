import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
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
