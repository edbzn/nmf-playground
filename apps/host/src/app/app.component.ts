import { Component, HostListener, inject } from '@angular/core';
import {
  Event,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-host',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  styles: `
    nav {
      padding: 10px;
      background-color: #f0f0f0;
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
          <a routerLink="/" routerLinkActive="active">Host</a>
        </li>
        <li>
          <a routerLink="/mfe1" routerLinkActive="active">Snake</a>
        </li>
        <li>
          <a routerLink="/mfe2" routerLinkActive="active">MFE2</a>
        </li>
      </ul>
    </nav>
    <router-outlet />
  `,
})
export class AppComponent {
  private router = inject(Router);

  @HostListener('window.childRouteChanged', ['&event'])
  changeRoute(event: Event & { data: { routeName: string } }) {
    this.router.navigate([event.data.routeName]);
  }
}
