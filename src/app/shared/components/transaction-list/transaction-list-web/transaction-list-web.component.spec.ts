import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListWebComponent } from './transaction-list-web.component';

describe('TransactionListWebComponent', () => {
  let component: TransactionListWebComponent;
  let fixture: ComponentFixture<TransactionListWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionListWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionListWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
