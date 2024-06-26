import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalMainComponent } from './approval-main.component';

describe('ApprovalMainComponent', () => {
  let component: ApprovalMainComponent;
  let fixture: ComponentFixture<ApprovalMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovalMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprovalMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
