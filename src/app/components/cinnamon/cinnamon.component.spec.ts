import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinnamonComponent } from './cinnamon.component';

describe('CinnamonComponent', () => {
  let component: CinnamonComponent;
  let fixture: ComponentFixture<CinnamonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinnamonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinnamonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
