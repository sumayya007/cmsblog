import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincontactComponent } from './maincontact.component';

describe('MaincontactComponent', () => {
  let component: MaincontactComponent;
  let fixture: ComponentFixture<MaincontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaincontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaincontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
