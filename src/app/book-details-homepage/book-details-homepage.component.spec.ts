import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsHomepageComponent } from './book-details-homepage.component';

describe('BookDetailsHomepageComponent', () => {
  let component: BookDetailsHomepageComponent;
  let fixture: ComponentFixture<BookDetailsHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailsHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
