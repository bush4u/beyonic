import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPlaceholderComponent } from './icon-placeholder.component';

describe('IconPlaceholderComponent', () => {
  let component: IconPlaceholderComponent;
  let fixture: ComponentFixture<IconPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
