import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CardComponent } from '../components/cards/card/card.component';
import { Changelog } from './changelog';
import { ChangelogComponent } from './changelog.component';
import { HttpClient } from '@angular/common/http';

describe('ChangelogComponent', () => {
  let component: ChangelogComponent;
  let fixture: ComponentFixture<ChangelogComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        CardComponent,
        ChangelogComponent
      ]
    })
      .compileComponents();

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    // Then it asserts that there is not outstanding requests.
    httpTestingController.verify();
  });

  it('should create', () => {
    // Given a commit.
    const changelog: Changelog = {
      "commiter": "Leo Meirelles",
      "date": "2021-06-21 11:43:42 -0400",
      "subject": "test: enable unit tests",
      "decoration": " (HEAD -> main, tag: v1.0.0, origin/main)"
    };

    // Then it should be created.
    expect(component).toBeTruthy();

    // Then it should have the default values.
    expect(component.releases)
      .toEqual([]);

    // Then it should call for the resume
    const req = httpTestingController.expectOne('/assets/changelog.json');

    // Then it should be a get method.
    expect(req.request.method).toEqual('GET');

    // Then respond with mock data, causing Observable to resolve.
    req.flush([changelog]);

    // Then it should update the changelog.
    expect(component.releases)
      .toEqual([
        {
          "changes": [
            {
              "type": "test",
              "changes": [
                {
                  "commiter": "Leo Meirelles",
                  "date": "2021-06-21 11:43:42 -0400",
                  "message": {
                    "scope": "",
                    "subject": "enable unit tests",
                    "type": "test"
                  }
                }
              ]
            }
          ],
          "version": "v1.0.0"
        }
      ]);
  });

  it('should create handle tagless commits', () => {
    // Given a commit.
    const changelog: Changelog = {
      "commiter": "Leo Meirelles",
      "date": "2021-06-21 15:18:08 -0400",
      "subject": "feat: create changelog page",
      "decoration": " (grafted, HEAD -> main, origin/main)"
    };

    // Then it should be created.
    expect(component).toBeTruthy();

    // Then it should have the default values.
    expect(component.releases)
      .toEqual([]);

    // Then it should call for the resume
    const req = httpTestingController.expectOne('/assets/changelog.json');

    // Then it should be a get method.
    expect(req.request.method).toEqual('GET');

    // Then respond with mock data, causing Observable to resolve.
    req.flush([changelog]);

    // Then it should update the changelog.
    expect(component.releases)
      .toEqual([
        {
          "changes": [
            {
              "type": "feat",
              "changes": [
                {
                  "commiter": "Leo Meirelles",
                  "date": "2021-06-21 15:18:08 -0400",
                  "message": {
                    "scope": "",
                    "subject": "create changelog page",
                    "type": "feat"
                  }
                }
              ]
            }
          ],
          "version": ""
        }
      ]);
  });
});
