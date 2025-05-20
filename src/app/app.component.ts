import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-osint-dashboard';
  sidebarOpen = true;
  toggleSidebarState(sidebarOpen: boolean) {
    // Handle the sidebar state change here
    console.log('Sidebar state changed:', sidebarOpen);
    this.sidebarOpen = sidebarOpen;
  }
}