import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightModeSwitchComponent } from './night-mode-switch.component';

describe('NightModeSwitchComponent', () => {
  let component: NightModeSwitchComponent;
  let fixture: ComponentFixture<NightModeSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NightModeSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NightModeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
