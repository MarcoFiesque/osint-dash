import { NgIf } from '@angular/common';
import { Component, EventEmitter, output, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, NgIf, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarOpen = true;
  // @Output() sidebarOpened = new EventEmitter<boolean>();
  sidebarOpened = output<boolean>();

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.sidebarOpened.emit(this.sidebarOpen);
  }
}