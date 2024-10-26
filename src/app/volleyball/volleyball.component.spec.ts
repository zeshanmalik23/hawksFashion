import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolleyballComponent } from './volleyball.component';

describe('VolleyballComponent', () => {
  let component: VolleyballComponent;
  let fixture: ComponentFixture<VolleyballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolleyballComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolleyballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
