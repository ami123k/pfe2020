import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreadmineducationComponent } from './offreadmineducation.component';

describe('OffreadmineducationComponent', () => {
  let component: OffreadmineducationComponent;
  let fixture: ComponentFixture<OffreadmineducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreadmineducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreadmineducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
