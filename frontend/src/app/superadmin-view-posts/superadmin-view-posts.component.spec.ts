import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminViewPostsComponent } from './superadmin-view-posts.component';

describe('SuperadminViewPostsComponent', () => {
  let component: SuperadminViewPostsComponent;
  let fixture: ComponentFixture<SuperadminViewPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminViewPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminViewPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
