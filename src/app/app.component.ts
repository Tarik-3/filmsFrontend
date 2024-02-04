import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListFilmComponent } from "./list-film/list-film.component";
import { HeaderComponent } from "./header/header.component";
import { DescriptionComponent } from "./description/description.component";
import { ItemFilmComponent } from "./item-film/item-film.component";
import { CollecteService } from './services/collecte.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      CommonModule,
      RouterOutlet,
      ListFilmComponent,
       HeaderComponent,
      DescriptionComponent,
     ItemFilmComponent,
    HttpClientModule]
})
export class AppComponent {
  constructor( ){}
  title = 'films';
  method() {
    console.log("hello")

  }
}
