import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPagesApplicationComponent } from './application.component';

describe('ApplicationComponent', () => {
  let component: AppPagesApplicationComponent;
  let fixture: ComponentFixture<AppPagesApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPagesApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPagesApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
