import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupNavBarComponent } from './sup-nav-bar.component';

describe('SupNavBarComponent', () => {
  let component: SupNavBarComponent;
  let fixture: ComponentFixture<SupNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
