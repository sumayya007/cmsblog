import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminAddAdminComponent } from './superadmin-add-admin.component';

describe('SuperadminAddAdminComponent', () => {
  let component: SuperadminAddAdminComponent;
  let fixture: ComponentFixture<SuperadminAddAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminAddAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminAddAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
