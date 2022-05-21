import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicCollectionComponent } from './arabic-collection.component';

describe('ArabicCollectionComponent', () => {
  let component: ArabicCollectionComponent;
  let fixture: ComponentFixture<ArabicCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArabicCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabicCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
