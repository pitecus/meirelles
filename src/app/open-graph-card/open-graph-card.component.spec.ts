import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CardComponent } from '../components/cards/card/card.component';
import { OpenGraphCardComponent } from './open-graph-card.component';
import release from '../../assets/release.json';
import resume from '../../assets/resume.json';

describe('OpenGraphCardComponent', () => {
  let component: OpenGraphCardComponent;
  let fixture: ComponentFixture<OpenGraphCardComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        OpenGraphCardComponent,
        CardComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    // Inject the http service and test controller for each test
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenGraphCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    // Then it asserts that there is not outstanding requests.
    httpTestingController.verify();
  });

  it('should create', () => {

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
    expect(component).toBeTruthy();
  });
});
