import { Component } from '@angular/core';
import { MenuItem } from './core/model/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'app-base';
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'Home' },
    { url: '/basket/:id', nombre: 'Basket' },

  ];

  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home-outline' },
    { title: 'Mis Mercados', url: '/mybaskets', icon: 'paper-plane' },
    { title: 'Más Populares', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Compartir', url: '/folder/Archived', icon: 'archive' },
    { title: 'Nueva Canasta', url: '/folder/Trash', icon: 'trash' },
    { title: 'Chatea con nosotros', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }

}
