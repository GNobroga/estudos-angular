import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdContentComponent } from './third-content.component';

describe('ThirdContentComponent', () => {
  let component: ThirdContentComponent;
  let fixture: ComponentFixture<ThirdContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
