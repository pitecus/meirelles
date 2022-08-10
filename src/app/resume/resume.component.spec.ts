import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CardComponent } from '../components/cards/card/card.component';
import { FormsModule } from '@angular/forms';
import { ResumeComponent } from './resume.component';
import release from '../../assets/release.json';
import resume from '../../assets/resume.json';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        CardComponent,
        ResumeComponent
      ]
    })
      .compileComponents();

    // Inject the http service and test controller for each test
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    // Mock a date.
    const baseTime = new Date(2021, 6, 21);
    jasmine.clock().mockDate(baseTime);

    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    // Then it asserts that there is not outstanding requests.
    httpTestingController.verify();
  });

  it('should create', () => {
    // Then it should be created.
    expect(component).toBeTruthy();

    // Then it should have the default values.
    expect(component.resume)
      .toBeUndefined();
    expect(component.isWorkFiltered)
      .toBeFalse();
    expect(component.filteredWork)
      .toEqual([]);

    // Then it should call for the resume
    const req = httpTestingController.expectOne('/assets/resume.json');

    // Then it should be a get method.
    expect(req.request.method).toEqual('GET');

    // Then respond with mock data, causing Observable to resolve.
    req.flush(resume);

    // Then it should call for the release
    const req2 = httpTestingController.expectOne('/assets/release.json');

    // Then it should be a get method.
    expect(req2.request.method).toEqual('GET');

    // Then respond with mock data, causing Observable to resolve.
    req2.flush(release);

    // Then it should update the values.
    expect(component.resume)
      .toEqual(resume);
    expect(component.isWorkFiltered)
      .toBeTrue();
    expect(component.filteredWork)
      .toEqual([
        resume.work[0],
        resume.work[1],
        resume.work[2],
        resume.work[3],
        resume.work[4]
      ]);
  });

  it('should unfilter the work', () => {
    // Given a call for the resume
    const req1 = httpTestingController.expectOne('/assets/resume.json');
    req1.flush(resume);

    // Given a call for the release
    const req2 = httpTestingController.expectOne('/assets/release.json');
    req2.flush(release);

    // When disabling work filter.
    component.filterWork();

    // Then it should update the values.
    expect(component.isWorkFiltered)
      .toBeFalse();
    expect(component.filteredWork)
      .toEqual([
        resume.work[0],
        resume.work[1],
        resume.work[2],
        resume.work[3],
        resume.work[4],
        resume.work[5],
        resume.work[6],
        resume.work[7],
        resume.work[8]
      ]);
  });

  it('should handle filter without data.', () => {
    // When disabling work filter.
    component.filterWork();
    component.filterWork();

    // Then it should update the values.
    expect(component.isWorkFiltered)
      .toBeFalse();
    expect(component.filteredWork)
      .toEqual([]);

    // Given a call for the resume
    const req1 = httpTestingController.expectOne('/assets/resume.json');
    req1.flush(resume);

    // Given a call for the release
    const req2 = httpTestingController.expectOne('/assets/release.json');
    req2.flush(release);
  });
});
