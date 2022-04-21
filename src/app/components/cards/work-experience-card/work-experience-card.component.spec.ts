import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceCardComponent } from './work-experience-card.component';

describe('WorkExperienceCardComponent', () => {
  let component: WorkExperienceCardComponent;
  let fixture: ComponentFixture<WorkExperienceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkExperienceCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
