import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminViewCategoriesComponent } from './superadmin-view-categories.component';

describe('SuperadminViewCategoriesComponent', () => {
  let component: SuperadminViewCategoriesComponent;
  let fixture: ComponentFixture<SuperadminViewCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminViewCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminViewCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
