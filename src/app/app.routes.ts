import { Routes } from '@angular/router';
import { IpInspectorComponent } from './features/ip-inspector/ip-inspector.component';
import {DashboardComponent} from './features/dashboard/dashboard.component';
import { CyberToolsComponent } from './cyber-tools/cyber-tools.component';
export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'ip', component: IpInspectorComponent },
    { path: 'cyber-tools', component: CyberToolsComponent }

];
