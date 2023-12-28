import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefferableViewsComponent } from './defferable-views.component';

describe('DefferableViewsComponent', () => {
  let component: DefferableViewsComponent;
  let fixture: ComponentFixture<DefferableViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefferableViewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefferableViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
