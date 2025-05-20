import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  stats = {
    analyzedIPs: 0,
    cyberTools: 0,
    uniqueIPs: 0
  };

  ngOnInit() {
    this.loadStats();
  }

  private loadStats() {
    const history = localStorage.getItem('ipSearchHistory');
    if (history) {
      const searchHistory = JSON.parse(history);
      
      // Nombre total de recherches
      this.stats.analyzedIPs = searchHistory.length;
      
      // Nombre d'IPs uniques recherchées
      const uniqueIPs = new Set(searchHistory.map((item: any) => item.ip));
      this.stats.uniqueIPs = uniqueIPs.size;
    }

    // nombre de liens d'outils cyber depuis le JSON
    fetch('assets/cyber-tools/cyber-tools.json')
      .then(response => response.json())
      .then(data => {
        this.stats.cyberTools = data.reduce((acc: number, category: any) => 
          acc + category.tools.length, 0);
      })
      .catch(error => console.error('Error loading cyber tools:', error));
  }
}
