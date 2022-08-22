import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListMobileComponent } from './transaction-list-mobile.component';

describe('TransactionListMobileComponent', () => {
  let component: TransactionListMobileComponent;
  let fixture: ComponentFixture<TransactionListMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionListMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionListMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
