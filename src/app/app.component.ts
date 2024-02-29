import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService} from './sidenav.service';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ApiService } from './shared/services/api.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModule,
    AuthModule,
    UsersModule,
    BooksModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'Library Management System';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor(private sidenavService: SidenavService, private breakpointObserver: BreakpointObserver, private apiService: ApiService) { }

  ngOnInit(): void {
    let status = this.apiService.isLoggedIn() ? 'loggedIn' : 'loggedOff';
    this.apiService.userStatus.next(status);
  }

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);

    this.breakpointObserver.observe('(max-width: 1023px)').subscribe(result => {
      if (result.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
