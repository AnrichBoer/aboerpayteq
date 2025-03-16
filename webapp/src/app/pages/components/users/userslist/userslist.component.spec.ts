import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPagesComponentsUsersUserslistComponent } from './userslist.component';

describe('UserslistComponent', () => {
  let component: AppPagesComponentsUsersUserslistComponent;
  let fixture: ComponentFixture<AppPagesComponentsUsersUserslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPagesComponentsUsersUserslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPagesComponentsUsersUserslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
