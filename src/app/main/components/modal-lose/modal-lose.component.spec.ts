import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoseComponent } from './modal-lose.component';

describe('ModalLoseComponent', () => {
  let component: ModalLoseComponent;
  let fixture: ComponentFixture<ModalLoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
