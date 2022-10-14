import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImprintComponent } from './header-imprint.component';

describe('HeaderImprintComponent', () => {
  let component: HeaderImprintComponent;
  let fixture: ComponentFixture<HeaderImprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderImprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
