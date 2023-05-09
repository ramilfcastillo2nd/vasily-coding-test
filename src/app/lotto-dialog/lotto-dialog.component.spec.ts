import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoDialogComponent } from './lotto-dialog.component';

describe('LottoDialogComponent', () => {
  let component: LottoDialogComponent;
  let fixture: ComponentFixture<LottoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LottoDialogComponent]
    });
    fixture = TestBed.createComponent(LottoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
