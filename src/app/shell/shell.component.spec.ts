import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from '../components/cards/card/card.component';
import { FooterComponent } from '../components/footer/footer.component';
import { IndexNavbarComponent } from '../components/navbars/index-navbar/index-navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ShellComponent,
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
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
