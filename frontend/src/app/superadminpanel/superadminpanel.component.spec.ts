import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminpanelComponent } from './superadminpanel.component';

describe('SuperadminpanelComponent', () => {
  let component: SuperadminpanelComponent;
  let fixture: ComponentFixture<SuperadminpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
