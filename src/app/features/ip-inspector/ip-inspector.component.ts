import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ip-inspector',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ip-inspector.component.html',
})
export class IpInspectorComponent implements OnInit {
  ip: string = '';
  data: any = null;
  searchHistory: SearchHistoryItem[] = [];
  errorMessage: string = '';
  isLoading: boolean = false;
  
  private http = inject(HttpClient);

  ngOnInit() {
    this.loadHistory();
  }

  lookupIP() {
    this.errorMessage = '';
    this.isLoading = true;
    const queryIP = this.ip.trim();
    const url = queryIP 
      ? `https://ipapi.co/${queryIP}/json/`
      : 'https://ipapi.co/json/';

    this.http.get(url).subscribe({
      next: (res: any) => {
        if (res.error) {
          this.handleError(res.reason || 'Erreur inconnue lors de la recherche IP.');
        } else {
          this.handleSuccess(res, queryIP);
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.handleError('Erreur réseau lors de la recherche IP.');
        this.isLoading = false;
        console.error('Erreur IP lookup:', err);
      },
    });
  }

  private handleSuccess(data: any, searchedIp: string) {
    this.data = data;
    const resultIp = data.ip;
    this.ip = resultIp;

    // Ajoute à l'historique même si c'est une recherche automatique (ip vide)
    this.addToHistory({
      ip: resultIp,
      searchedIp: searchedIp || 'Auto-détection',
      timestamp: new Date().toISOString()
    });
  }

  private handleError(message: string) {
    this.errorMessage = message;
    this.data = null;
  }

  private addToHistory(item: SearchHistoryItem) {
    // Évite les doublons (même IP)
    this.searchHistory = this.searchHistory.filter(x => x.ip !== item.ip);
    
    // Ajoute entête
    this.searchHistory.unshift(item);
    
    // Garde seulement les 10 derniers
    if (this.searchHistory.length > 10) {
      this.searchHistory.pop();
    }
    
    this.saveHistory();
  }

  private loadHistory() {
    const history = localStorage.getItem('ipSearchHistory');
    this.searchHistory = history ? JSON.parse(history) : [];
  }

  private saveHistory() {
    localStorage.setItem('ipSearchHistory', JSON.stringify(this.searchHistory));
  }

  selectFromHistory(item: SearchHistoryItem) {
    this.ip = item.ip;
    this.lookupIP();
  }

  clearHistory() {
    this.searchHistory = [];
    localStorage.removeItem('ipSearchHistory');
  }

  redirectToMap(lat: number, lon: number) {
    const url = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=12/${lat}/${lon}`;
    window.open(url, '_blank');
  }
}

interface SearchHistoryItem {
  ip: string;
  searchedIp: string; // L'IP qui a été recherchée (peut être vide pour auto-détection)
  timestamp: string;
}