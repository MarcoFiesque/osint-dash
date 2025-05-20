import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cyber-tools',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cyber-tools.component.html',
  styleUrls: ['./cyber-tools.component.css']
})
export class CyberToolsComponent implements OnInit {
  categories: any[] = [];
  isLoading = true;
  error: string | null = null;
  expandedCategories: {[key: string]: boolean} = {};

  private http = inject(HttpClient);

  ngOnInit(): void {
    this.loadTools();
  }

  loadTools() {
    this.http.get<any[]>('/assets/cyber-tools/cyber-tools.json').subscribe({
      next: (data) => {
        this.categories = data;
        // Initialiser toutes les catégories comme fermées par défaut
        this.categories.forEach(cat => {
          this.expandedCategories[cat.category] = false;
        });
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading tools:', err);
        this.error = 'Failed to load tools. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  toggleCategory(category: string): void {
    this.expandedCategories[category] = !this.expandedCategories[category];
  }

  getCategoryIcon(category: string): string {
    const icons: {[key: string]: string} = {
      'OSINT': '🔍',
      'Scan de vulnérabilités': '🛡️',
      'Emails & fuites': '📧',
      'Analyse de malware': '🦠',
      'Réseau & DNS': '🌐'
    };
    return icons[category] || '🛠️';
  }
}