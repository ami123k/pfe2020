import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindoffrebycategorieComponent } from './findoffrebycategorie.component';
import {beforeEach, describe} from 'selenium-webdriver/testing';

describe('FindoffrebycategorieComponent', () => {
  let component: FindoffrebycategorieComponent;
  let fixture: ComponentFixture<FindoffrebycategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindoffrebycategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindoffrebycategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
