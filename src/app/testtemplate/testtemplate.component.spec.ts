import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttemplateComponent } from './testtemplate.component';

describe('TesttemplateComponent', () => {
  let component: TesttemplateComponent;
  let fixture: ComponentFixture<TesttemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesttemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
