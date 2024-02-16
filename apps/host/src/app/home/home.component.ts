import { Component } from "@angular/core";

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    Hello from host.
    <a routerLink="/mfe1">MFE1</a>
    <a routerLink="/mfe2">MFE2</a>
  `,
})
export class HomeComponent {}
