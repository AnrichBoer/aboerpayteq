import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPagesHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: AppPagesHomeComponent;
  let fixture: ComponentFixture<AppPagesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPagesHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPagesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
