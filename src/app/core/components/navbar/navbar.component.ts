import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public folder!: string;

  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Mis Mercados', url: '/mybaskets', icon: 'archive' },
    { title: 'Más Populares', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Compartir', url: '/folder/Archived', icon: 'share' },
    { title: 'Nueva Canasta', url: '/folder/Trash', icon: 'add' },
    { title: 'Contáctanos', url: '/folder/Spam', icon: 'paper-plane' },
  ];
  public labels = ['Familiar', 'Pareja', 'Ecnómica', 'Viaje', 'Más popular'];


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log(this.folder);
  }

}
