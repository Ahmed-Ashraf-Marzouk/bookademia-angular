import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarSearchResultComponent } from './side-bar-search-result.component';

describe('SideBarSearchResultComponent', () => {
  let component: SideBarSearchResultComponent;
  let fixture: ComponentFixture<SideBarSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
