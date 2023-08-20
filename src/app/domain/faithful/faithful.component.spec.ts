import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaithfulComponent } from './faithful.component';

describe('FaithfulComponent', () => {
  let component: FaithfulComponent;
  let fixture: ComponentFixture<FaithfulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaithfulComponent]
    });
    fixture = TestBed.createComponent(FaithfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
