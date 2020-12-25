import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilogConfirmationComponent } from './dilog-confirmation.component';

describe('DilogConfirmationComponent', () => {
  let component: DilogConfirmationComponent;
  let fixture: ComponentFixture<DilogConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilogConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilogConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
