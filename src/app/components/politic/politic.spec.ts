import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Politic } from './politic';

describe('Politic', () => {
  let component: Politic;
  let fixture: ComponentFixture<Politic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Politic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Politic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
