import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeppercornComponent } from './peppercorn.component';

describe('PeppercornComponent', () => {
  let component: PeppercornComponent;
  let fixture: ComponentFixture<PeppercornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeppercornComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeppercornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
