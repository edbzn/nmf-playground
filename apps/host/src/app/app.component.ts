import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-host',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  styles: `
    nav {
      padding: 10px;
      background-color: #e6e6e6;
    }
    nav ul {
      list-style-type: none;
      padding: 0;
    }
    nav ul li {
      display: inline;
      margin-right: 10px;
    }
    nav ul li a {
      text-decoration: none;
    }
    nav ul li a.active {
      font-weight: bold;
    }
  `,
  template: `
    <nav>
      <ul>
        <li>
          <a
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            >Host</a
          >
        </li>
        <li>
          <a routerLink="/snake" routerLinkActive="active">Snake</a>
        </li>
        <li>
          <a routerLink="/mfe2" routerLinkActive="active">MFE2</a>
        </li>
      </ul>
    </nav>
    <router-outlet />
  `,
})
export class AppComponent {}
