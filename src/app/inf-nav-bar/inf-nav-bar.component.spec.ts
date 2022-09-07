import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfNavBarComponent } from './inf-nav-bar.component';

describe('InfNavBarComponent', () => {
  let component: InfNavBarComponent;
  let fixture: ComponentFixture<InfNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
