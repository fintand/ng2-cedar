import { Component } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  private router: HTMLElement;

  openNav() {
    if(document.getElementById("mySidenav").style.width === "250px") {
      document.getElementById("mySidenav").style.width = "0";
    } else {
      document.getElementById("mySidenav").style.width = "250px";
    }
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  private section = document.querySelector('*').addEventListener('click', this.closeSidenav);

  closeSidenav(e) {
    if(e.target !== document.querySelector("div#mySidenav.sidenav") && e.target !== document.querySelector("i.ion-navicon-round")) {
      document.getElementById("mySidenav").style.width = "0";
      if(e.target.nodeName === "A" && document.body.clientWidth < 550) {
        this.router = <HTMLScriptElement> document.querySelector('router-outlet');
        window.scrollTo(0, this.router.offsetTop);
      }
    }
  }

}
