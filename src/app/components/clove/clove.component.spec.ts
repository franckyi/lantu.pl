import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloveComponent } from './clove.component';

describe('CloveComponent', () => {
  let component: CloveComponent;
  let fixture: ComponentFixture<CloveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
