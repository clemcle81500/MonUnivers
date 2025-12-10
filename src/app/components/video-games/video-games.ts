import { Component } from '@angular/core';
import { VideoGamesMenu } from './video-games-menu/video-games-menu';

@Component({
  selector: 'app-video-games',
  imports: [VideoGamesMenu],
  templateUrl: './video-games.html',
  styleUrl: './video-games.scss',
})
export class VideoGames {

}
