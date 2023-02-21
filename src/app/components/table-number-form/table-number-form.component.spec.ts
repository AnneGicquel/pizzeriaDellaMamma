import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNumberFormComponent } from './table-number-form.component';

describe('TableNumberFormComponent', () => {
  let component: TableNumberFormComponent;
  let fixture: ComponentFixture<TableNumberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableNumberFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableNumberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
