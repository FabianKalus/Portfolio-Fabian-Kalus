import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarImprintComponent } from './sidebar-imprint.component';

describe('SidebarImprintComponent', () => {
  let component: SidebarImprintComponent;
  let fixture: ComponentFixture<SidebarImprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarImprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
