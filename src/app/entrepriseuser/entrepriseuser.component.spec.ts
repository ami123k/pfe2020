import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseuserComponent } from './entrepriseuser.component';

describe('EntrepriseuserComponent', () => {
  let component: EntrepriseuserComponent;
  let fixture: ComponentFixture<EntrepriseuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
