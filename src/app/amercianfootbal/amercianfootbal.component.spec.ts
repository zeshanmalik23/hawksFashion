import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmercianfootbalComponent } from './amercianfootbal.component';

describe('AmercianfootbalComponent', () => {
  let component: AmercianfootbalComponent;
  let fixture: ComponentFixture<AmercianfootbalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmercianfootbalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmercianfootbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
