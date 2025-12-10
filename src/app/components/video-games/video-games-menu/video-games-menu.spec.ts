import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGamesMenu } from './video-games-menu';

describe('MenuBar', () => {
  let component: VideoGamesMenu;
  let fixture: ComponentFixture<VideoGamesMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoGamesMenu]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VideoGamesMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
