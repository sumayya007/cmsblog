import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditSettingsComponent } from './user-edit-settings.component';

describe('UserEditSettingsComponent', () => {
  let component: UserEditSettingsComponent;
  let fixture: ComponentFixture<UserEditSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEditSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
