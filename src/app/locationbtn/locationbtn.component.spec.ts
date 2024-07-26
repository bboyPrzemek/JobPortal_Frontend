import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationbtnComponent } from './locationbtn.component';

describe('LocationbtnComponent', () => {
  let component: LocationbtnComponent;
  let fixture: ComponentFixture<LocationbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationbtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
