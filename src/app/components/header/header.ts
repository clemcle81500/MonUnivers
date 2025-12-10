import { Component } from '@angular/core';
import { MenuBar } from '../menu-bar/menu-bar';

@Component({
  selector: 'app-header',
  imports: [MenuBar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
