import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangfilterComponent } from './langfilter.component';

describe('LangfilterComponent', () => {
  let component: LangfilterComponent;
  let fixture: ComponentFixture<LangfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangfilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
