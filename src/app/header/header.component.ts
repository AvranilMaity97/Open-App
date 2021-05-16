import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    window.addEventListener('scroll', () => {
      let header = document.querySelector('.header-container');
      header.classList.toggle('sticky', window.scrollY > 0);
    });
  }
}
