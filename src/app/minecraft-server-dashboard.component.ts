import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-minecraft-server-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minecraft-server-dashboard.component.html',
  styleUrls: ['./minecraft-server-dashboard.component.scss']
})
export class MinecraftServerDashboardComponent {
  serverStatus: 'on' | 'off' | 'unknown' = 'off';
  loading = false;
  error: string | null = null;
  backupInProgress = false;
  motd = 'Benvenuto nel server Minecraft!';
  version = '1.12.2';

  getStatus() {
    this.loading = true;
    this.error = null;
    setTimeout(() => {
      this.serverStatus = this.serverStatus === 'on' ? 'off' : 'on';
      this.loading = false;
    }, 800);
  }

  startServer() {
    this.loading = true;
    this.error = null;
    setTimeout(() => {
      this.serverStatus = 'on';
      this.loading = false;
    }, 1200);
  }

  stopServer() {
    this.loading = true;
    this.error = null;
    setTimeout(() => {
      this.serverStatus = 'off';
      this.loading = false;
    }, 1200);
  }

  launchBackup() {
    this.backupInProgress = true;
    this.error = null;
    setTimeout(() => {
      this.backupInProgress = false;
      alert('Backup completato con successo!');
    }, 1800);
  }
}
