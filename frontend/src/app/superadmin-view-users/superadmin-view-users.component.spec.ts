import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminViewUsersComponent } from './superadmin-view-users.component';

describe('SuperadminViewUsersComponent', () => {
  let component: SuperadminViewUsersComponent;
  let fixture: ComponentFixture<SuperadminViewUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminViewUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminViewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
