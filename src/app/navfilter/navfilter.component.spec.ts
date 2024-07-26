import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavfilterComponent } from './navfilter.component';

describe('FilterbarComponent', () => {
  let component: NavfilterComponent;
  let fixture: ComponentFixture<NavfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavfilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
