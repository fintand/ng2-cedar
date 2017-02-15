import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements AfterViewInit {

  ngAfterViewInit() {

    const nav2 = <HTMLScriptElement> document.querySelector('.navbar');
    const topOfNav = nav2.offsetTop;

    function fixedNav() {
      if(window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav2.offsetHeight + "px";
        document.body.classList.add('has-docked-nav');
      } else {
        document.body.style.paddingTop = "0";
        document.body.classList.remove('has-docked-nav');
      }
    }


    window.addEventListener('scroll', fixedNav)

  }

}
