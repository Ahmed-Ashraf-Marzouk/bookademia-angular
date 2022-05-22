import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCollectionComponent } from './book-collection.component';

describe('BookcollectionComponent', () => {
  let component: BookCollectionComponent;
  let fixture: ComponentFixture<BookCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookCollectionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});