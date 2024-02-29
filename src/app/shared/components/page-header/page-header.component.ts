import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SidenavService } from '../../../sidenav.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  isSmallScreen$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 1023px)')
    .pipe(
      map(result => result.matches)
    );
  constructor(private sidenavService: SidenavService, private breakpointObserver: BreakpointObserver, ) {
    
  }
  toggleSidenav() {
    this.sidenavService.toggle();
  }
}
