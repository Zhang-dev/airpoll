import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  opened = true;

  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;

  ngOnInit() {
    console.log(window.innerWidth)

    this.setTitle('Airpoll')
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }
}