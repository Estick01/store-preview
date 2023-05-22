import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairSetupComponent } from './chair-setup.component';

describe('ChairSetupComponent', () => {
  let component: ChairSetupComponent;
  let fixture: ComponentFixture<ChairSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChairSetupComponent]
    });
    fixture = TestBed.createComponent(ChairSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
