import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailspropositionComponent } from './detailsproposition.component';

describe('DetailspropositionComponent', () => {
  let component: DetailspropositionComponent;
  let fixture: ComponentFixture<DetailspropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailspropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailspropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
