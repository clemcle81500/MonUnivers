import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  imports: [RouterModule, RouterLink],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss',
})
export class MenuBar {
  musicAlbums: string[] = ['Régolithe', 'En cours...'];
}
