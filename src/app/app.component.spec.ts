import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
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

  it('should have initial values',  () => {
    // Given a component.
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Then it should the default values.
    expect(app.navigation)
      .toEqual([
        {
          label: 'resume',
          link: '/resume'
        },
        {
          label: 'changelog',
          link: '/changelog'
        }
      ]);
    expect(app.menuState)
      .toBe('closed');
  });

  it('should open the menu',  () => {
    // Given a component.
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // When click to open the menu.
    app.toggleMenu();

    // Then it update the values.
    expect(app.menuState)
      .toBe('open');
  });

  it('should open and close the menu',  () => {
    // Given a component.
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // When click to open and close the menu.
    app.toggleMenu();
    app.toggleMenu();

    // Then it update the values.
    expect(app.menuState)
      .toBe('closed');
  });
});
