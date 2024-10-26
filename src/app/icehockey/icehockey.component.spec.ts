import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcehockeyComponent } from './icehockey.component';

describe('IcehockeyComponent', () => {
  let component: IcehockeyComponent;
  let fixture: ComponentFixture<IcehockeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcehockeyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcehockeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
