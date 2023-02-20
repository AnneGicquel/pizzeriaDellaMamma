import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsIncludedComponent } from './ingredients-included.component';

describe('IngredientsIncludedComponent', () => {
  let component: IngredientsIncludedComponent;
  let fixture: ComponentFixture<IngredientsIncludedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsIncludedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientsIncludedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
