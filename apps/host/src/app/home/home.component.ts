import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="content">
      <h1>Host</h1>
      <a routerLink="/snake">Snake</a>
      <a routerLink="/mfe2">MFE2</a>
    </div>
  `,
  imports: [RouterLink],
  styles: `
    a {
      display: inline-block;
      margin-right: 10px;
    }
  `,
})
export class HomeComponent {}
