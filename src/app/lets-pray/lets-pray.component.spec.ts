import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsPrayComponent } from './lets-pray.component';

describe('LetsPrayComponent', () => {
  let component: LetsPrayComponent;
  let fixture: ComponentFixture<LetsPrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetsPrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsPrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
