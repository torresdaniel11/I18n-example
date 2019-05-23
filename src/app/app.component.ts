import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i18napp';
  localeUrl: string;
  constructor() {
    this.localeUrl = location.href;
  }
}
