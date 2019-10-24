import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddTransactionComponent } from './form-add-transaction.component';

describe('FormAddTransactionComponent', () => {
  let component: FormAddTransactionComponent;
  let fixture: ComponentFixture<FormAddTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
