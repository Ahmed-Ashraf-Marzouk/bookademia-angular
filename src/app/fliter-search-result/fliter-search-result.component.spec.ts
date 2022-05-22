import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FliterSearchResultComponent } from './fliter-search-result.component';

describe('FliterSearchResultComponent', () => {
  let component: FliterSearchResultComponent;
  let fixture: ComponentFixture<FliterSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FliterSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FliterSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
