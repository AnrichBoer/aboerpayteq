import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPagesComponentsUsersUsersdetailsComponent } from './usersdetails.component';

describe('UsersdetailsComponent', () => {
  let component: AppPagesComponentsUsersUsersdetailsComponent;
  let fixture: ComponentFixture<AppPagesComponentsUsersUsersdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPagesComponentsUsersUsersdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPagesComponentsUsersUsersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
