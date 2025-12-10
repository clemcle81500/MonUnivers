import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticGameSimulator } from './politic-game-simulator';

describe('PoliticGameSimulator', () => {
  let component: PoliticGameSimulator;
  let fixture: ComponentFixture<PoliticGameSimulator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticGameSimulator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticGameSimulator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
