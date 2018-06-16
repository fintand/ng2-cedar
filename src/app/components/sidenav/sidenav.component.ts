import { Component } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  private router: HTMLElement;

  public _opened: boolean = false;

  public clickLink() {
    this.router = <HTMLScriptElement> document.querySelector('router-outlet');
    window.scrollTo(0, this.router.offsetTop);
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
  }


}
