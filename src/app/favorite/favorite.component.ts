import { Component } from '@angular/core';
import { CollecteService } from '../services/collecte.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemFilmComponent } from "../item-film/item-film.component";

@Component({
    selector: 'app-favorite',
    standalone: true,
    templateUrl: './favorite.component.html',
    styleUrl: './favorite.component.css',
    imports: [FormsModule, CommonModule, ItemFilmComponent]
})
export class FavoriteComponent {

constructor(public service: CollecteService){}
getFavoris(){
  console.log(this.service.favorites);
}
}
