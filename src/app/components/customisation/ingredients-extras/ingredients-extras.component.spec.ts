import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsExtrasComponent } from './ingredients-extras.component';

describe('IngredientsExtrasComponent', () => {
  let component: IngredientsExtrasComponent;
  let fixture: ComponentFixture<IngredientsExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsExtrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientsExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
