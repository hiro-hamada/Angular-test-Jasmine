import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable, of } from 'rxjs';

import { TestComponent } from './test.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  // let router: Router;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const routeSpy = jasmine.createSpyObj('ActivatedRoute', ['queryParams']);
  console.log(routeSpy);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      imports: [
        RouterTestingModule,
       ],
      providers: [
        { provide: ActivatedRoute, useValue: routeSpy},
        { provide: Router, useValue: routerSpy }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('router test', () => {
    // component.transition();
    (document.querySelectorAll('button')[0] as HTMLElement).click();
    fixture.detectChanges();

    let router = fixture.debugElement.injector.get(Router);
    const spy = router.navigateByUrl as jasmine.Spy;
    console.log(spy.calls.first());
    const navArgs = spy.calls.first().args[0];

    expect(navArgs).toBe('/test');
  });
});
