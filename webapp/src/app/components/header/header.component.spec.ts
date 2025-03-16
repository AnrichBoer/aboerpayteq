import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponentsHeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: AppComponentsHeaderComponent;
  let fixture: ComponentFixture<AppComponentsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponentsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponentsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
